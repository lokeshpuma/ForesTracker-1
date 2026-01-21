# ForesTracker

A comprehensive forest management and wildlife tracking application built with Next.js, React, and TypeScript.

## Overview

ForesTracker is a modern web application designed for forest monitoring, wildlife tracking, and environmental management. It provides a dashboard interface for viewing activities, managing inventory, tracking wildlife, generating reports, and managing user profiles.

## Features

- **Dashboard**: Overview statistics and recent activities
- **Wildlife Tracking**: Monitor and manage wildlife data
- **Inventory Management**: Track forest resources and inventory
- **Activities**: Log and view forest management activities
- **Reports**: Generate and view environmental reports
- **Notifications**: Receive real-time notifications
- **User Profile**: Manage user settings and preferences
- **Dark/Light Mode**: Theme switching capability
- **Responsive Design**: Mobile-friendly interface

## Tech Stack

- **Framework**: Next.js 15.1.0
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form
- **Theme**: Next Themes
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ForesTracker.git
cd ForesTracker-1
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Building for Production

### Static Export (GitHub Pages)

ForesTracker is configured for static export, making it deployable to GitHub Pages:

```bash
pnpm build
# or
npm run build
```

This generates static files in the `out` directory.

### Deploy to GitHub Pages

1. **Update repository information** in your GitHub settings to enable GitHub Pages

2. **Install gh-pages** (if not already installed):
```bash
pnpm add -D gh-pages
# or
npm install --save-dev gh-pages
```

3. **Deploy using the deployment script**:
```bash
pnpm deploy
# or
npm run deploy
```

Alternatively, you can manually deploy:
```bash
pnpm build
gh-pages -d out
```

4. **Configure GitHub Pages**:
   - Go to your repository Settings → Pages
   - Select `gh-pages` branch as the source
   - Your site will be available at `https://yourusername.github.io/ForesTracker-1`

### Custom Domain (Optional)

If you have a custom domain:
1. Create a `CNAME` file in the `public` directory with your domain name
2. Configure DNS settings with your domain provider
3. Set the custom domain in GitHub Pages settings

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── activities/        # Activities page
│   ├── inventory/         # Inventory page
│   ├── notifications/     # Notifications page
│   ├── profile/           # User profile page
│   ├── reports/           # Reports page
│   ├── settings/          # Settings page
│   ├── wildlife/          # Wildlife tracking page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ui/               # UI component library
│   └── dashboard-*.tsx   # Dashboard components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Global styles
└── configuration files    # Next.js, TypeScript, Tailwind config
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (creates static export)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm export` - Build static files for export
- `pnpm deploy` - Build and deploy to GitHub Pages

## Environment Variables

If you need environment variables, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_BASE_PATH=/ForesTracker-1
```

## Configuration

### Next.js Config

The application is configured with:
- **Static Export**: Enabled for GitHub Pages compatibility
- **Image Optimization**: Disabled for static exports
- **ESLint/TypeScript**: Build errors ignored (can be adjusted)

### Tailwind CSS

Tailwind CSS is configured in `tailwind.config.ts` for styling consistency.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit changes (`git commit -m 'Add AmazingFeature'`)
3. Push to branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## Troubleshooting

### Build Fails
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `pnpm install`
- Rebuild: `pnpm build`

### GitHub Pages Not Updating
- Clear browser cache (Ctrl/Cmd + Shift + Delete)
- Wait a few minutes for GitHub Pages to update (typically 1-2 minutes)
- Check that `gh-pages` branch exists in repository settings

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that `globals.css` is imported in layout
- Verify no conflicting CSS rules

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI Components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Last Updated**: January 2026

**Happy Tracking! 🌲**
