import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { text, voice = 'Zephyr', language = 'en-US' } = await request.json();
    
    if (!text) {
      return NextResponse.json(
        { error: 'Text is required for speech generation' },
        { status: 400 }
      );
    }

    // Use Gemini for text processing (actual TTS would need different API)
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      generationConfig: {
        temperature: 0.7,
      }
    });

    // Generate speech using Gemini's TTS
    const result = await model.generateContent({
      contents: [{
        role: 'user',
        parts: [{
          text: `Convert the following text to speech with voice "${voice}" and language "${language}": ${text}`
        }]
      }],
      generationConfig: {
        candidateCount: 1,
        temperature: 0.7,
      }
    });

    const response = await result.response;
    
    // For now, we'll return the text and let the client handle TTS
    // In a real implementation with Gemini TTS, you would get audio data here
    return NextResponse.json({ 
      success: true, 
      audioUrl: null, // Gemini TTS would return audio URL/data here
      text: text,
      voice: voice,
      language: language,
      message: 'Speech generation prepared. Using client-side TTS as fallback.'
    });

  } catch (error) {
    console.error('Error in text-to-speech API:', error);
    return NextResponse.json(
      { error: 'Failed to generate speech' },
      { status: 500 }
    );
  }
}
