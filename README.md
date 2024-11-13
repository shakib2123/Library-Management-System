# Library Management System API

## Project Description

The Library Management System API is a backend API designed for managing library
operations. It provides CRUD operations for books, members, and borrow records,
with additional functionality for borrowing and returning books. This API
enables library staff and members to efficiently handle book inventory, member
management, and overdue tracking.

## Live URL

[Deployed API Link](https://library-management-system-ten-pi.vercel.app/)

## Technology Stack & Packages

- Node.js: Server runtime environment
- Express.js: Web application framework
- Prisma ORM: Object-Relational Mapper for interacting with PostgreSQL
- PostgreSQL: Relational database system
- TypeScript: Static typing for JavaScript
- Zod: Schema validation for TypeScript

## Key Features & Endpoints

### Book CRUD Operations

- **Create Book:** `POST /api/books`
- **Read All Books:** `GET /api/books`
- **Read Book by ID:** `GET /api/books/:bookId`
- **Update Book:** `PUT /api/books/:bookId`
- **Delete Book:** `DELETE /api/books/:bookId`

### Member CRUD Operations

- **Create Member:** `POST /api/members`
- **Read All Members:** `GET /api/members`
- **Read Member by ID:** `GET /api/members/:memberId`
- **Update Member:** `PUT /api/members/:memberId`
- **Delete Member:** `DELETE /api/members/:memberId`

### Borrow & Return Books

- **Borrow a Book:** `POST /api/borrow`
- **Return a Book:** `POST /api/return`

### Overdue Borrow List

- **Track Overdue Books:** `GET /api/borrow/overdue`

## Error Handling

In case of errors, the API returns a response structure as follows:

```json
{
  "success": false,
  "status": <HTTP_STATUS_CODE>,
  "message": "<Error message>"
}
```

## Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/shakib2123/Library-Management-System
```

2. **Install Dependencies**

```bash
npm install
```

3. **Database Setup**

- Configure PostgreSQL and Prisma ORM.
- Update the `.env` file with your database connection URL.

4. **Run Migrations**

```bash
npx prisma migrate dev
```

5. Run the Application

```bash
npm run dev
```

## Known Issues / Bugs

- None reported.
