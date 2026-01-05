# Personal Hackathon Landing Page

A modern, interactive landing page for the Personal Hackathon program - a 4-week intensive designed to help entrepreneurs ship their ideas and build thriving communities. Features a comprehensive qualification survey, animated UI components, and a conversion-optimized design.

## 🎯 Overview

This landing page serves as the primary entry point for the Personal Hackathon program. It combines compelling copy, interactive elements, and a smart qualification system to identify and convert the right candidates for the program.

### Key Features

- **Interactive Qualification Survey**: 7-question assessment that scores applicants and provides personalized outcomes
- **Animated Landing Sections**: Hero, value proposition, process overview, testimonials, and CTA sections
- **Responsive Design**: Fully responsive layout optimized for all device sizes
- **Smooth Animations**: Intersection Observer-based scroll animations and floating background elements
- **Modern UI/UX**: Dark theme with gradient accents, glassmorphism effects, and intuitive navigation

## 🛠️ Tech Stack

- **React 18.3.1** - UI framework
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React 0.344.0** - Icon library
- **ESLint** - Code linting

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-hackathon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173` (or the port shown in your terminal)

## 🚀 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
personal-hackathon/
├── src/
│   ├── components/          # React components
│   │   ├── CTASection.tsx           # Call-to-action section
│   │   ├── EarlyAccessDeal.tsx      # Early access pricing section
│   │   ├── FloatingCircles.tsx      # Animated background circles
│   │   ├── Header.tsx               # Navigation header
│   │   ├── HeroSection.tsx          # Main hero section
│   │   ├── IdeaPurgatorySection.tsx # Problem identification section
│   │   ├── ProcessCard.tsx          # Process step card component
│   │   ├── ProcessSection.tsx       # 4-week process overview
│   │   ├── QualificationSurvey.tsx   # Main survey component
│   │   ├── SurveyOutcome.tsx        # Survey results display
│   │   ├── TestimonialCard.tsx      # Testimonial card component
│   │   └── ValueSection.tsx         # Value proposition section
│   ├── types/
│   │   └── survey.ts                # TypeScript types for survey
│   ├── App.tsx                      # Main application component
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Global styles
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── tailwind.config.js               # Tailwind CSS configuration
├── vite.config.ts                   # Vite configuration
└── tsconfig.json                    # TypeScript configuration
```

## 🎨 Key Components

### QualificationSurvey

The core interactive component that guides users through a 7-question assessment:

- **Questions**: Covers situation, time commitment, experience, motivations, budget, work style, and frustrations
- **Scoring System**: Each answer awards points (0-20 per question)
- **Outcomes**: Four possible results based on total score:
  - `rejection` (≤35 points)
  - `not-ready` (36-55 points)
  - `maybe-ready` (56-75 points)
  - `definitely-ready` (76+ points)
- **Features**: Progress tracking, navigation (previous/next), answer persistence

### Survey Logic

The survey uses a weighted scoring system defined in `src/types/survey.ts`:

```typescript
// Example question structure
{
  id: 1,
  question: "What best describes your current situation?",
  maxPoints: 15,
  options: [
    { text: "Option 1", points: 3 },
    { text: "Option 2", points: 8 },
    // ...
  ]
}
```

### Landing Page Sections

1. **HeroSection**: Main value proposition with CTA
2. **IdeaPurgatorySection**: Identifies common problems
3. **EarlyAccessDeal**: Pricing and early access offer
4. **ProcessSection**: 4-week program breakdown
5. **ValueSection**: Benefits and outcomes
6. **CTASection**: Final conversion opportunity

## 🎭 Styling & Design

- **Color Scheme**: Dark gray-900 background with yellow-400/600 accents and purple-400 highlights
- **Typography**: Bold headings with relaxed line-height for readability
- **Effects**: 
  - Glassmorphism (backdrop blur with transparency)
  - Gradient backgrounds
  - Smooth transitions and hover effects
  - Floating animated circles background
- **Responsive Breakpoints**: Mobile-first design with `lg:` breakpoints for desktop

## 🔧 Configuration

### Tailwind CSS

Custom configuration in `tailwind.config.js` includes:
- Custom color palette
- Extended spacing and typography
- Custom animations

### Vite

Optimized configuration in `vite.config.ts`:
- React plugin
- Optimized dependency handling for `lucide-react`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel/Netlify

1. Connect your repository to Vercel or Netlify
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

### Environment Variables

Currently, no environment variables are required. If you need to add API endpoints or other configuration, create a `.env` file:

```env
VITE_API_URL=https://api.example.com
```

Access in code via `import.meta.env.VITE_API_URL`

## 🧪 Development Notes

### Adding New Survey Questions

1. Edit `src/types/survey.ts`
2. Add question to `SURVEY_QUESTIONS` array
3. Update `calculateOutcome` thresholds if needed
4. The survey component will automatically handle the new question

### Customizing Colors

Edit `tailwind.config.js` to modify the color palette, or update classes directly in components.

### Adding New Sections

1. Create component in `src/components/`
2. Import and add to `App.tsx`
3. Follow existing section patterns for consistency

## 📝 License

[Add your license here]

## 👤 Author

Leo Guinan

## 🤝 Contributing

[Add contribution guidelines if applicable]

---

**Built with ❤️ using React, TypeScript, and Vite**
