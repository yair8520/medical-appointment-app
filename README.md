# Medical Appointment App

A React Native application for managing medical appointments.

## Features

- User authentication with persistent session
- Book appointments by selecting medical specialties
- Calendar management for date/time selection
- Appointment summary and confirmation
- Manage existing appointments (view, edit, cancel)
- Data persistence with AsyncStorage
- **One appointment per day per specialty** — enforced automatically

## Tech Stack

- React Native with Expo
- TypeScript
- Redux Toolkit
- React Navigation
- AsyncStorage

## Getting Started

### Prerequisites

- Node.js
- Expo CLI

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Run on your preferred platform:

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── constants/          # App constants
├── hooks/              # Custom React hooks
├── mocks/              # Mock data
├── navigation/         # Navigation config
├── screens/            # App screens
├── services/           # Storage services
├── store/              # Redux store
├── types/              # TypeScript types
└── utils/              # Utility functions
```

## Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web browser
- `npm run format` - Format code with Prettier
