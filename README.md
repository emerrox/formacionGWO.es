
# GWO Landing Page (gwotraining.es)

This is a Next.js application for gwotraining.es, a company specializing in GWO (Global Wind Organisation) training courses.

## Getting Started

### Prerequisites

- Node.js (version 18.x or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    This project uses npm as its package manager. Run the following command to install all necessary dependencies:
    ```bash
    npm install
    ```
    This will install packages listed in `package.json`, including Next.js, React, Tailwind CSS, Shadcn UI components, Nodemailer, etc.

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root of your project and add the following SMTP configuration details. These are used for the contact form email functionality.
    ```env
    SMTP_HOST=smtp.mail.ovh.net
    SMTP_PORT=465
    SMTP_SECURE=true
    SMTP_USER=app@totalhse.com
    SMTP_PASS=your_smtp_password_here # Replace with your actual password
    SMTP_FROM=app@totalhse.com

    # Optional: Email address to send contact form submissions to
    # CONTACT_FORM_RECIPIENT=app@totalhse.com 
    ```
    **Important:** Replace `your_smtp_password_here` with your actual SMTP password. Do not commit this file if it contains sensitive credentials.

### Running the Development Server

To start the development server:
```bash
npm run dev
```
Open [http://localhost:9002](http://localhost:9002) (or the port specified in `package.json`) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Genkit AI (Optional)
If you are using Genkit AI features:
-   Run Genkit development server: `npm run genkit:dev`
-   Run Genkit development server with watch mode: `npm run genkit:watch`

## Building for Production

To build the application for production:
```bash
npm run build
```
This command creates an optimized build of your application in the `.next` folder.

To run the production build locally (if not using static export):
```bash
npm run start
```
If `output: 'export'` is set in `next.config.ts`, the build will be in the `out` directory and can be served with any static file server.

## Linting and Type Checking

-   To lint your code:
    ```bash
    npm run lint
    ```
-   To perform type checking with TypeScript:
    ```bash
    npm run typecheck
    ```

## Key Features

-   **Hero Section:** Engaging introduction to gwotraining.es.
-   **Course Listings:** Detailed information about each GWO course offered.
-   **Contact Information:** Easy access to address, email, and phone.
-   **Contact Form:** Allows users to send inquiries directly (via external PHP script for static export).
-   **SEO Optimized:** Includes JSON-LD for course listings and other SEO best practices.
-   **Responsive Design:** Adapts to various screen sizes for optimal viewing on all devices.
-   **Accessible:** Built with accessibility in mind.

## Technology Stack

-   Next.js (App Router, configured for static export)
-   React
-   TypeScript
-   Tailwind CSS
-   Shadcn/UI
-   Lucide React (for icons)
-   Genkit (for AI features, if enabled)

## CI/CD Dependency Check
It is highly recommended to include a dependency integrity check in your CI/CD pipeline. For example, using `npm ci` ensures a clean and consistent installation of dependencies based on `package-lock.json`:
```bash
npm ci
```
Alternatively, `npm ls` can be used to check for missing or incorrect package versions, though `npm ci` is preferred for CI environments.
```bash
npm ls || true # Use || true if you want the pipeline to continue even if ls shows issues (not recommended for strict checks)
```

## Customization
-   **Theme & Styling:** Modify `src/app/globals.css` for global styles and Tailwind CSS theme customization. Individual components can be styled using Tailwind classes.
-   **Course Data:** Update course information in `src/config/courses.ts`.
-   **Contact Information:** Change contact details in `src/components/landing/contact-info-section.tsx`.
-   **Contact Form Endpoint:** The PHP endpoint for the contact form is configured in `src/components/landing/contact-form.tsx`.
