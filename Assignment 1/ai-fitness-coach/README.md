# 💪 AI Fitness Coach

An advanced AI-powered fitness assistant built with **Next.js 14** that generates **personalized 7-day workout and diet plans** using Google Gemini AI. Features include AI image generation, voice synthesis, PDF export, and a modern responsive design.

## 🚀 Features

### Core Functionality
- **Personalized AI Plans**: Custom 7-day workout and diet plans based on user profile
- **Advanced Multi-Step Form**: Beautiful form with validation and smooth animations
- **AI Image Generation**: Unique images for each exercise and meal using multiple AI APIs
- **Voice Synthesis**: Text-to-speech functionality with customizable settings
- **PDF Export**: Professional plan export for offline use
- **Local Storage**: Plan persistence and user preferences
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Daily Motivation**: AI-generated motivational quotes

### User Input Collection
- **Basic Info**: Name, Age, Gender
- **Physical Measurements**: Height, Weight, Sleep Hours, Water Intake
- **Fitness Goals**: Weight Loss, Muscle Gain, General Fitness, Endurance, Strength, Flexibility
- **Fitness Level**: Beginner, Intermediate, Advanced
- **Workout Location**: Home (No Equipment), Home (Basic Equipment), Gym, Outdoor
- **Dietary Preferences**: Non-Vegetarian, Vegetarian, Vegan, Keto, Paleo, Mediterranean
- **Optional**: Medical history, stress level

### AI-Generated Content
- **7-Day Workout Plans**: Detailed exercises with sets, reps, rest times, and instructions
- **7-Day Diet Plans**: Meal breakdowns with calories, ingredients, and macros
- **Personalized Tips**: Lifestyle and fitness recommendations
- **Daily Motivation**: AI-generated motivational quotes
- **Exercise Images**: Unique AI-generated images for each exercise
- **Meal Images**: Unique AI-generated images for each meal

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS + Shadcn UI |
| **AI Integration** | Google Gemini API (gemini-2.5-flash) |
| **Image Generation** | Gemini, Pollinations.ai, Stability AI, Getimg.ai, DeepAI, Replicate, DALL-E |
| **Voice Synthesis** | Web Speech API + Gemini TTS |
| **PDF Generation** | jsPDF (serverless-compatible) |
| **State Management** | React Hooks + Local Storage |
| **Type Safety** | TypeScript |
| **Theme** | next-themes |

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Google Gemini API key (free tier available)

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/soni0021/ai-fitness-coach.git
   cd ai-fitness-coach
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your API keys:
   ```env
   # Required: Google Gemini API Key
   GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here
   
   # Optional: Additional AI Image Generation APIs
   STABILITY_API_KEY=your_stability_api_key_here
   GETIMG_API_KEY=your_getimg_api_key_here
   DEEPAI_API_KEY=your_deepai_api_key_here
   REPLICATE_API_KEY=your_replicate_api_key_here
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Get Google Gemini API Key** (Required)
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy and paste it into your `.env.local` file

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

1. **Fill User Profile**: Complete the multi-step form with your details
   - Enter your basic information (name, age, gender)
   - Add physical measurements (height, weight, sleep, water intake)
   - Select your fitness goals and level
   - Choose workout location and dietary preferences
   - Optionally add medical history

2. **Generate Plan**: Click "Generate My Plan" to create your personalized 7-day plan
   - AI analyzes your profile
   - Creates comprehensive workout and diet plans
   - Generates personalized tips and motivation

3. **Listen to Plans**: Use "Read My Plan" button
   - Select section to read (Workout Plan or Diet Plan)
   - Choose voice and speed
   - Listen to your plan being read aloud

4. **View Images**: Click image buttons next to exercises/meals
   - Generate unique AI images for each exercise
   - Generate unique AI images for each meal
   - Images are generated on-demand using AI

5. **Export PDF**: Click "Export PDF" button
   - Download your complete plan as PDF
   - Includes all workouts, meals, and tips
   - Perfect for offline access

6. **Regenerate**: Click "Regenerate" to create a new plan
   - Get different variations of your plan
   - Try different approaches and exercises

## 🏗️ Project Structure

```
ai-fitness-coach/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── generate-plan/route.ts      # Main plan generation API
│   │   │   ├── generate-image/route.ts     # AI image generation API
│   │   │   ├── motivational-quote/route.ts # Daily quotes API
│   │   │   └── text-to-speech/route.ts     # TTS API
│   │   ├── globals.css                     # Global styles
│   │   ├── layout.tsx                      # Root layout
│   │   └── page.tsx                        # Main page
│   ├── components/
│   │   ├── ui/                             # Shadcn UI components
│   │   ├── UserForm.tsx                    # Multi-step form
│   │   ├── PlanDisplay.tsx                 # Plan visualization
│   │   ├── TTSControls.tsx                # Voice controls
│   │   ├── ImageGenerator.tsx              # Image generation UI
│   │   ├── MotivationalQuote.tsx           # Daily motivation
│   │   ├── ThemeProvider.tsx               # Theme management
│   │   ├── ThemeToggle.tsx                 # Dark/light toggle
│   │   ├── LoadingSpinner.tsx              # Loading indicator
│   │   └── ErrorBoundary.tsx              # Error handling
│   └── lib/
│       ├── gemini.ts                       # Gemini AI integration
│       ├── tts.ts                          # Text-to-speech utilities
│       └── utils.ts                        # Utility functions
├── public/                                 # Static assets
├── .env.example                            # Environment variables template
├── next.config.ts                          # Next.js configuration
├── tailwind.config.ts                      # Tailwind CSS configuration
├── tsconfig.json                           # TypeScript configuration
└── package.json                            # Dependencies
```

## 🎨 AI Image Generation

The application uses multiple AI image generation APIs to ensure images are always available:

### Primary Methods (in order of priority):
1. **Google Gemini Image Generation** - Uses `gemini-2.5-flash-image` model
2. **Pollinations.ai** - FREE, no API key required! Currently working
3. **Stability AI** - Stable Diffusion XL (requires API key)
4. **Getimg.ai** - Stable Diffusion (requires API key)
5. **DeepAI** - Text-to-image (requires API key)
6. **Replicate API** - Stable Diffusion (requires API key)
7. **OpenAI DALL-E** - Premium images (requires API key)

### Fallback System:
- Enhanced Unsplash fallback with variety
- Different images for different exercises/meals
- Always returns a working image

### How It Works:
- Each exercise/meal gets a unique AI-generated image
- Images are generated on-demand when user clicks image button
- Multiple APIs ensure availability even if one fails
- Professional quality fitness and food photography

## 🔊 Text-to-Speech (TTS)

### Features:
- **Web Speech API**: Built-in browser voices (free)
- **Gemini TTS**: Premium AI voices (requires API key)
- **Section Selection**: Choose to read Workout Plan or Diet Plan
- **Voice Control**: Play, pause, stop, and speed adjustment
- **Multiple Voices**: Choose from available system voices

### Usage:
1. Click "Read My Plan" button
2. Select section (Workout or Diet)
3. Choose voice and speed
4. Click play to start reading

## 📄 PDF Export

### Features:
- Complete plan export including all content
- Professional formatting
- Serverless-compatible (works on Vercel)
- Includes workouts, meals, tips, and motivation
- Downloadable for offline use

### Usage:
1. Generate your plan
2. Click "Export PDF" button
3. PDF downloads automatically
4. Open in any PDF viewer

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository

3. **Add Environment Variables**
   - Go to Project Settings > Environment Variables
   - Add `GOOGLE_GEMINI_API_KEY` and other API keys
   - Save and redeploy

4. **Deploy**
   - Vercel automatically deploys on push
   - Get your live URL instantly

### Other Platforms

The app is serverless-compatible and can be deployed on:
- **Netlify**: Connect GitHub repo, add env vars, deploy
- **Railway**: Import repo, add env vars, deploy
- **DigitalOcean App Platform**: Create app from GitHub
- **AWS Amplify**: Connect repo, configure build, deploy

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Environment Variables for Production

Make sure to add these in your deployment platform:
```env
GOOGLE_GEMINI_API_KEY=your_production_key_here
STABILITY_API_KEY=your_key_here          # Optional
GETIMG_API_KEY=your_key_here             # Optional
DEEPAI_API_KEY=your_key_here             # Optional
REPLICATE_API_KEY=your_key_here          # Optional
OPENAI_API_KEY=your_key_here             # Optional
```

## 🔧 Configuration

### Customizing AI Prompts

Edit prompts in `src/lib/gemini.ts`:
- Workout plan generation prompts
- Diet plan creation prompts
- Motivational quote prompts
- Adjust temperature, topK, topP for different outputs

### Styling Customization

- **Theme Colors**: Modify `tailwind.config.ts`
- **Global Styles**: Update `src/app/globals.css`
- **Components**: Customize Shadcn components in `src/components/ui/`

### Image Generation Settings

Edit `src/app/api/generate-image/route.ts`:
- Adjust image generation prompts
- Modify image size and quality
- Add/remove AI image generation APIs
- Customize fallback behavior

## 🎨 Design Features

- **Modern UI**: Clean, professional interface with smooth animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Performance**: Optimized loading, lazy loading, efficient API calls
- **Black & White Theme**: Professional color scheme with dark mode support
- **Mobile-First**: Touch-friendly interactions and responsive layouts

## 🔒 Security

### Best Practices
- Never commit `.env.local` to version control
- Use different API keys for development and production
- Rotate API keys regularly
- Implement rate limiting for production
- Monitor API usage to prevent abuse

### Environment Variables
- Store sensitive keys in `.env.local` (not committed)
- Use platform environment variables for production
- Keep API keys secure and private

## 🐛 Troubleshooting

### Common Issues

1. **API Key Not Working**
   - Verify API key is correct in `.env.local`
   - Check if API key has required permissions
   - Ensure API key is not expired

2. **Images Not Generating**
   - Check browser console for errors
   - Verify image generation APIs are working
   - Fallback system will provide images if AI fails

3. **PDF Export Issues**
   - Ensure all content is loaded before exporting
   - Check browser console for errors
   - Try different browser if issues persist

4. **TTS Not Working**
   - Check browser compatibility (Web Speech API)
   - Verify microphone permissions if needed
   - Try different browser or voice

5. **Build Errors**
   - Clear `.next` folder: `rm -rf .next`
   - Delete `node_modules`: `rm -rf node_modules`
   - Reinstall: `npm install`
   - Rebuild: `npm run build`

## 📊 Performance

### Optimizations
- Server-side rendering for better SEO
- Image optimization with Next.js Image component
- Code splitting for faster loads
- Lazy loading for images and components
- Efficient API calls with caching

### Metrics
- Fast page loads
- Smooth animations
- Efficient API usage
- Minimal bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for intelligent plan generation
- **Pollinations.ai** for free AI image generation
- **Shadcn UI** for beautiful, accessible components
- **Next.js** for the robust framework
- **Tailwind CSS** for utility-first styling
- **All contributors** who helped improve this project

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/soni0021/ai-fitness-coach/issues) page
2. Create a new issue with detailed information
3. Include your environment details and error messages
4. Provide steps to reproduce the issue

## 🌟 Features Summary

✅ **7-Day Personalized Plans** - Complete workout and diet plans  
✅ **AI Image Generation** - Unique images for exercises and meals  
✅ **Text-to-Speech** - Listen to your plans  
✅ **PDF Export** - Download plans offline  
✅ **Dark/Light Mode** - Beautiful theme toggle  
✅ **Responsive Design** - Works on all devices  
✅ **Local Storage** - Plans persist across sessions  
✅ **Daily Motivation** - AI-generated quotes  
✅ **Multiple AI APIs** - Reliable image generation  
✅ **Professional UI** - Modern, clean interface  

---

**Made with ❤️ and AI** - Transform your fitness journey today!

Repository: [https://github.com/soni0021/ai-fitness-coach](https://github.com/soni0021/ai-fitness-coach)
