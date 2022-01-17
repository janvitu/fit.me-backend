# 4IT580: Backend

## Requirements

- Node.js v14 (or later)
- Yarn (`npm install --global yarn`)

## Setup ENV Variables

```
cp ./.env ./.env.local
```

Edit `.env.local` file (DB user, password, ...)

## Install Dependencies

```bash
yarn install
```

## `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

## Seed Database

Using phpMyAdmin or MySQL Workbench run following SQL: [`./db/seed.sql`](./db/seed.sql)

## Run Production

```bash
yarn start
```

## Build Production

```bash
yarn build
```

### Build Production and Watch for Changes

```bash
yarn build:watch
```

## ENV config

### JWT

- JWT_SECRET

### database connection

- DB_HOST
- DB_PORT
- DB_USER
- MYSQL_PASSWORD
- DB_NAME


### URLS

- VERIFY_MAIL_URL
- RESET_PASSWORD_MAIL_URL
- REDIRECT_URL

### Google SMTP options

- G_USER
- G_PASS

### Supabase connection options

- SUPABASE_URL
- SUPABASE_ANON_KEY
