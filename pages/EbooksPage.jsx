"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import "../styles/EbooksPage.css"

const EbooksPage = () => {
  const [selectedBook, setSelectedBook] = useState(null)

  const books = [
    {
      id: 1,
      title: "The Wind Rises",
      author: "Hayao Miyazaki",
      cover: "/placeholder.svg?height=400&width=300",
      description: "A captivating tale of dreams and determination in pre-war Japan.",
      price: 12.99,
      pages: 320,
      isPremium: false,
    },
    {
      id: 2,
      title: "Princess Mononoke: The Journey",
      author: "Studio Ghibli",
      cover: "/placeholder.svg?height=400&width=300",
      description: "Follow the epic journey of Ashitaka as he seeks to find a cure for a deadly curse.",
      price: 14.99,
      pages: 280,
      isPremium: true,
    },
    {
      id: 3,
      title: "Spirited Away: The Novel",
      author: "Hayao Miyazaki",
      cover: "/placeholder.svg?height=400&width=300",
      description: "The novelization of the Academy Award-winning film about a young girl's journey in a spirit world.",
      price: 11.99,
      pages: 256,
      isPremium: false,
    },
    {
      id: 4,
      title: "My Neighbor Totoro",
      author: "Tsugiko Kubo",
      cover: "/placeholder.svg?height=400&width=300",
      description: "The heartwarming story of two sisters and their encounters with friendly forest spirits.",
      price: 9.99,
      pages: 210,
      isPremium: false,
    },
    {
      id: 5,
      title: "Howl's Moving Castle",
      author: "Diana Wynne Jones",
      cover: "/placeholder.svg?height=400&width=300",
      description:
        "The original novel that inspired the beloved Ghibli film about a young woman cursed with an old body.",
      price: 13.99,
      pages: 336,
      isPremium: true,
    },
    {
      id: 6,
      title: "Kiki's Delivery Service",
      author: "Eiko Kadono",
      cover: "/placeholder.svg?height=400&width=300",
      description: "Follow the adventures of a young witch who uses her flying ability to earn a living.",
      price: 10.99,
      pages: 240,
      isPremium: false,
    },
  ]

  const openBookDetail = (book) => {
    setSelectedBook(book)
  }

  const closeBookDetail = () => {
    setSelectedBook(null)
  }

  return (
    <motion.div
      className="ebooks-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="ebooks-header">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          eBook Library
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover enchanting stories from the world of Ghibli
        </motion.p>
      </div>

      <div className="ebooks-grid">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            className="book-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
            }}
            onClick={() => openBookDetail(book)}
          >
            <div className="book-cover">
              <img src={book.cover || "/placeholder.svg"} alt={book.title} />
              {book.isPremium && <div className="premium-badge">Premium</div>}
            </div>
            <div className="book-info">
              <h3>{book.title}</h3>
              <p className="book-author">by {book.author}</p>
              <p className="book-price">${book.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedBook && (
        <motion.div
          className="book-detail-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="book-detail"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <button className="close-button" onClick={closeBookDetail}>
              ×
            </button>

            <div className="book-detail-content">
              <div className="book-detail-cover">
                <motion.img
                  src={selectedBook.cover}
                  alt={selectedBook.title}
                  initial={{ rotateY: 30 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="book-detail-info">
                <h2>{selectedBook.title}</h2>
                <p className="book-author">by {selectedBook.author}</p>
                <p className="book-description">{selectedBook.description}</p>
                <div className="book-meta">
                  <span>{selectedBook.pages} pages</span>
                  {selectedBook.isPremium && <span className="premium-tag">Premium</span>}
                </div>
                <div className="book-price-detail">${selectedBook.price}</div>

                <div className="book-actions">
                  <motion.button className="preview-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Preview
                  </motion.button>
                  <motion.button className="buy-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {selectedBook.isPremium ? "Unlock with Premium" : "Buy Now"}
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="book-pages">
              <motion.div
                className="book-page"
                animate={{
                  rotateY: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              />
              <motion.div
                className="book-page"
                animate={{
                  rotateY: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                  delay: 0.2,
                }}
              />
              <motion.div
                className="book-page"
                animate={{
                  rotateY: [0, -6, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                  delay: 0.4,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default EbooksPage

