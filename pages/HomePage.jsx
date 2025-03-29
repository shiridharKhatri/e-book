"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Carousel } from "react-responsive-carousel"
import { FaArrowRight, FaBookOpen, FaHeadphones, FaVideo, FaStar } from "react-icons/fa"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/HomePage.css"

const HomePage = () => {
  const heroRef = useRef(null)
  const forestRef = useRef(null)

  useEffect(() => {
    // Create floating clouds and particles
    const hero = heroRef.current

    // Create clouds
    for (let i = 0; i < 5; i++) {
      const cloud = document.createElement("div")
      cloud.className = "cloud"
      cloud.style.top = `${Math.random() * 60}%`
      cloud.style.left = `${Math.random() * 100}%`
      cloud.style.animationDuration = `${Math.random() * 60 + 60}s`
      hero.appendChild(cloud)
    }

    // Create particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.top = `${Math.random() * 100}%`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`
      particle.style.width = `${Math.random() * 5 + 2}px`
      particle.style.height = particle.style.width
      hero.appendChild(particle)
    }

    // Create forest elements
    if (forestRef.current) {
      const forest = forestRef.current

      // Create trees
      for (let i = 0; i < 15; i++) {
        const tree = document.createElement("div")
        tree.className = "forest-tree"
        tree.style.left = `${Math.random() * 100}%`
        tree.style.bottom = `${Math.random() * 20}%`
        tree.style.height = `${Math.random() * 100 + 100}px`
        tree.style.width = `${tree.style.height.replace("px", "") * 0.6}px`
        tree.style.zIndex = Math.floor(Math.random() * 3)
        forest.appendChild(tree)
      }

      // Create grass tufts
      for (let i = 0; i < 40; i++) {
        const grass = document.createElement("div")
        grass.className = "forest-grass"
        grass.style.left = `${Math.random() * 100}%`
        grass.style.bottom = "0"
        grass.style.height = `${Math.random() * 30 + 10}px`
        grass.style.width = "10px"
        forest.appendChild(grass)
      }
    }

    // Animate trees
    gsap.to(".tree", {
      rotation: 2,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    })

    // Animate forest trees
    gsap.to(".forest-tree", {
      rotation: 1,
      y: -5,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    })

    // Animate grass
    gsap.to(".forest-grass", {
      rotation: 5,
      duration: 1.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    })

    return () => {
      // Cleanup animations
      gsap.killTweensOf(".tree")
      gsap.killTweensOf(".forest-tree")
      gsap.killTweensOf(".forest-grass")
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
      color: "#a8e6cf",
    },
    {
      id: "adventure",
      title: "Adventure",
      icon: "🗺️",
      color: "#dcedc1",
    },
    {
      id: "romance",
      title: "Romance",
      icon: "💖",
      color: "#ffd3b6",
    },
    {
      id: "mystery",
      title: "Mystery",
      icon: "🔍",
      color: "#ffaaa5",
    },
    {
      id: "scifi",
      title: "Sci-Fi",
      icon: "🚀",
      color: "#d9d7f1",
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

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-section" ref={heroRef}>
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Enter the Magical World of Ghibli
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover enchanting stories, sounds, and sights from the beloved Studio Ghibli universe
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button className="cta-button primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Start Exploring
            </motion.button>
            <motion.button className="cta-button secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View Library
            </motion.button>
          </motion.div>
        </div>

        <div className="hero-decoration">
          <div className="forest-background" ref={forestRef}></div>
          <motion.div
            className="totoro"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="small-totoro"
            animate={{
              y: [0, -5, 0],
              x: [0, 5, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
              delay: 0.5,
            }}
          ></motion.div>
          <motion.div
            className="dust-sprite"
            animate={{
              y: [0, -15, 0],
              x: [0, -10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3.5,
              ease: "easeInOut",
              delay: 1,
            }}
          ></motion.div>
          <div className="tree tree-left"></div>
          <div className="tree tree-right"></div>
        </div>

        <div className="scroll-indicator">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <span>Scroll Down</span>
            <div className="scroll-arrow"></div>
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
            <p>Get unlimited access to all eBooks, audiobooks, and videos with our premium subscription</p>
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
            <motion.button
              className="subscribe-button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe Now
            </motion.button>
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
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="testimonial-content">
              <p>
                "The Ghibli Stream library has completely transformed my reading experience. I love having access to so
                many magical stories!"
              </p>
            </div>
            <div className="testimonial-author">
              <img src="/placeholder.svg?height=100&width=100" alt="Sophie" />
              <span>Sophie H.</span>
            </div>
          </motion.div>

          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="testimonial-content">
              <p>
                "Being able to download audiobooks for my commute has been a game-changer. The narration quality is
                exceptional."
              </p>
            </div>
            <div className="testimonial-author">
              <img src="/placeholder.svg?height=100&width=100" alt="Ashitaka" />
              <span>Ashitaka M.</span>
            </div>
          </motion.div>

          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="testimonial-content">
              <p>
                "As a busy person, having all this content in one place with a single subscription is exactly what I
                needed. The Ghibli-inspired design is beautiful too!"
              </p>
            </div>
            <div className="testimonial-author">
              <img src="/placeholder.svg?height=100&width=100" alt="Kiki" />
              <span>Kiki D.</span>
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

