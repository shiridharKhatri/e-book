"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa"
import "../styles/AuthPages.css"

const RegisterPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Registration attempt with:", { name, email, password, agreeTerms })
  }

  return (
    <motion.div
      className="auth-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="auth-container">
        <motion.div
          className="auth-decoration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="decoration-image"></div>
          <motion.div
            className="floating-leaf leaf-1"
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
            className="floating-leaf leaf-2"
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
        </motion.div>

        <motion.div
          className="auth-form-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Join our magical community today</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-with-icon">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-with-icon">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                />
              </div>
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                  required
                />
                <label htmlFor="terms">
                  I agree to the <Link to="/terms">Terms & Conditions</Link>
                </label>
              </div>
            </div>

            <motion.button
              type="submit"
              className="auth-button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign Up
            </motion.button>
          </form>

          <div className="auth-divider">
            <span>or sign up with</span>
          </div>

          <div className="social-auth">
            <motion.button className="social-button google" whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
              <FaGoogle />
            </motion.button>
            <motion.button className="social-button facebook" whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
              <FaFacebook />
            </motion.button>
            <motion.button className="social-button twitter" whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
              <FaTwitter />
            </motion.button>
          </div>

          <div className="auth-footer">
            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default RegisterPage

