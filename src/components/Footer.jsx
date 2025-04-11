"use client"

import { motion } from "framer-motion"
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaHeart } from "react-icons/fa"
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>HearBooks</h3>
          <p>Your portal to a world of enchanting stories, sounds, and sights for book lovers everywhere.</p>
          <motion.div
            className="footer-logo"
            animate={{
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 6,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="/ebooks">eBooks</a>
            </li>
            <li>
              <a href="/audio">Audio</a>
            </li>
            <li>
              <a href="/video">Video</a>
            </li>
            <li>
              <a href="/community">Community</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Account</h3>
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/subscription">Subscription</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-icons">
            <motion.a href="#" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaTwitter />
            </motion.a>
            <motion.a href="#" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaInstagram />
            </motion.a>
            <motion.a href="#" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaFacebook />
            </motion.a>
            <motion.a href="#" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaYoutube />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HearBooks. All rights reserved.</p>
        <p className="footer-love">
          Made with <FaHeart className="heart-icon" /> for book lovers
        </p>
      </div>

      <div className="footer-decoration">
        <motion.div
          className="floating-book book-1"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 4,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="floating-book book-2"
          animate={{
            y: [0, -20, 0],
            x: [0, -15, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="floating-book book-3"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3.5,
            ease: "easeInOut",
          }}
        />
      </div>
    </footer>
  )
}

export default Footer

