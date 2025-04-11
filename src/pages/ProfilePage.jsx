"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaBook, FaHeadphones, FaVideo, FaHeart, FaCog, FaCalendarAlt, FaBookmark } from "react-icons/fa"
import "../styles/ProfilePage.css"

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("library")

  const user = {
    name: "Chihiro Ogino",
    email: "chihiro@example.com",
    avatar: "/placeholder.png?height=200&width=200",
    memberSince: "January 2023",
    isPremium: true,
  }

  const stats = [
    { label: "Books Read", value: 24 },
    { label: "Hours Listened", value: 56 },
    { label: "Videos Watched", value: 18 },
  ]

  const library = {
    ebooks: [
      {
        id: 1,
        title: "The Wind Rises",
        cover: "/placeholder.png?height=400&width=300",
        progress: 45,
      },
      {
        id: 2,
        title: "Spirited Away: The Novel",
        cover: "/placeholder.png?height=400&width=300",
        progress: 78,
      },
      {
        id: 3,
        title: "Howl's Moving Castle",
        cover: "/placeholder.png?height=400&width=300",
        progress: 12,
      },
    ],
    audiobooks: [
      {
        id: 1,
        title: "Princess Mononoke",
        cover: "/placeholder.png?height=400&width=300",
        progress: 65,
      },
      {
        id: 2,
        title: "My Neighbor Totoro",
        cover: "/placeholder.png?height=400&width=300",
        progress: 30,
      },
    ],
    videos: [
      {
        id: 1,
        title: "The Art of Studio Ghibli",
        thumbnail: "/placeholder.png?height=400&width=600",
        progress: 50,
      },
      {
        id: 2,
        title: "Ponyo: The Making Of",
        thumbnail: "/placeholder.png?height=400&width=600",
        progress: 90,
      },
    ],
  }

  const favorites = [
    {
      id: 1,
      title: "Spirited Away: The Novel",
      type: "ebook",
      cover: "/placeholder.png?height=400&width=300",
    },
    {
      id: 2,
      title: "Princess Mononoke",
      type: "audiobook",
      cover: "/placeholder.png?height=400&width=300",
    },
    {
      id: 3,
      title: "The Art of Studio Ghibli",
      type: "video",
      thumbnail: "/placeholder.png?height=400&width=600",
    },
  ]

  const renderLibrary = () => (
    <div className="library-content">
      <div className="library-section">
        <h3>
          <FaBook /> eBooks
        </h3>
        <div className="library-grid">
          {library.ebooks.map((book) => (
            <motion.div
              key={book.id}
              className="library-item"
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="item-cover">
                <img src={book.cover || "/placeholder.png"} alt={book.title} />
                <div className="progress-overlay">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${book.progress}%` }}></div>
                  </div>
                  <span className="progress-text">{book.progress}%</span>
                </div>
              </div>
              <h4>{book.title}</h4>
              <button className="continue-button">Continue Reading</button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="library-section">
        <h3>
          <FaHeadphones /> Audiobooks
        </h3>
        <div className="library-grid">
          {library.audiobooks.map((audio) => (
            <motion.div
              key={audio.id}
              className="library-item"
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="item-cover">
                <img src={audio.cover || "/placeholder.png"} alt={audio.title} />
                <div className="progress-overlay">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${audio.progress}%` }}></div>
                  </div>
                  <span className="progress-text">{audio.progress}%</span>
                </div>
              </div>
              <h4>{audio.title}</h4>
              <button className="continue-button">Continue Listening</button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="library-section">
        <h3>
          <FaVideo /> Videos
        </h3>
        <div className="library-grid">
          {library.videos.map((video) => (
            <motion.div
              key={video.id}
              className="library-item video-item"
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="item-thumbnail">
                <img src={video.thumbnail || "/placeholder.png"} alt={video.title} />
                <div className="progress-overlay">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${video.progress}%` }}></div>
                  </div>
                  <span className="progress-text">{video.progress}%</span>
                </div>
              </div>
              <h4>{video.title}</h4>
              <button className="continue-button">Continue Watching</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderFavorites = () => (
    <div className="favorites-content">
      <div className="favorites-grid">
        {favorites.map((item) => (
          <motion.div
            key={item.id}
            className="favorite-item"
            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
          >
            <div className="item-cover">
              <img src={item.cover || item.thumbnail} alt={item.title} />
              <div className="item-type">{item.type}</div>
              <button className="remove-favorite">
                <FaHeart />
              </button>
            </div>
            <h4>{item.title}</h4>
            <button className="open-button">
              {item.type === "ebook" ? "Read" : item.type === "audiobook" ? "Listen" : "Watch"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="settings-content">
      <div className="settings-section">
        <h3>Account Settings</h3>
        <div className="settings-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" defaultValue={user.name} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" defaultValue={user.email} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" defaultValue="********" />
          </div>
          <button className="save-button">Save Changes</button>
        </div>
      </div>

      <div className="settings-section">
        <h3>Preferences</h3>
        <div className="preferences-options">
          <div className="preference-item">
            <span>Email Notifications</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
          <div className="preference-item">
            <span>Auto-play Videos</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="preference-item">
            <span>Download Quality</span>
            <select defaultValue="high">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h3>Subscription</h3>
        <div className="subscription-info">
          <div className="current-plan">
            <h4>Current Plan: {user.isPremium ? "Premium" : "Free"}</h4>
            <p>Renewal Date: January 1, 2024</p>
          </div>
          {user.isPremium ? (
            <button className="manage-button">Manage Subscription</button>
          ) : (
            <button className="upgrade-button">Upgrade to Premium</button>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <motion.div
      className="profile-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-avatar">
            <img src={user.avatar || "/placeholder.png"} alt={user.name} />
            {user.isPremium && <div className="premium-badge">Premium</div>}
          </div>
          <div className="profile-details">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p className="member-since">
              <FaCalendarAlt /> Member since {user.memberSince}
            </p>

            <div className="profile-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <motion.button
          className={`tab-button ${activeTab === "library" ? "active" : ""}`}
          onClick={() => setActiveTab("library")}
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
        >
          <FaBook /> My Library
        </motion.button>
        <motion.button
          className={`tab-button ${activeTab === "favorites" ? "active" : ""}`}
          onClick={() => setActiveTab("favorites")}
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
        >
          <FaBookmark /> Favorites
        </motion.button>
        <motion.button
          className={`tab-button ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
        >
          <FaCog /> Settings
        </motion.button>
      </div>

      <div className="profile-content">
        {activeTab === "library" && renderLibrary()}
        {activeTab === "favorites" && renderFavorites()}
        {activeTab === "settings" && renderSettings()}
      </div>
    </motion.div>
  )
}

export default ProfilePage

