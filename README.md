# 🎵 IconMusic AI

> AI-Powered Mood-Based Music Discovery Platform

IconMusic AI is a mood-first music recommendation platform that helps users discover songs based on how they feel rather than what they search for.

Instead of browsing playlists or artists, users simply describe their mood, and IconMusic AI generates personalized recommendations, listening insights, personality archetypes, mood analytics, and shareable listening reports.

---

## ✨ Features

### 🎧 AI Mood-Based Recommendations
- Natural language mood input
- AI-powered mood detection
- Personalized song recommendations
- AI-generated coaching messages
- Context-aware music discovery

### ❤️ Favorites System
- Save favorite songs
- Persistent local storage
- Remove songs individually
- Clear entire favorites library
- Favorites survive page refreshes

### 📚 Smart Music Collections
Automatically organizes favorite songs into:

- ❤️ Healing
- ⚡ Motivational
- 🌙 Late Night
- ✨ Hopeful
- 💔 Heartbreak
- 🎵 Other

### 📈 Activity Feed
Tracks user interactions including:

- Mood searches
- Recommended songs
- Listening behavior
- Recommendation history

### 🕒 Mood History
Maintains a timeline of:

- Previous moods
- Emotional patterns
- Listening trends

### 🎭 Dynamic Personality Archetypes
Users are automatically categorized into listening personalities:

- Explorer
- Motivator
- Dreamer
- Optimist
- Healer
- Night Owl

### 📊 AI Listening Report
Generates personalized reports including:

- Dominant mood
- Total listening sessions
- Saved songs
- Listening archetype

### 📸 Shareable Listening Report
- Export report as image
- Social-media-friendly layout
- Personalized listening summary

### 📱 Mobile App Experience
Dedicated screens:

- Home
- Library
- Insights
- Profile

Mobile-first UI with smooth navigation and animations.

---

## 🏗 Architecture

```text
User Mood Input
        │
        ▼
AI Mood Detection
        │
        ▼
Recommendation Engine
        │
        ▼
Music Dataset
        │
        ▼
Recommendations + Insights
```

Additional Layers:

```text
Favorites Layer
Activity Layer
Mood History Layer
Archetype Layer
Listening Report Layer
```

---

## 🛠 Tech Stack

### Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Framer Motion

### State Management
- React Hooks
- Local Storage

### AI Layer
- Gemini API
- Custom Recommendation Logic

### Exporting
- html-to-image

### Deployment
- Vercel (Planned)

---

## 📂 Project Structure

```bash
src
│
├── app
│   ├── page.tsx
│   ├── home
│   ├── library
│   ├── insights
│   └── profile
│
├── components
│   ├── RecommendationCard
│   ├── FavoritesSection
│   ├── ActivityFeed
│   ├── MoodJourney
│   ├── ArchetypeCard
│   ├── ListeningReportCard
│   ├── ShareReportCard
│   └── BottomNav
│
├── lib
│   ├── api.ts
│   ├── musicData.ts
│   ├── favorites.ts
│   ├── activity.ts
│   ├── moodHistory.ts
│   ├── archetype.ts
│   ├── listeningReport.ts
│   └── moodTheme.ts
│
└── public
```

---

## 📸 Screenshots

### Home Screen

<img width="328" height="861" alt="image" src="https://github.com/user-attachments/assets/25e1540c-6442-426b-8ed4-125ca24ee5e8" />


---

### AI Recommendation Results

<img width="304" height="870" alt="image" src="https://github.com/user-attachments/assets/26c5063a-1027-4ff1-bd32-100f07e3e292" />


---

### Favorites & Smart Collections

<img width="318" height="856" alt="image" src="https://github.com/user-attachments/assets/75ef72d9-6be7-4f79-a73b-6ccc6c24e3b4" />


---

### Insights Dashboard

<img width="337" height="871" alt="image" src="https://github.com/user-attachments/assets/ca339a4e-c91d-41d7-ab47-c7949293ee92" />
<img width="339" height="856" alt="image" src="https://github.com/user-attachments/assets/65f909a4-5d09-462b-bbba-201363621bbb" />



---

### Me Section

<img width="349" height="862" alt="image" src="https://github.com/user-attachments/assets/adaa5840-5732-4353-bf5b-39597838ee79" />


---

### Shareable Listening Report

<img width="800" height="1018" alt="iconmusic-report" src="https://github.com/user-attachments/assets/9c578969-2656-4d90-849a-b1dcdd34f6ec" />


---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/shubhbeniwal/iconmusic-ai.git
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📊 Current Status

### Completed

✅ AI Mood Detection

✅ Music Recommendation Engine

✅ Favorites System

✅ Smart Collections

✅ Activity Feed

✅ Mood History

✅ Weekly Mood Analytics

✅ Personality Archetypes

✅ AI Listening Reports

✅ Shareable Report Export

✅ Multi-Page Navigation

✅ Mobile-First Design

---

## 🔄 Currently Working On

### Dataset Expansion

Current Dataset:

```text
~30 Songs
```

Target Dataset:

```text
1000+ Songs
```

Planned Genres:

- Pop
- Rock
- Indie
- Hip-Hop
- R&B
- EDM
- Lo-Fi
- Bollywood
- Punjabi
- K-Pop

---

## 🔮 Roadmap

### Phase 1
- Expand song database
- Improve recommendation diversity

### Phase 2
- AI Memory Engine
- Long-term listening patterns
- Personalized recommendation bias

### Phase 3
- Playlist generation
- Similar artist discovery
- Mood-based playlists

### Phase 4
- Production deployment
- Public release

---

## 🎯 Vision

Most music platforms ask:

> "What do you want to listen to?"

IconMusic AI asks:

> "How do you feel?"

The goal is to make music discovery emotional, personal, and reflective.

---

## 👨‍💻 Developer

### Shubh Beniwal

B.Tech CSE (AI & Robotics) — VIT Chennai

Software Engineer @ LTIMindtree

Passionate about:
- Generative AI
- LLM Applications
- Recommendation Systems
- AI Products
- Agentic Workflows

### Links

GitHub:
https://github.com/shubhbeniwal

LinkedIn:
https://www.linkedin.com/in/shubh-beniwal/

Portfolio:
https://shubhbeniwal.lovable.app/

---

## ⭐ Support

If you like this project, consider starring the repository.

It helps a lot and motivates future development.

⭐ Star this repository to follow the journey from a 30-song prototype to a fully personalized AI-powered music platform.
