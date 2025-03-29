"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaEnvelope, FaArrowLeft } from "react-icons/fa"
import "../styles/AuthPages.css"

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
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
          <motion.div
            className="kodama"
            animate={{
              y: [0, -10, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
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
            <h1>{isSubmitted ? "Check Your Email" : "Forgot Password"}</h1>
            <p>
              {isSubmitted
                ? "We've sent a password reset link to your email"
                : "Enter your email and we'll send you a link to reset your password"}
            </p>
          </div>

          {!isSubmitted ? (
            <form className="auth-form" onSubmit={handleSubmit}>
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

              <motion.button
                type="submit"
                className="auth-button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="loading-spinner">
                    <div className="spinner"></div>
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </motion.button>
            </form>
          ) : (
            <div className="success-message">
              <motion.div
                className="success-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12L10.5 14.5L16 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <p className="email-sent-message">
                If an account exists for <strong>{email}</strong>, you'll receive an email with instructions on how to
                reset your password.
              </p>
              <p className="email-note">Please check your spam folder if you don't see the email in your inbox.</p>
            </div>
          )}

          <div className="auth-footer">
            <Link to="/login" className="back-to-login">
              <FaArrowLeft /> Back to Login
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ForgotPasswordPage

