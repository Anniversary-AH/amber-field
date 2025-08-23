# Amber-Field Portfolio

A modern, clean portfolio website inspired by the design aesthetic of Interise. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimal aesthetic with generous white space and bold typography
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle scroll animations and hover effects for enhanced user experience
- **Accessibility**: Built with accessibility in mind, including proper ARIA labels and keyboard navigation
- **Performance Optimized**: Fast loading times with optimized images and efficient code
- **Contact Form**: Functional contact form with GoDaddy SMTP relay integration

## Sections

1. **Navigation**: Sticky navigation with smooth scrolling to sections
2. **Hero**: Full-screen hero section with bold typography and call-to-action
3. **About**: Two-column layout describing Amber-Field's mission and approach
4. **Projects**: Grid layout showcasing portfolio projects with hover effects
5. **Approach**: Numbered steps showing the creative process
6. **Contact**: Contact form with SMTP email integration and footer links

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library (available for enhanced animations)
- **Nodemailer**: SMTP email sending functionality

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- GoDaddy hosting account (for SMTP relay)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amber-field
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp env.example .env.local

# Edit .env.local with your GoDaddy SMTP settings
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## SMTP Configuration

### GoDaddy SMTP Setup

1. **Copy the environment file**:
   ```bash
   cp env.example .env.local
   ```

2. **Edit `.env.local`** with your GoDaddy SMTP settings:
   ```env
   SMTP_HOST=smtpout.secureserver.net
   SMTP_PORT=587
   SMTP_USER=your-email@yourdomain.com
   SMTP_PASS=your-smtp-password
   SMTP_FROM=your-email@yourdomain.com
   SMTP_TO=hello@amber-field.com
   ENABLE_EMAIL_SENDING=true
   ```

3. **Get your GoDaddy SMTP credentials**:
   - Log into your GoDaddy hosting control panel
   - Go to Email & Office > Manage
   - Find your email account settings
   - Use the SMTP settings provided by GoDaddy

4. **Test the contact form**:
   - Fill out the contact form on your website
   - Check if emails are received at the `SMTP_TO` address
   - Check server logs for any SMTP errors

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | GoDaddy SMTP server | `smtpout.secureserver.net` |
| `SMTP_PORT` | SMTP port (usually 587) | `587` |
| `SMTP_USER` | Your email address | `your-email@yourdomain.com` |
| `SMTP_PASS` | Your email password | `your-password` |
| `SMTP_FROM` | From email address | `your-email@yourdomain.com` |
| `SMTP_TO` | Recipient email address | `hello@amber-field.com` |
| `ENABLE_EMAIL_SENDING` | Enable/disable email sending | `true` or `false` |

### Troubleshooting SMTP

- **Authentication failed**: Check your email and password
- **Connection timeout**: Verify SMTP host and port
- **Emails not sending**: Check if `ENABLE_EMAIL_SENDING=true`
- **Development mode**: Set `ENABLE_EMAIL_SENDING=false` to disable email sending during development

## Project Structure

```
amber-field/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Main page component
├── components/
│   ├── navigation.tsx            # Sticky navigation
│   ├── hero-section.tsx          # Hero section
│   ├── about-section.tsx         # About section
│   ├── projects-section.tsx      # Projects grid
│   ├── approach-section.tsx      # Process steps
│   └── contact-section.tsx       # Contact form and footer
├── env.example                   # Environment variables template
├── tailwind.config.js            # Tailwind configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies and scripts
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`. The current palette includes:
- Primary: Black and white
- Accent: Amber tones
- Background: White and light gray

### Typography
Fonts are configured in `tailwind.config.js` and `globals.css`:
- Primary: Inter (Google Fonts)
- Secondary: Space Grotesk (Google Fonts)

### Content
Update the content in each component file:
- `hero-section.tsx`: Main headline and description
- `about-section.tsx`: Company description
- `projects-section.tsx`: Project data and images
- `approach-section.tsx`: Process steps
- `contact-section.tsx`: Contact information

### Email Template
The email template is defined in `app/api/contact/route.ts`. You can customize:
- Email subject line
- HTML email template
- Form validation rules
- Error handling

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
Build the project for production:
```bash
npm run build
npm start
```

**Important**: Don't forget to set up your environment variables on your hosting platform!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please contact hello@amber-field.com
