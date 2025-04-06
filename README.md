# 🎬 MoviePlix - Modern Movie Discovery App

A feature-rich mobile application for discovering, exploring, and saving your favorite movies. Built with cutting-edge technologies to deliver a seamless user experience.

## ✨ Features

### Core Functionality
- 🎥 Browse trending, latest, and upcoming movies
- 🔍 Powerful search with real-time results
- ❤️ Save favorites to your personal collection
- 👤 User profile management

### Technical Highlights
- ⚡ Real-time data sync with Appwrite backend
- 🎨 Beautiful UI with NativeWind (Tailwind for React Native)
- 🗺️ Intuitive navigation with Expo Router
- 📱 Optimized for both iOS and Android

## 🛠️ Tech Stack

| Category          | Technology       |
|-------------------|------------------|
| Framework         | React Native     |
| Backend           | Appwrite         |
| Styling           | NativeWind       |
| Navigation        | Expo Router      |
| State Management  | React Context    |
| Language          | TypeScript       |

## 📂 Project Structure

```bash
├── .expo/                    # Expo configuration files
├── .vscode/                  # VS Code configuration
├── app/                      # App routes and navigation
│   ├── (tabs)/               # Tab navigation
│   │   ├── _layout.tsx       # Tab layout configuration
│   │   ├── index.tsx         # Home screen
│   │   ├── profile.tsx       # User profile screen
│   │   ├── saved.tsx         # Saved movies screen
│   │   └── search.tsx        # Search screen
│   ├── movies/               # Movies related screens
│   ├── _layout.tsx           # Root layout configuration
│   └── globals.css           # Global styles
├── assets/                   # Static assets
│   ├── fonts/                # Custom fonts
│   ├── icons/                # App icons
│   └── images/               # App images
├── components/               # Reusable UI components
├── constants/                # App constants
├── interfaces/               # TypeScript interfaces
├── node_modules/             # Node.js dependencies
├── services/                 # Backend services
├── types/                    # TypeScript types
├── .env                      # Environment variables
├── .gitignore                # Git ignore configuration
├── app.json                  # Expo app configuration
├── babel.config.js           # Babel configuration
├── expo-env.d.ts             # Expo environment types
├── metro.config.js           # Metro bundler configuration
├── nativewind-env.d.ts       # NativeWind type definitions
├── package-lock.json         # NPM lock file
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation           
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Expo CLI (`npm install -g expo-cli`)
- Appwrite account (for backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/movieplix.git
cd movieplix
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with:
```env
APPWRITE_ENDPOINT=your_appwrite_endpoint
APPWRITE_PROJECT_ID=your_project_id
APPWRITE_DATABASE_ID=your_database_id
APPWRITE_COLLECTION_ID=your_collection_id
TMDB_API_KEY=your_tmdb_api_key
```

4. Start the development server:
```bash
expo start
```

## 🧠 Key Components

### MovieCard.tsx
Responsible for displaying movie information in a visually appealing card format. Features:
- Dynamic image loading
- Rating display
- Favorite toggle

### useFetch.ts
Custom hook that handles all data fetching operations:
- API calls to TMDB
- Appwrite database interactions
- Error handling
- Loading states

### Appwrite Service
Centralized service for all backend operations:
- User authentication
- Database CRUD operations
- Real-time updates

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
