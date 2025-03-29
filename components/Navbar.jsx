"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FaBook, FaHeadphones, FaVideo, FaUser, FaShoppingCart, FaStar } from "react-icons/fa"
import "../styles/Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="logo-container"
          >
            <span className="logo-text">Ghibli Stream</span>
            <motion.div
              className="logo-leaf"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                y: [0, -5, 0, -5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="logo-star"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <FaStar />
            </motion.div>
          </motion.div>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? "hamburger open" : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <motion.ul
          className={isOpen ? "nav-menu active" : "nav-menu"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/ebooks" className={`nav-link ${location.pathname === "/ebooks" ? "active" : ""}`}>
              <FaBook /> eBooks
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/audio" className={`nav-link ${location.pathname === "/audio" ? "active" : ""}`}>
              <FaHeadphones /> Audio
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/video" className={`nav-link ${location.pathname === "/video" ? "active" : ""}`}>
              <FaVideo /> Video
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/community" className={`nav-link ${location.pathname === "/community" ? "active" : ""}`}>
              Community
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/login" className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}>
              <FaUser /> Login
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/subscription" className="nav-link subscription-link">
              <FaShoppingCart /> Subscribe
            </Link>
          </motion.li>
        </motion.ul>
      </div>

      <AnimatePresence>
        {scrolled && (
          <motion.div
            className="navbar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

