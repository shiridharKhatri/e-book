"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaArrowRight, FaBookOpen, FaHeadphones, FaVideo, FaStar, FaBook, FaBookmark, FaSearch } from "react-icons/fa"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/HomePage.css"

// Skeleton loader component
const SkeletonLoader = ({ type }) => {
  return (
    <div className={`skeleton-loader ${type}`}>
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>
    </div>
  )
}

const HomePage = () => {
  const [loading, setLoading] = useState(true)
  const [booksLoaded, setBooksLoaded] = useState(false)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const [videosLoaded, setVideosLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const heroRef = useRef(null)
  const bookRef = useRef(null)
  const pageRefs = useRef([])
  const shapeRefs = useRef([])
  const searchInputRef = useRef(null)

  useEffect(() => {
    // Simulate loading states
    setTimeout(() => {
      setBooksLoaded(true)
    }, 1500)

    setTimeout(() => {
      setAudioLoaded(true)
    }, 2200)

    setTimeout(() => {
      setVideosLoaded(true)
    }, 2800)

    setTimeout(() => {
      setLoading(false)
    }, 3000)

    // Initialize page turning animation
    const initPageAnimation = () => {
      if (pageRefs.current.length > 0) {
        pageRefs.current.forEach((page, index) => {
          if (page) {
            setTimeout(() => {
              page.classList.add("turn")
              setTimeout(() => {
                page.classList.remove("turn")
              }, 1500)
            }, index * 3000)
          }
        })

        // Repeat the animation
        setTimeout(initPageAnimation, pageRefs.current.length * 3000)
      }
    }

    initPageAnimation()

    // Animate floating shapes
    const animateShapes = () => {
      if (shapeRefs.current.length > 0) {
        shapeRefs.current.forEach((shape, index) => {
          if (shape) {
            const xMovement = 20 + Math.random() * 30
            const yMovement = 20 + Math.random() * 30
            const duration = 3 + Math.random() * 4

            shape.style.animation = `floatShape ${duration}s ease-in-out infinite`
            shape.style.animationDelay = `${index * 0.5}s`
          }
        })
      }
    }

    animateShapes()

    // 3D book rotation on mouse move
    const handleMouseMove = (e) => {
      if (bookRef.current) {
        const book = bookRef.current
        const bookRect = book.getBoundingClientRect()
        const bookCenterX = bookRect.left + bookRect.width / 2
        const bookCenterY = bookRect.top + bookRect.height / 2

        const mouseX = e.clientX
        const mouseY = e.clientY

        const rotateY = (mouseX - bookCenterX) / 20
        const rotateX = (bookCenterY - mouseY) / 20

        book.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // Implement search functionality
  }

  const featuredContent = [
    {
      id: 1,
      type: "ebook",
      title: "The Wind Rises: A Novel",
      image: "/placeholder.svg?height=400&width=300",
      description: "A captivating tale of dreams and determination.",
    },
    {
      id: 2,
      type: "audio",
      title: "Spirited Away: Original Soundtrack",
      image: "/placeholder.svg?height=400&width=300",
      description: "Immerse yourself in the magical world with this enchanting soundtrack.",
    },
    {
      id: 3,
      type: "video",
      title: "My Neighbor Totoro: Behind the Scenes",
      image: "/placeholder.svg?height=400&width=300",
      description: "Discover the making of this beloved classic.",
    },
    {
      id: 4,
      type: "ebook",
      title: "Princess Mononoke: The Art Book",
      image: "/placeholder.svg?height=400&width=300",
      description: "Explore the stunning visuals and concept art.",
    },
  ]

  const categories = [
    {
      id: "fantasy",
      title: "Fantasy",
      icon: "fantasy-book",
      color: "var(--primary-color)",
    },
    {
      id: "adventure",
      title: "Adventure",
      icon: "compass",
      color: "var(--secondary-color)",
    },
    {
      id: "romance",
      title: "Romance",
      icon: "heart",
      color: "var(--accent-color)",
    },
    {
      id: "mystery",
      title: "Mystery",
      icon: "search",
      color: "var(--primary-color)",
    },
    {
      id: "scifi",
      title: "Sci-Fi",
      icon: "rocket",
      color: "var(--secondary-color)",
    },
  ]

  const popularBooks = [
    {
      id: 1,
      title: "Howl's Moving Castle",
      author: "Diana Wynne Jones",
      cover: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Spirited Away: The Novel",
      author: "Hayao Miyazaki",
      cover: "/placeholder.svg?height=400&width=300",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Princess Mononoke: The Journey",
      author: "Studio Ghibli",
      cover: "/placeholder.svg?height=400&width=300",
      rating: 4.7,
    },
    {
      id: 4,
      title: "My Neighbor Totoro",
      author: "Tsugiko Kubo",
      cover: "/placeholder.svg?height=400&width=300",
      rating: 4.9,
    },
  ]

  const topAudiobooks = [
    {
      id: 1,
      title: "Kiki's Delivery Service",
      narrator: "Minami Takayama",
      cover: "/placeholder.svg?height=400&width=300",
      duration: "3h 15m",
    },
    {
      id: 2,
      title: "Castle in the Sky",
      narrator: "Mayumi Tanaka",
      cover: "/placeholder.svg?height=400&width=300",
      duration: "3h 45m",
    },
    {
      id: 3,
      title: "Ponyo on the Cliff",
      narrator: "Yuria Nara",
      cover: "/placeholder.svg?height=400&width=300",
      duration: "2h 40m",
    },
    {
      id: 4,
      title: "The Tale of Princess Kaguya",
      narrator: "Aki Asakura",
      cover: "/placeholder.svg?height=400&width=300",
      duration: "4h 10m",
    },
  ]

  const featuredVideos = [
    {
      id: 1,
      title: "The Art of Studio Ghibli",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "35:20",
    },
    {
      id: 2,
      title: "Hayao Miyazaki: The Master of Animation",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "42:15",
    },
    {
      id: 3,
      title: "The Making of Spirited Away",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "28:45",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sophie Hatter",
      avatar: "/placeholder.svg?height=100&width=100",
      text: "The HearBooks library has completely transformed my reading experience. I love having access to so many magical stories!",
    },
    {
      id: 2,
      name: "Ashitaka",
      avatar: "/placeholder.svg?height=100&width=100",
      text: "Being able to download audiobooks for my commute has been a game-changer. The narration quality is exceptional and truly captures the magic.",
    },
    {
      id: 3,
      name: "Kiki",
      avatar: "/placeholder.svg?height=100&width=100",
      text: "As a busy person, having all this content in one place with a single subscription is exactly what I needed. The beautiful design makes browsing a joy!",
    },
  ]

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Modern Hero Section */}
      <div className="hero-section-modern" ref={heroRef}>
        {/* Simplified background shapes */}
        <div className="hero-shapes">
          <div className="shape shape-circle" ref={(el) => (shapeRefs.current[0] = el)}></div>
          <div className="shape shape-donut" ref={(el) => (shapeRefs.current[1] = el)}></div>
        </div>

        <div className="hero-content-modern">
          <div className="hero-left-modern">
            <motion.div
              className="hero-text-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>
                <span className="text-gradient">Reading</span> is
                <br />
                <span className="text-highlight">Fascinating</span>
              </h1>

              <p>
                Discover millions of books for your imagination. Dive into worlds of adventure, romance, mystery, and
                knowledge with HearBooks.
              </p>

              <div className="search-container-hero">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search for books, authors, genres..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    ref={searchInputRef}
                  />
                  <button type="submit">
                    <FaSearch />
                  </button>
                </form>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">10M+</span>
                  <span className="stat-label">Books</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5K+</span>
                  <span className="stat-label">Authors</span>
                </div>
                <div className="stat">
                  <span className="stat-number">120K+</span>
                  <span className="stat-label">Readers</span>
                </div>
              </div>

              <div className="hero-buttons-modern">
                <Link to="/ebooks">
                  <motion.button className="explore-button" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <FaBookOpen /> Start Reading
                  </motion.button>
                </Link>
                <Link to="/subscription">
                  <motion.button className="plans-button" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <FaBookmark /> View Plans
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="hero-right-modern">
            <motion.div
              className="book-3d-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              ref={bookRef}
            >
              <div className="book-3d">
                <div className="book-cover">
                  <div className="book-spine"></div>
                  <div className="book-front"></div>
                </div>
                <div className="book-pages">
                  <div className="book-page page-1" ref={(el) => (pageRefs.current[0] = el)}>
                    <div className="page-content">
                      <div className="page-number">01</div>
                      <div className="page-image"></div>
                      <div className="page-text">
                        <div className="text-line"></div>
                        <div className="text-line"></div>
                        <div className="text-line short"></div>
                      </div>
                    </div>
                  </div>
                  <div className="book-page page-2" ref={(el) => (pageRefs.current[1] = el)}>
                    <div className="page-content">
                      <div className="page-number">02</div>
                      <div className="page-image"></div>
                      <div className="page-text">
                        <div className="text-line"></div>
                        <div className="text-line"></div>
                        <div className="text-line short"></div>
                      </div>
                    </div>
                  </div>
                  <div className="book-page page-3" ref={(el) => (pageRefs.current[2] = el)}>
                    <div className="page-content">
                      <div className="page-number">03</div>
                      <div className="page-image"></div>
                      <div className="page-text">
                        <div className="text-line"></div>
                        <div className="text-line"></div>
                        <div className="text-line short"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="book-shadow"></div>
            </motion.div>
          </div>
        </div>

        <div className="scroll-indicator-modern">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <span>Scroll to Explore</span>
            <div className="scroll-arrow-modern"></div>
          </motion.div>
        </div>
      </div>

      <section className="categories-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Browse Categories
        </motion.h2>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="category-card"
              style={{ backgroundColor: category.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
              }}
            >
              <div className="category-icon-container">
                <lord-icon
                  src={`https://cdn.lordicon.com/icons/${category.icon}.json`}
                  trigger="hover"
                  colors="primary:#ffffff"
                  style={{ width: "64px", height: "64px" }}
                ></lord-icon>
              </div>
              <h3>{category.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="popular-books-section">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Popular eBooks
          </motion.h2>
          <motion.a
            href="/ebooks"
            className="view-all"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: 5 }}
          >
            View All <FaArrowRight />
          </motion.a>
        </div>

        <div className="books-grid">
          {loading && !booksLoaded
            ? // Skeleton loaders for books
              Array(4)
                .fill()
                .map((_, index) => <SkeletonLoader key={index} type="book" />)
            : popularBooks.map((book, index) => (
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
                >
                  <div className="book-cover">
                    <img src={book.cover || "/placeholder.svg"} alt={book.title} />
                    <div className="book-rating">
                      <FaStar /> <span>{book.rating}</span>
                    </div>
                  </div>
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                    <motion.button className="book-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <FaBookOpen /> Read
                    </motion.button>
                  </div>
                </motion.div>
              ))}
        </div>
      </section>

      <section className="audiobooks-section">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Top Audiobooks
          </motion.h2>
          <motion.a
            href="/audio"
            className="view-all"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: 5 }}
          >
            View All <FaArrowRight />
          </motion.a>
        </div>

        <div className="audiobooks-grid">
          {loading && !audioLoaded
            ? // Skeleton loaders for audiobooks
              Array(4)
                .fill()
                .map((_, index) => <SkeletonLoader key={index} type="audio" />)
            : topAudiobooks.map((audio, index) => (
                <motion.div
                  key={audio.id}
                  className="audiobook-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="audiobook-cover">
                    <img src={audio.cover || "/placeholder.svg"} alt={audio.title} />
                    <div className="audiobook-duration">{audio.duration}</div>
                    <div className="play-overlay">
                      <div className="play-icon"></div>
                    </div>
                  </div>
                  <div className="audiobook-info">
                    <h3>{audio.title}</h3>
                    <p className="audiobook-narrator">Narrated by {audio.narrator}</p>
                    <motion.button className="audiobook-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <FaHeadphones /> Listen
                    </motion.button>
                  </div>
                </motion.div>
              ))}
        </div>
      </section>

      <section className="videos-section">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Videos
          </motion.h2>
          <motion.a
            href="/video"
            className="view-all"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: 5 }}
          >
            View All <FaArrowRight />
          </motion.a>
        </div>

        <div className="videos-grid">
          {loading && !videosLoaded
            ? // Skeleton loaders for videos
              Array(3)
                .fill()
                .map((_, index) => <SkeletonLoader key={index} type="video" />)
            : featuredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className="video-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="video-thumbnail">
                    <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} />
                    <div className="video-duration">{video.duration}</div>
                    <div className="play-overlay">
                      <div className="play-icon"></div>
                    </div>
                  </div>
                  <div className="video-info">
                    <h3>{video.title}</h3>
                    <motion.button className="video-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <FaVideo /> Watch
                    </motion.button>
                  </div>
                </motion.div>
              ))}
        </div>
      </section>

      <section className="testimonials-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Our Members Say
        </motion.h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="testimonial-content">
                <p>{testimonial.text}</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                <span>{testimonial.name}</span>
              </div>
              <div className="testimonial-decoration"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="subscription-banner">
        <div className="subscription-content">
          <motion.div
            className="subscription-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Unlock the Complete HearBooks Experience</h2>
            <p>Choose from our Essential, Premium, or Viral plans to access premium content</p>
            <ul className="subscription-features">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="feature-icon">✓</span> Unlimited access to all content
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="feature-icon">✓</span> Download for offline enjoyment
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="feature-icon">✓</span> Ad-free experience
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="feature-icon">✓</span> Early access to new releases
              </motion.li>
            </ul>
            <Link to="/subscription">
              <motion.button
                className="subscribe-button-new"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaBook /> View Premium Plans
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            className="subscription-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="floating-elements">
              <motion.div
                className="floating-book"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="floating-headphone"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="floating-video"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4.5,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest book releases and exclusive offers</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Subscribe
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="newsletter-decoration"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="floating-letter"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="floating-envelope"
              animate={{
                y: [0, -10, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default HomePage

