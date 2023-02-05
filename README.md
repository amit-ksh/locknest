# Locknest

Locknest is the Progressive Web App(PWA) application that allows users to store and manage their passwords and other personal information like bank accounts and payment card infos in a single place. In short, it is the online password manager or digital wallet for the users.

Website: [Locknest](https://locknest.vercel.app)

### Tech Stack Used

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&**logoColor**=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/prisma-brightgreen.svg?style=for-the-badge&logo=prisma&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Setting the local enviroment

1. Clone the repo and install the dependencies

   ```bash
   git clone https://github.com/amit-ksh/locknest.git
   cd locknest
   npm install
   ```

1. Creating the .env file and set the following variables

   ```bash
   DATABASE_URL='YOUR_POSTGRESQL_DB_URL'
   JWT_SECRET='YOUR_JWT_SECRET'
   ```

1. Run the development server:

   ```bash
   npm run dev
   ```

1. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.
