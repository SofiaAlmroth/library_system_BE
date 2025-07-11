# Library System Backend

A RESTful API built with Node.js, Express, and TypeScript. It handles the data logic for the Library System, including books, DVDs, audiobooks, and categories.

Frontend repo: [Library System Frontend](https://github.com/SofiaAlmroth/library_system_FE)

## Tech Stack
- Node.js + Express
- TypeScript
- REST API
- CORS for frontend integration

## Features
- CRUD operations for library items and categories
- Borrow and return functionality
- Organized route structure

## Setup

```bash
git clone https://github.com/SofiaAlmroth/library_system_BE.git
cd library_system_BE
npm install
npm run dev
```

Default port is 5689. To change it, create a .env file:
```env
PORT=5689
```

## Deployment
Can be deployed to platforms like Render or Railway.
For production:

```bash
npm run build
npm start
```

## API Endpoints
/api/libraryItems
/api/categories
/api/users
/api/auth

## Notes
Enable CORS for your frontend URL in index.ts.

You can test routes with Postman or Thunder Client.

🤝 Feedback and pull requests are welcome!
