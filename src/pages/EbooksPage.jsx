"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaBookmark, FaDownload, FaStar, FaEye } from "react-icons/fa"
import "../styles/EbooksPage.css"

const EbooksPage = () => {
  const [selectedBook, setSelectedBook] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Books" },
    { id: "fantasy", name: "Fantasy" },
    { id: "adventure", name: "Adventure" },
    { id: "romance", name: "Romance" },
    { id: "children", name: "Children's" },
  ]

  const books = [
    {
      id: 1,
      title: "The Wind Rises",
      author: "Hayao Miyazaki",
      cover: "/placeholder.svg?height=400&width=300",
      description:
        "A captivating tale of dreams and determination in pre-war Japan. Follow the journey of Jiro Horikoshi as he pursues his passion for aviation despite the challenges of his time. This novelization of the acclaimed film delves deeper into the characters and historical context.",
      price: 12.99,
      pages: 320,
      isPremium: false,
      rating: 4.8,
      category: "adventure",
      releaseDate: "June 2020",
      language: "English",
      preview:
        "Chapter 1: The Dream\n\nJiro looked up at the sky, watching the birds soar freely above. How he wished he could join them, to feel the wind beneath wings of his own design. Ever since he was a child, he had dreamed of flying...",
    },
    {
      id: 2,
      title: "Princess Mononoke: The Journey",
      author: "Studio Ghibli",
      cover: "/placeholder.svg?height=400&width=300",
      description:
        "Follow the epic journey of Ashitaka as he seeks to find a cure for a deadly curse. Caught in the middle of a war between forest gods and humans consuming natural resources, Ashitaka must find a way to bring balance to both worlds. This expanded novelization includes exclusive content not seen in the film.",
      price: 14.99,
      pages: 280,
      isPremium: true,
      rating: 4.9,
      category: "fantasy",
      releaseDate: "August 2019",
      language: "English",
      preview:
        "Prologue: The Curse\n\nThe forest was silent that morning, too silent. The birds had stopped singing, and even the wind seemed to hold its breath. Ashitaka, young prince of the Emishi tribe, felt a chill run down his spine as he approached the ancient gate...",
    },
    {
      id: 3,
      title: "Spirited Away: The Novel",
      author: "Hayao Miyazaki",
      cover: "/placeholder.svg?height=400&width=300",
      description:
        "The novelization of the Academy Award-winning film about a young girl's journey in a spirit world. When Chihiro's parents are transformed into pigs, she must navigate a mysterious bathhouse for spirits to find a way to free them and return to the human world.",
      price: 11.99,
      pages: 256,
      isPremium: false,
      rating: 4.7,
      category: "fantasy",
      releaseDate: "March 2021",
      language: "English",
      preview:
        "Chapter 1: The Tunnel\n\n\"We're going to be late,\" Chihiro's father said, pressing harder on the accelerator as they wound up the narrow mountain road. Chihiro sat in the back seat, clutching her farewell card from her friends, wondering what awaited her in their new home...",
    },
    {
      id: 4,
      title: "My Neighbor Totoro",
      author: "Tsugiko Kubo",
      cover: "/placeholder.svg?height=400&width=300",
      description:
        "The heartwarming story of two sisters and their encounters with friendly forest spirits. When Satsuki and Mei move to the countryside with their father, they discover magical creatures living in the nearby forest, including the gentle giant Totoro.",
      price: 9.99,
      pages: 210,
      isPremium: false,
      rating: 4.9,
      category: "children",
      releaseDate: "May 2018",
      language: "English",
      preview:
        'Chapter 1: The Old House\n\nThe car bumped along the country road, kicking up dust behind it. Satsuki pressed her face against the window, watching the rice fields and forests pass by. "Look, Mei! That must be our new house up ahead!" she exclaimed...',
    },
    {
      id: 5,
      title: "Howl's Moving Castle",
      author: "Diana Wynne Jones",
      cover: "/placeholder.svg?height=400&width=300",
      description:
        "The original novel that inspired the beloved Ghibli film about a young woman cursed with an old body. Sophie Hatter, the eldest of three sisters, is resigned to a dull life in her family's hat shop until she is cursed by the Witch of the Waste and transformed into an old woman.",
      price: 13.99,
      pages: 336,
      isPremium: true,
      rating: 4.8,
      category: "fantasy",
      releaseDate: "April 2017",
      language: "English",
      preview:
        "Chapter 1: In Which Sophie Talks to Hats\n\nIn the land of Ingary, where such things as seven-league boots and cloaks of invisibility really exist, it is quite a misfortune to be born the eldest of three. Everyone knows you are the one who will fail first, and worst, if the three of you set out to seek your fortunes...",
    },
    {
      id: 6,
      title: "Kiki's Delivery Service",
      author: "Eiko Kadono",
      cover: "/placeholder.svg?height=400&width=300",
      description:
        "Follow the adventures of a young witch who uses her flying ability to earn a living. As tradition dictates, thirteen-year-old Kiki must spend a year living alone in a new town to become a full-fledged witch. With her black cat Jiji, she settles in a seaside town and starts a delivery service.",
      price: 10.99,
      pages: 240,
      isPremium: false,
      rating: 4.6,
      category: "children",
      releaseDate: "July 2020",
      language: "English",
      preview:
        "Chapter 1: Departure\n\nKiki woke up with a start. Today was the day! She had been waiting for this moment since she was a little girl. Tonight, under the full moon, she would leave home to begin her year of independent living as a witch-in-training...",
    },
  ]

  const filteredBooks = activeCategory === "all" ? books : books.filter((book) => book.category === activeCategory)

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

      <div className="ebooks-categories">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            className={`category-button ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => setActiveCategory(category.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      <div className="ebooks-grid">
        {filteredBooks.map((book, index) => (
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
              <div className="book-rating">
                <FaStar /> <span>{book.rating}</span>
              </div>
            </div>
            <div className="book-info">
              <h3>{book.title}</h3>
              <p className="book-author">by {book.author}</p>
              <p className="book-price">${book.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedBook && (
          <motion.div
            className="book-detail-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBookDetail}
          >
            <motion.div
              className="book-detail"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
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
                  {selectedBook.isPremium && <div className="premium-badge-detail">Premium</div>}
                </div>

                <div className="book-detail-info">
                  <h2>{selectedBook.title}</h2>
                  <p className="book-author-detail">by {selectedBook.author}</p>

                  <div className="book-rating-detail">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(selectedBook.rating) ? "filled" : ""} />
                      ))}
                    </div>
                    <span>{selectedBook.rating} out of 5</span>
                  </div>

                  <p className="book-description">{selectedBook.description}</p>

                  <div className="book-meta">
                    <div className="meta-item">
                      <span className="meta-label">Pages:</span>
                      <span className="meta-value">{selectedBook.pages}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Language:</span>
                      <span className="meta-value">{selectedBook.language}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Released:</span>
                      <span className="meta-value">{selectedBook.releaseDate}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Category:</span>
                      <span className="meta-value">{selectedBook.category}</span>
                    </div>
                  </div>

                  <div className="book-price-detail">${selectedBook.price}</div>

                  <div className="book-preview-section">
                    <h3>Preview</h3>
                    <div className="book-preview-content">
                      <p>{selectedBook.preview}</p>
                    </div>
                  </div>

                  <div className="book-actions">
                    <motion.button className="preview-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <FaEye /> Read Sample
                    </motion.button>
                    <motion.button className="bookmark-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <FaBookmark /> Add to Library
                    </motion.button>
                    <motion.button className="buy-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      {selectedBook.isPremium ? (
                        <>Unlock with Premium</>
                      ) : (
                        <>
                          <FaDownload /> Buy Now
                        </>
                      )}
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
                    repeatDelay: 1,
                    delay: 0.4,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default EbooksPage

