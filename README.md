💳 Payment Center

A clean and modern payment center built to display multiple payment methods in a simple, fast, and user-friendly interface.

Users can easily view payment details and copy account numbers or IBANs with a single click.

✨ Features

- 🌙 Modern dark UI
- 📱 Fully responsive design
- 🌍 Arabic RTL support
- 📋 One-click copy for payment details
- 🧩 Reusable React components
- ⚡ Fast and lightweight
- 🛠️ Easy to customize and extend
- 🚀 Ready for deployment

🧰 Tech Stack

Technology| Usage
Next.js 16| Application framework
React 19| UI development
TypeScript| Type safety
Tailwind CSS v4| Styling
Lucide React| Icons

📁 Project Structure

payment-center/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── copy-button.tsx
│   └── payment-card.tsx
│
├── data/
│   └── payment-methods.ts
│
├── package.json
├── tsconfig.json
└── README.md

🎨 Design

The interface follows a minimal dark design focused on:

- Clear payment information
- Simple navigation
- Strong visual hierarchy
- Responsive layouts
- Fast interaction

⚙️ Getting Started

Clone the repository:

git clone <your-repository-url>

Navigate to the project:

cd payment-center

Install dependencies:

npm install

Start the development server:

npm run dev

Then open:

http://localhost:3000

🚀 Deployment

The project can be deployed easily on platforms such as:

- Vercel
- Netlify

Build the project with:

npm run build

📌 Customization

Payment methods are managed from:

data/payment-methods.ts

You can add, remove, or update payment providers without changing the main page structure.

📄 License

This project is available for personal and commercial use. Customize it freely for your own needs.