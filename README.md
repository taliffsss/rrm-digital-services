# Modern Landing Page Template

A beautiful, responsive landing page built with **Next.js 15+**, **TypeScript**, and **Tailwind CSS**. Features dark mode, accessibility, and modern design patterns.

## ✨ Features

- **Next.js 15+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Dark/Light Mode** with CSS variables
- **Responsive Design** for all devices
- **Accessibility** following WCAG guidelines
- **Component-Based Architecture** for reusability
- **SEO Optimized** with proper metadata
- **Performance Optimized** with modern best practices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd my-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
my-project/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with navbar
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Favicon
├── components/            # Reusable components
│   ├── ui/               # UI components
│   │   ├── Button/       # Button component
│   │   ├── Card/         # Card component
│   │   └── Input/        # Input component
│   └── layout/           # Layout components
│       ├── Navbar/       # Navigation bar
│       └── Footer/       # Footer component
├── constants/            # Static content
│   ├── navigation.ts     # Navigation links
│   └── content.ts        # Page content
├── hooks/               # Custom React hooks
│   └── useTheme.ts      # Theme management hook
├── lib/                 # Utility functions
│   └── utils.ts         # Common utilities
├── styles/              # Global styles
│   └── themes/          # Theme CSS files
│       ├── light.css    # Light theme
│       └── dark.css     # Dark theme
├── types/               # TypeScript types
│   └── index.ts         # Shared types
└── public/              # Static assets
```

## 🎨 Theme System

The template includes a comprehensive theme system with CSS variables:

### Light Theme

- Clean, modern design
- High contrast for readability
- Professional color palette

### Dark Theme

- Easy on the eyes
- Consistent with light theme
- Smooth transitions

### Usage

```tsx
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
```

## 🧩 Components

### Button Component

```tsx
import Button from '@/components/ui/Button';

<Button variant="primary" size="lg">
  Get Started
</Button>;
```

### Card Component

```tsx
import { Card, CardHeader, CardContent } from '@/components/ui/Card';

<Card variant="elevated">
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>;
```

### Input Component

```tsx
import Input from '@/components/ui/Input';

<Input
  label="Email"
  placeholder="Enter your email"
  variant="default"
  size="md"
/>;
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🎯 Customization

### Colors

Edit the CSS variables in `styles/themes/light.css` and `styles/themes/dark.css`:

```css
[data-theme='light'] {
  --accent-primary: #3b82f6;
  --text-primary: #0f172a;
  /* ... more variables */
}
```

### Content

Update the content in `constants/content.ts`:

```tsx
export const HERO_CONTENT = {
  title: 'Your Custom Title',
  subtitle: 'Your custom subtitle',
  // ... more content
};
```

### Navigation

Modify navigation links in `constants/navigation.ts`:

```tsx
export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  // ... more items
];
```

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS v4 with the new `@import "tailwindcss"` syntax. Custom styles are added using `@layer` directives.

### ESLint

ESLint is configured with Next.js recommended rules and TypeScript support.

### Prettier

Prettier is configured for consistent code formatting with single quotes and 80-character line width.

## 📱 Responsive Design

The template is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any static hosting service:

- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any VPS with Node.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Vercel](https://vercel.com/) for hosting and deployment

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
