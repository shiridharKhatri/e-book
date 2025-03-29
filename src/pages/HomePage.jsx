"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaArrowRight, FaBookOpen, FaHeadphones, FaVideo, FaStar } from "react-icons/fa"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/HomePage.css"

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)
  const parallaxLayersRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Create animated particles
  useEffect(() => {
    const heroElement = heroRef.current
    if (!heroElement) return

    // Create particles container
    const particlesContainer = document.createElement("div")
    particlesContainer.className = "particles-container"
    heroElement.appendChild(particlesContainer)

    // Create particles
    const particleCount = 50
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"

      // Random properties
      const size = Math.random() * 10 + 5
      const posX = Math.random() * 100
      const posY = Math.random() * 100
      const duration = Math.random() * 20 + 10
      const delay = Math.random() * 5

      // Apply styles
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${posX}%`
      particle.style.top = `${posY}%`
      particle.style.animationDuration = `${duration}s`
      particle.style.animationDelay = `${delay}s`
      particle.style.opacity = Math.random() * 0.5 + 0.1

      particlesContainer.appendChild(particle)
    }

    return () => {
      if (heroElement.contains(particlesContainer)) {
        heroElement.removeChild(particlesContainer)
      }
    }
  }, [])

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
      icon: "🧙‍♂️",
      color: "var(--ghibli-blue)",
    },
    {
      id: "adventure",
      title: "Adventure",
      icon: "🗺️",
      color: "var(--ghibli-green)",
    },
    {
      id: "romance",
      title: "Romance",
      icon: "💖",
      color: "var(--ghibli-pink)",
    },
    {
      id: "mystery",
      title: "Mystery",
      icon: "🔍",
      color: "var(--ghibli-sunset)",
    },
    {
      id: "scifi",
      title: "Sci-Fi",
      icon: "🚀",
      color: "var(--ghibli-spirit)",
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
      text: "The Ghibli Stream library has completely transformed my reading experience. I love having access to so many magical stories from the Ghibli universe!",
    },
    {
      id: 2,
      name: "Ashitaka",
      avatar: "/placeholder.svg?height=100&width=100",
      text: "Being able to download audiobooks for my commute has been a game-changer. The narration quality is exceptional and truly captures the Ghibli magic.",
    },
    {
      id: 3,
      name: "Kiki",
      avatar: "/placeholder.svg?height=100&width=100",
      text: "As a busy person, having all this content in one place with a single subscription is exactly what I needed. The beautiful Ghibli-inspired design makes browsing a joy!",
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
      {/* Completely New Hero Section */}
      <div className="hero-section-new" ref={heroRef}>
        <div className="parallax-container">
          <div
            className="parallax-layer sky-layer"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            ref={(el) => (parallaxLayersRef.current[0] = el)}
          ></div>
          <div
            className="parallax-layer clouds-layer"
            style={{ transform: `translateX(${scrollY * 0.2}px)` }}
            ref={(el) => (parallaxLayersRef.current[1] = el)}
          ></div>
          <div
            className="parallax-layer mountains-back-layer"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            ref={(el) => (parallaxLayersRef.current[2] = el)}
          ></div>
          <div
            className="parallax-layer mountains-mid-layer"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            ref={(el) => (parallaxLayersRef.current[3] = el)}
          ></div>
          <div
            className="parallax-layer forest-layer"
            style={{ transform: `translateY(${scrollY * 0.25}px)` }}
            ref={(el) => (parallaxLayersRef.current[4] = el)}
          ></div>
          <div
            className="parallax-layer foreground-layer"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            ref={(el) => (parallaxLayersRef.current[5] = el)}
          ></div>
        </div>

        <div className="hero-content-new">
          <motion.div
            className="hero-text-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1>Discover the Magic of Ghibli</h1>
            <p>Immerse yourself in a world of enchanting stories, captivating soundtracks, and breathtaking visuals</p>

            <div className="hero-buttons-new">
              <Link to="/ebooks">
                <motion.button
                  className="explore-button"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Begin Your Journey
                </motion.button>
              </Link>
              <Link to="/subscription">
                <motion.button
                  className="plans-button"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Plans
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="floating-books-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="floating-book book-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="book-cover"></div>
            </motion.div>

            <motion.div
              className="floating-book book-2"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -3, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="book-cover"></div>
            </motion.div>

            <motion.div
              className="floating-book book-3"
              animate={{
                y: [0, -25, 0],
                rotate: [0, 7, 0],
                scale: [1, 1.07, 1],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="book-cover"></div>
            </motion.div>
          </motion.div>
        </div>

        <div className="scroll-indicator-new">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <span>Scroll to Explore</span>
            <div className="scroll-arrow-new"></div>
          </motion.div>
        </div>
      </div>

      <section className="featured-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Content
        </motion.h2>

        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          className="featured-carousel"
        >
          {featuredContent.map((item) => (
            <div key={item.id} className="carousel-item">
              <div className="carousel-content">
                <motion.div className="carousel-image" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <img src={item.image || "/placeholder.svg"} alt={item.title} />
                  <div className="content-type">{item.type}</div>
                </motion.div>
                <div className="carousel-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {item.type === "ebook" ? "Read Now" : item.type === "audio" ? "Listen Now" : "Watch Now"}
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

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
              <div className="category-icon">{category.icon}</div>
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
          {popularBooks.map((book, index) => (
            <motion.div
              key={book.id}
              className="book-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
          {topAudiobooks.map((audio, index) => (
            <motion.div
              key={audio.id}
              className="audiobook-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="video-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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
            <h2>Unlock the Complete Ghibli Experience</h2>
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
                View Premium Plans
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
              <motion.div
                className="floating-character"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
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
            <p>Subscribe to our newsletter for the latest Ghibli content and exclusive offers</p>
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

