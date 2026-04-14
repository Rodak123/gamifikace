# Gamifikace

## Content

- [Gamifikace](#gamifikace)
  - [Content](#content)
  - [Parts](#parts)
  - [Prerequisites](#prerequisites)
  - [Setup development enviroment](#setup-development-enviroment)
    - [Using tmux](#using-tmux)
    - [Manually](#manually)
  - [Deploy](#deploy)

## Parts

```
.
├── frontend # The frontend
├── backend # The backend
├── shared # Shared code with both frontend and backend
└── bruno # The backend bruno collection
```

- Go to frontend: [`/frontend`](./frontend/README.md)
- Go to backend: [`/backend`](./backend/README.md)
- Go to shared: [`/shared`](./shared/README.md)

## Prerequisites

Requirements:
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Node v22](https://nodejs.org/en/download)

## Setup development enviroment

### Using tmux

Configure `.env` based on `.env.example`:
- [`/backend/.env.example`](./backend/.env.example)
- [`/frontend/.env.example`](./frontend/.env.example)

Install tmux
```bash
sudo apt install tmux
```

Using tmux create a session for each part
```bash
./bin/setup.sh
```

### Manually

Install npm packages
```bash
npm install
```

Follow each **README.md** inside `/frontend`, `/backend` and `/shared`:

## Deploy

TBD