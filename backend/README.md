# Backend (backend)

[Back](../README.md)

## Contents

- [Backend (backend)](#backend-backend)
  - [Contents](#contents)
  - [Setup](#setup)
    - [DB](#db)
    - [App](#app)
  - [Development](#development)
    - [Test](#test)
    - [Lint](#lint)
  - [Build](#build)

## Setup

Configure `.env` based on `.env.example`

### DB

```bash
docker compose up -d
```

```bash
npm run db:generate
```

```bash
npm run db:migrate
```

To open live DB studio
```bash
npm run db:studio
```

### App

Install npm packages
```bash
npm install
```

## Development

Start for development server
```bash
npm run dev
```

### Test

Run all tests

```bash
npm run test
```

or, run all test and watch

```bash
npm run test:watch
```

###  Lint

Check lint errors

```bash
npm run lint
```

## Build

Build into `dist`
```bash
npm run build
```

Run server from `dist`
```bash
npm run start
```