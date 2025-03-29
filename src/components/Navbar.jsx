"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa"
import "../styles/Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const location = useLocation()
  const searchInputRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch)
    if (!showMobileSearch) {
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus()
        }
      }, 100)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
    // Reset search field
    setSearchQuery("")
    setShowMobileSearch(false)
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
    setShowMobileSearch(false)
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
          </motion.div>
        </Link>

        {/* Desktop Search */}
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

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
          {/* Mobile Search */}
          <AnimatePresence>
            {showMobileSearch && (
              <motion.div
                className="mobile-search-container"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSearch}>
                  <FaSearch className="mobile-search-icon" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="mobile-search-input"
                    placeholder="Search content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/ebooks" className={`nav-link ${location.pathname === "/ebooks" ? "active" : ""}`}>
              eBooks
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/audio" className={`nav-link ${location.pathname === "/audio" ? "active" : ""}`}>
              Audio
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/video" className={`nav-link ${location.pathname === "/video" ? "active" : ""}`}>
              Video
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/community" className={`nav-link ${location.pathname === "/community" ? "active" : ""}`}>
              Community
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/login" className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}>
              <FaUser className="nav-icon" /> Login
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/subscription" className="nav-link subscription-link">
              <FaShoppingCart className="nav-icon" /> Subscribe
            </Link>
          </motion.li>
          <motion.li className="mobile-only" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <button className="nav-link search-button" onClick={toggleMobileSearch}>
              <FaSearch /> Search
            </button>
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

