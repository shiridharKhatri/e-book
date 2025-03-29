"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { FaCheck, FaTimes, FaCrown, FaBookOpen, FaHeadphones, FaVideo, FaDownload } from "react-icons/fa"
import "../styles/SubscriptionPage.css"

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly")
  const planDetailsRef = useRef(null)

  useEffect(() => {
    // Add floating elements animation
    const container = planDetailsRef.current
    if (container) {
      // Create floating particles
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div")
        particle.className = "plan-particle"
        particle.style.top = `${Math.random() * 100}%`
        particle.style.left = `${Math.random() * 100}%`
        particle.style.width = `${Math.random() * 6 + 2}px`

        particle.style.height = particle.style.width
        particle.style.backgroundColor = Math.random() > 0.5 ? "var(--primary-color)" : "var(--secondary-color)"
        particle.style.opacity = "0.1"
        particle.style.borderRadius = "50%"
        particle.style.position = "absolute"
        particle.style.animation = `float-particle ${Math.random() * 10 + 10}s linear infinite`
        container.appendChild(particle)
      }
    }
  }, [])

  const plans = [
    {
      id: "monthly",
      name: "Monthly",
      price: 9.99,
      period: "month",
      features: [
        "Unlimited access to all eBooks",
        "Unlimited access to all audiobooks",
        "Unlimited access to all videos",
        "Download content for offline use",
        "Ad-free experience",
        "Access on all devices",
      ],
      notIncluded: ["Early access to new releases", "Exclusive Ghibli collectibles"],
    },
    {
      id: "yearly",
      name: "Yearly",
      price: 99.99,
      period: "year",
      discount: "17% off",
      features: [
        "Unlimited access to all eBooks",
        "Unlimited access to all audiobooks",
        "Unlimited access to all videos",
        "Download content for offline use",
        "Ad-free experience",
        "Access on all devices",
        "Early access to new releases",
        "Exclusive Ghibli collectibles",
      ],
      notIncluded: [],
    },
  ]

  const benefits = [
    {
      icon: <FaBookOpen />,
      title: "Unlimited Reading",
      description: "Access our entire library of Ghibli-inspired eBooks with no limits.",
    },
    {
      icon: <FaHeadphones />,
      title: "Unlimited Listening",
      description: "Enjoy all audiobooks narrated by professional voice actors.",
    },
    {
      icon: <FaVideo />,
      title: "Unlimited Watching",
      description: "Stream all videos, documentaries, and behind-the-scenes content.",
    },
    {
      icon: <FaDownload />,
      title: "Offline Access",
      description: "Download content to enjoy offline on any device, anywhere.",
    },
  ]

  const testimonials = [
    {
      name: "Sophie Hatter",
      avatar: "/placeholder.svg?height=100&width=100",
      text: "The premium subscription has completely transformed my reading experience. I love having access to so many magical stories from the Ghibli universe!",
    },
    {
      name: "Ashitaka",
      avatar: "/placeholder.svg?height=100&width=100",
      text: "Being able to download audiobooks for my commute has been a game-changer. The narration quality is exceptional and truly captures the Ghibli magic.",
    },
    {
      name: "Kiki",
      avatar: "/placeholder.svg?height=100&width=100",
      text: "As a busy person, having all this content in one place with a single subscription is exactly what I needed. The beautiful Ghibli-inspired design makes browsing a joy!",
    },
  ]

  const selectedPlanData = plans.find((plan) => plan.id === selectedPlan)

  return (
    <motion.div
      className="subscription-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="subscription-header">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Unlock the Magical World of Ghibli
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Subscribe to access our entire library of enchanting content
        </motion.p>
      </div>

      <div className="subscription-content">
        <div className="plans-section">
          <div className="plan-toggle">
            <button
              className={`toggle-button ${selectedPlan === "monthly" ? "active" : ""}`}
              onClick={() => setSelectedPlan("monthly")}
            >
              Monthly
            </button>
            <button
              className={`toggle-button ${selectedPlan === "yearly" ? "active" : ""}`}
              onClick={() => setSelectedPlan("yearly")}
            >
              Yearly <span className="discount-badge">Save 17%</span>
            </button>
          </div>

          <motion.div
            className="plan-details"
            ref={planDetailsRef}
            key={selectedPlan}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="plan-header">
              <div className="plan-name">
                <FaCrown className="crown-icon" />
                <h2>{selectedPlanData.name} Premium</h2>
              </div>
              <div className="plan-price">
                <span className="price">${selectedPlanData.price}</span>
                <span className="period">/{selectedPlanData.period}</span>
              </div>
              {selectedPlanData.discount && <div className="discount-tag">{selectedPlanData.discount}</div>}
            </div>

            <div className="plan-features">
              <h3>What's included:</h3>
              <ul className="features-list">
                {selectedPlanData.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <FaCheck className="check-icon" /> {feature}
                  </motion.li>
                ))}
              </ul>

              {selectedPlanData.notIncluded.length > 0 && (
                <>
                  <h3>Not included:</h3>
                  <ul className="not-included-list">
                    {selectedPlanData.notIncluded.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <FaTimes className="times-icon" /> {feature}
                      </motion.li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <motion.button className="subscribe-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Subscribe Now
            </motion.button>

            <p className="cancel-notice">Cancel anytime. No commitment required.</p>
          </motion.div>
        </div>

        <div className="benefits-section">
          <h2>Premium Benefits</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="testimonials-section">
          <h2>What Our Members Say</h2>
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
              </motion.div>
            ))}
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How does the subscription work?</h3>
              <p>
                Our subscription gives you unlimited access to all Ghibli-inspired content in our library. You can read,
                listen, or watch as much as you want, whenever you want, on any device.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I cancel my subscription?</h3>
              <p>
                Yes, you can cancel your subscription at any time. Your access will continue until the end of your
                billing period with no additional charges.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I download content for offline use?</h3>
              <p>
                Yes, premium members can download eBooks, audiobooks, and videos for offline enjoyment on mobile
                devices, perfect for when you're traveling or in areas with limited connectivity.
              </p>
            </div>
            <div className="faq-item">
              <h3>How often is new content added?</h3>
              <p>
                We add new Ghibli-inspired content every week, including exclusive stories, audiobooks, and
                behind-the-scenes videos that you won't find anywhere else.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Start Your Magical Journey?</h2>
          <p>
            Join thousands of members who are already enjoying unlimited access to our enchanting Ghibli-inspired
            content.
          </p>
          <motion.button className="cta-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Start Your Free Trial
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default SubscriptionPage

