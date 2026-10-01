# Accessible React Design System & Component Library

A production-grade, accessible React component library built with **TypeScript**, **Tailwind CSS (v4)**, and **Storybook**. Designed with a strong focus on system thinking, component scalability, and WCAG accessibility standards for modern web engineering.

## Key Features

- **Accessibility First (a11y):** Built following WCAG guidelines using semantic HTML, custom ARIA attributes (`aria-invalid`, `aria-describedby`, `role="dialog"`), keyboard navigation (`Escape` triggers, focus management), and React `useId()`.
- **Modern Tech Stack:** Powered by Vite, React 19, TypeScript, and Tailwind CSS v4.
- **Isolated Development:** Fully documented and tested stories using Storybook with real-time automated a11y testing (`@storybook/addon-a11y`).

## Components Developed

1. **Button:** Flexible button component supporting multiple variants (`primary`, `secondary`, `danger`), sizes, loading states, and keyboard focus indicators.
2. **Input:** Form input component featuring dynamic helper text, validation error states, and automatic accessibility pairing using `useId()`.
3. **Modal (Dialog):** Accessible overlay dialog supporting backdrop blur, `Escape` key dismissal, backdrop interaction handlers, and background scroll locking.

## Tech Stack

- **Framework:** React, Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Documentation & Testing:** Storybook, `@storybook/addon-a11y`
- **Version Control:** Git, GitHub

## Getting Started Locally

```bash
# Clone the repository
git clone [https://github.com/vladpavlenko05/my-design-system.git](https://github.com/vladpavlenko05/my-design-system.git)

# Install dependencies
npm install

# Run Storybook development server
npm run storybook