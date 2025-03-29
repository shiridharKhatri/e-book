"use client"

import { motion } from "framer-motion"
import { FaSun, FaMoon, FaCloud } from "react-icons/fa"
import "../styles/ThemeToggle.css"

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.div
      className="theme-toggle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      onClick={toggleTheme}
    >
      <motion.div
        className="toggle-button"
        animate={{
          backgroundColor: isDarkMode ? "#243447" : "#f9f7f1",
          rotate: isDarkMode ? 180 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="toggle-scene">
          {isDarkMode ? (
            <>
              <FaMoon className="moon-icon" />
              <motion.div
                className="stars-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="star"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      width: `${Math.random() * 3 + 1}px`,
                      height: `${Math.random() * 3 + 1}px`,
                    }}
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
            </>
          ) : (
            <>
              <FaSun className="sun-icon" />
              <motion.div
                className="clouds-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="cloud"
                  animate={{ x: [10, -10, 10] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <FaCloud size={10} />
                </motion.div>
                <motion.div
                  className="cloud"
                  animate={{ x: [-5, 5, -5] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  style={{ top: "60%", left: "30%" }}
                >
                  <FaCloud size={8} />
                </motion.div>
              </motion.div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ThemeToggle

