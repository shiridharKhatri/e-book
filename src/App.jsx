"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import EbooksPage from "./pages/EbooksPage"
import AudioPage from "./pages/AudioPage"
import VideoPage from "./pages/VideoPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProfilePage from "./pages/ProfilePage"
import SubscriptionPage from "./pages/SubscriptionPage"
import CommunityPage from "./pages/CommunityPage"
import ThemeToggle from "./components/ThemeToggle"
import "./styles/App.css"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Check for user's preferred color scheme on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDark) {
      setIsDarkMode(true)
      document.body.classList.add("dark")
    }

    // Add animation class after initial load
    const timer = setTimeout(() => {
      document.body.classList.add("animated")
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark")
  }

  return (
    <Router>
      <div className={`app ${isDarkMode ? "dark" : "light"}`}>
        <div className="background-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-circle circle-3"></div>
          <div className="bg-leaves">
            <div className="leaf leaf-1"></div>
            <div className="leaf leaf-2"></div>
            <div className="leaf leaf-3"></div>
            <div className="leaf leaf-4"></div>
            <div className="leaf leaf-5"></div>
          </div>
        </div>

        <Navbar />
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ebooks" element={<EbooksPage />} />
            <Route path="/audio" element={<AudioPage />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

export default App

