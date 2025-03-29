"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaHeart, FaComment, FaShare, FaUser, FaSearch } from "react-icons/fa"
import "../styles/CommunityPage.css"

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState("discussions")
  const [searchQuery, setSearchQuery] = useState("")

  const discussions = [
    {
      id: 1,
      title: "What's your favorite Ghibli film and why?",
      author: {
        name: "Chihiro",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      date: "2 days ago",
      content:
        "I've been a Ghibli fan for years and I'm curious to know which film resonates most with everyone. My personal favorite is Spirited Away because of its beautiful animation and coming-of-age story.",
      likes: 42,
      comments: 18,
      tags: ["discussion", "favorites"],
    },
    {
      id: 2,
      title: "The environmental themes in Princess Mononoke",
      author: {
        name: "Ashitaka",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      date: "1 week ago",
      content:
        "I recently rewatched Princess Mononoke and was struck by how relevant its environmental themes still are today. The balance between nature and human progress is something we're still struggling with.",
      likes: 37,
      comments: 15,
      tags: ["analysis", "princess-mononoke"],
    },
    {
      id: 3,
      title: "Howl's Moving Castle book vs. movie",
      author: {
        name: "Sophie",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      date: "3 days ago",
      content:
        "Has anyone read the original Howl's Moving Castle book by Diana Wynne Jones? I'd love to hear thoughts on how it compares to the Ghibli adaptation.",
      likes: 29,
      comments: 22,
      tags: ["books", "adaptations"],
    },
  ]

  const reviews = [
    {
      id: 1,
      title: "Spirited Away: A Masterpiece",
      author: {
        name: "Haku",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      date: "1 month ago",
      content:
        "Spirited Away remains one of the most visually stunning and emotionally resonant animated films ever made. The world-building is unparalleled, and Chihiro's journey is both relatable and magical.",
      rating: 5,
      likes: 56,
      comments: 12,
      type: "movie",
    },
    {
      id: 2,
      title: "The Wind Rises: Novel Adaptation",
      author: {
        name: "Jiro",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      date: "2 weeks ago",
      content:
        "This novelization captures the essence of the film while adding depth to Jiro's character. The descriptive passages about flight and engineering are particularly well done.",
      rating: 4,
      likes: 23,
      comments: 7,
      type: "book",
    },
    {
      id: 3,
      title: "Princess Mononoke: Original Soundtrack",
      author: {
        name: "San",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      date: "5 days ago",
      content:
        "Joe Hisaishi's score for Princess Mononoke perfectly captures the film's epic scope and emotional nuance. The main theme still gives me chills every time I hear it.",
      rating: 5,
      likes: 41,
      comments: 9,
      type: "audio",
    },
  ]

  const events = [
    {
      id: 1,
      title: "Virtual Ghibli Movie Night: My Neighbor Totoro",
      date: "June 15, 2023",
      time: "7:00 PM EST",
      description:
        "Join us for a virtual screening of My Neighbor Totoro followed by a group discussion about the film's themes and impact.",
      attendees: 87,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Ghibli Art Workshop: Watercolor Landscapes",
      date: "June 22, 2023",
      time: "2:00 PM EST",
      description: "Learn to paint Ghibli-inspired landscapes using watercolor techniques. All skill levels welcome!",
      attendees: 42,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Book Club: Howl's Moving Castle",
      date: "July 5, 2023",
      time: "6:30 PM EST",
      description:
        "This month we're reading Diana Wynne Jones' novel Howl's Moving Castle and comparing it to the Ghibli film adaptation.",
      attendees: 35,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          ★
        </span>,
      )
    }
    return stars
  }

  const renderDiscussions = () => (
    <div className="discussions-content">
      <div className="post-list">
        {discussions.map((post) => (
          <motion.div
            key={post.id}
            className="post-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="post-header">
              <div className="post-author">
                <img src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                <div className="author-info">
                  <span className="author-name">{post.author.name}</span>
                  <span className="post-date">{post.date}</span>
                </div>
              </div>
              <div className="post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="post-content">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>

            <div className="post-actions">
              <button className="action-button">
                <FaHeart /> <span>{post.likes}</span>
              </button>
              <button className="action-button">
                <FaComment /> <span>{post.comments}</span>
              </button>
              <button className="action-button">
                <FaShare />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="create-post">
        <h3>Start a New Discussion</h3>
        <div className="post-form">
          <input type="text" placeholder="Discussion title" />
          <textarea placeholder="Share your thoughts..."></textarea>
          <div className="form-actions">
            <input type="text" placeholder="Add tags (comma separated)" />
            <motion.button className="post-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Post Discussion
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderReviews = () => (
    <div className="reviews-content">
      <div className="post-list">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            className="post-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="post-header">
              <div className="post-author">
                <img src={review.author.avatar || "/placeholder.svg"} alt={review.author.name} />
                <div className="author-info">
                  <span className="author-name">{review.author.name}</span>
                  <span className="post-date">{review.date}</span>
                </div>
              </div>
              <div className="review-type">
                <span className={`type-badge ${review.type}`}>{review.type}</span>
              </div>
            </div>

            <div className="post-content">
              <h3>{review.title}</h3>
              <div className="rating">{renderStars(review.rating)}</div>
              <p>{review.content}</p>
            </div>

            <div className="post-actions">
              <button className="action-button">
                <FaHeart /> <span>{review.likes}</span>
              </button>
              <button className="action-button">
                <FaComment /> <span>{review.comments}</span>
              </button>
              <button className="action-button">
                <FaShare />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="create-post">
        <h3>Write a Review</h3>
        <div className="post-form">
          <input type="text" placeholder="Review title" />
          <div className="form-row">
            <select defaultValue="">
              <option value="" disabled>
                Select content type
              </option>
              <option value="book">Book</option>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
            </select>
            <div className="rating-select">
              <span>Rating:</span>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="star">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
          <textarea placeholder="Write your review..."></textarea>
          <motion.button className="post-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Post Review
          </motion.button>
        </div>
      </div>
    </div>
  )

  const renderEvents = () => (
    <div className="events-content">
      <div className="events-grid">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="event-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
          >
            <div className="event-image">
              <img src={event.image || "/placeholder.svg"} alt={event.title} />
            </div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <div className="event-meta">
                <div className="event-date">{event.date}</div>
                <div className="event-time">{event.time}</div>
              </div>
              <p>{event.description}</p>
              <div className="event-attendees">
                <FaUser /> {event.attendees} attending
              </div>
              <motion.button className="attend-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Attend Event
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="create-event">
        <h3>Suggest an Event</h3>
        <p>Have an idea for a community event? Let us know!</p>
        <motion.button className="suggest-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Suggest Event
        </motion.button>
      </div>
    </div>
  )

  return (
    <motion.div
      className="community-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="community-header">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Community
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Connect with fellow Ghibli enthusiasts
        </motion.p>
      </div>

      <div className="community-content">
        <div className="community-sidebar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search community..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="sidebar-nav">
            <button
              className={`nav-button ${activeTab === "discussions" ? "active" : ""}`}
              onClick={() => setActiveTab("discussions")}
            >
              Discussions
            </button>
            <button
              className={`nav-button ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
            <button
              className={`nav-button ${activeTab === "events" ? "active" : ""}`}
              onClick={() => setActiveTab("events")}
            >
              Events
            </button>
          </div>

          <div className="community-stats">
            <h3>Community Stats</h3>
            <div className="stat-item">
              <span className="stat-label">Members</span>
              <span className="stat-value">12,458</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Discussions</span>
              <span className="stat-value">3,721</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Reviews</span>
              <span className="stat-value">8,945</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Events</span>
              <span className="stat-value">142</span>
            </div>
          </div>

          <div className="community-rules">
            <h3>Community Guidelines</h3>
            <ul>
              <li>Be respectful and kind to other members</li>
              <li>No spoilers without proper warnings</li>
              <li>Keep discussions on-topic</li>
              <li>No self-promotion or spam</li>
              <li>Have fun and share your love for Ghibli!</li>
            </ul>
          </div>
        </div>

        <div className="community-main">
          <div className="tab-content">
            {activeTab === "discussions" && renderDiscussions()}
            {activeTab === "reviews" && renderReviews()}
            {activeTab === "events" && renderEvents()}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CommunityPage

