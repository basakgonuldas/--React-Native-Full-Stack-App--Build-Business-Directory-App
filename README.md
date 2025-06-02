# 🏢📘 Business Directory App

A cross-platform mobile application built using **React Native** and **Firebase**, allowing users to **sign in**, **add**, **edit**, and **delete** their businesses, and browse other services in their community. This app aims to empower local businesses by providing them visibility and accessibility through a user-friendly interface.

---

## 🧭 Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Firebase Configuration](#firebase-configuration)
- [Available Scripts](#available-scripts)
- [Future Enhancements](#future-enhancements)
- [Developer](#developer)
- [License](#license)

---

## ✅ Features

- 🔐 **User Authentication**
  - Google Sign-In via Firebase Authentication.
- 🧾 **Business Listings**
  - Add, view, update, and delete businesses.
- 📸 **Image Upload**
  - Upload images using Firebase Storage.
- 🗂️ **Categories**
  - Filter businesses by various categories.
- 🔎 **Search Functionality**
  - Easily search through available businesses.
- 👤 **User Profile**
  - Personalized dashboard and business management.
- 📤 **App Sharing**
  - Built-in feature to share the app with others.
- 📱 **Responsive UI**
  - Mobile-friendly, intuitive design with modern UI components.

---

## 🖼️ Screenshots

| Splash Screen | Home Screen | Businesses Screen |
|-------------|---------------|----------------|
| ![Splash Screen](./assets/screenshots/LoginScreen.PNG) | ![Home Screen](./assets/screenshots/Screenshot_32.png) | ![Businesses Screen](./assets/screenshots/BusinessesScreenWithReviews.PNG) |

| Category Screen | Explore Screen | Profile Screen |
|-------------|---------------|----------------|
| ![Category Screen](./assets/screenshots/CategoryWiseBusinessesScreen.PNG) | ![Explore Screen](./assets/screenshots/ExploreScreenWithBusinessData.PNG | ![Profile Screen](./assets/screenshots/Screenshot_33.png) |

---

## ⚙️ Tech Stack

| Tool / Library            | Purpose                                   |
|---------------------------|-------------------------------------------|
| **React Native (Expo)**   | Core mobile app development framework     |
| **Expo Router**           | Declarative navigation and routing        |
| **Firebase Firestore**    | Real-time cloud database for business data|
| **Firebase Authentication** | Google Sign-In for secure auth         |
| **Firebase Storage**      | Hosting and serving business images       |
| **React Native Image Picker** | Local image selection                |
| **React Context API**     | Global state management (auth flow)       |
| **NativeBase / Paper UI** | Pre-built UI components                   |

---

## 🧰 Installation & Setup

### 🔁 Prerequisites

- Node.js ≥ 16.x
- Expo CLI
- Firebase Project (with Authentication, Firestore, and Storage enabled)

### 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/community-directory-app.git
cd community-directory-app

# 2. Install dependencies
npm install
