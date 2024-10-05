# User Dashboard

This project is a **simple dashboard** that displays a list of users fetched from a REST API. It allows the user to filter and sort the list while ensuring the layout is responsive and adapts to different screen sizes.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Why Client-Side Rendering (CSR)?](#why-client-side-rendering-csr)
- [Customization](#customization)
- [License](#license)

## Tech Stack

- **Framework**: Nextjs (Client-Side Rendered)
- **UI Framework**: [shadcn](https://github.com/shadcn) (based on Radix UI)
- **CSS**: Tailwind CSS + Sass modules
- **API**: RESTful API + React query
- **Package Manager**: npm
- **E2E Testing framework**: Playwright

## Project Structure

```bash
├── src/
│   ├── api/           # Api call functions
│   ├── components/    # Reusable UI components
│   ├── constants/     # Constant values (Test ids, etc.)
│   ├── hooks/         # Custom React hooks (API calls, etc.)
│   ├── pages/         # Main pages (Dashboard, etc.)
│   ├── services/      # Thrid party service wrappers
│   ├── styles/        # Base CSS setup
│   ├── types/         # Shared types (Data types, etc.)
│   └── utils/         # Helper functions (sorting, filtering)
├── public/            # Static assets
├── e2e/               # E2E test files seperated by pages
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/badri-derakhshan/corsearch-assignment.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```

4. The application should now be running at [http://localhost:3000](http://localhost:3000).

5. To run tests:

   ```bash
   npm t
   ```

## Why Client-Side Rendering (CSR)?

This project is **client-side rendered** (CSR) because:

- **Easier for development**: No need for complex server-side rendering logic.
- **Reduced server load**: The bulk of the work is handled by the user's browser, which leads to fewer server resources being used.
- **No need for SEO**: Since this is a dashboard, search engine optimization (SEO) is not a priority, making CSR a suitable choice.

## Customization

The UI components are built using **shadcn**, a lightweight design system based on **Radix UI**. This allowing you to easily adapt the look and feel of the components to suit your needs.

## License

This project is licensed under the MIT License.
