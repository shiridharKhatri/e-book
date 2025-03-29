"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaCheck, FaTimes } from "react-icons/fa"
import "../styles/SubscriptionPage.css"

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly")

  const plans = {
    monthly: {
      silver: 74,
      gold: 149,
      platinum: 374,
    },
    yearly: {
      silver: 740,
      gold: 1490,
      platinum: 3740,
    },
  }

  const features = {
    silver: {
      included: [
        "Access to all eBooks",
        "Access to selected audiobooks",
        "Access to selected videos",
        "Ad-free experience",
        "Access on all devices",
      ],
      notIncluded: [
        "Download content for offline use",
        "Early access to new releases",
        "Exclusive Ghibli collectibles",
        "Premium video content",
      ],
    },
    gold: {
      included: [
        "Access to all eBooks",
        "Access to all audiobooks",
        "Access to all videos",
        "Download content for offline use",
        "Ad-free experience",
        "Access on all devices",
        "One monthly inclusion in our blog newsletter at press mention",
      ],
      notIncluded: ["Early access to new releases", "Exclusive Ghibli collectibles"],
    },
    platinum: {
      included: [
        "Access to all eBooks",
        "Access to all audiobooks",
        "Access to all videos",
        "Download content for offline use",
        "Ad-free experience",
        "Access on all devices",
        "Early access to new releases",
        "Exclusive Ghibli collectibles",
        "Priority customer support",
        "Exclusive behind-the-scenes content",
      ],
      notIncluded: [],
    },
  }

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
          Packages and Pricing
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          With our Premium plans, you can take your agency's marketing to the next level.
        </motion.p>
      </div>

      <div className="subscription-content">
        <div className="pricing-container">
          <motion.div
            className="pricing-toggle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className={`pricing-toggle-button ${selectedPlan === "monthly" ? "active" : ""}`}
              onClick={() => setSelectedPlan("monthly")}
            >
              Billed Monthly
            </button>
            <button
              className={`pricing-toggle-button ${selectedPlan === "yearly" ? "active" : ""}`}
              onClick={() => setSelectedPlan("yearly")}
            >
              Billed Annually
            </button>
          </motion.div>

          <div className="pricing-options">
            <motion.div
              className="pricing-card silver"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="pricing-card-header">
                <h3>Essential</h3>
                <div className="pricing-price">
                  ${plans[selectedPlan].silver}
                  <span>/{selectedPlan === "monthly" ? "mo" : "yr"}</span>
                </div>
                <div className="pricing-period">
                  per month (billed {selectedPlan === "monthly" ? "monthly" : "annually"})
                </div>
              </div>

              <div className="pricing-description">
                Perfect for individuals or small teams with straightforward needs.
              </div>

              <div className="pricing-features">
                <ul>
                  {features.silver.included.map((feature, index) => (
                    <li key={`silver-included-${index}`}>
                      <FaCheck /> {feature}
                    </li>
                  ))}
                  {features.silver.notIncluded.map((feature, index) => (
                    <li key={`silver-not-included-${index}`} className="not-included">
                      <FaTimes /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="pricing-button">Choose Essential</button>
            </motion.div>

            <motion.div
              className="pricing-card gold featured"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="pricing-badge">Recommended</div>
              <div className="pricing-card-header">
                <h3>Premium</h3>
                <div className="pricing-price">
                  ${plans[selectedPlan].gold}
                  <span>/{selectedPlan === "monthly" ? "mo" : "yr"}</span>
                </div>
                <div className="pricing-period">
                  per month (billed {selectedPlan === "monthly" ? "monthly" : "annually"})
                </div>
              </div>

              <div className="pricing-description">Popular as a recommended agency solution for digital agencies.</div>

              <div className="pricing-features">
                <ul>
                  {features.gold.included.map((feature, index) => (
                    <li key={`gold-included-${index}`}>
                      <FaCheck /> {feature}
                    </li>
                  ))}
                  {features.gold.notIncluded.map((feature, index) => (
                    <li key={`gold-not-included-${index}`} className="not-included">
                      <FaTimes /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="pricing-button">Choose Premium</button>
            </motion.div>

            <motion.div
              className="pricing-card platinum"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="pricing-card-header">
                <h3>Viral</h3>
                <div className="pricing-price">
                  ${plans[selectedPlan].platinum}
                  <span>/{selectedPlan === "monthly" ? "mo" : "yr"}</span>
                </div>
                <div className="pricing-period">
                  per month (billed {selectedPlan === "monthly" ? "monthly" : "annually"})
                </div>
              </div>

              <div className="pricing-description">Unlock your unlimited potential with third-party sites.</div>

              <div className="pricing-features">
                <ul>
                  {features.platinum.included.map((feature, index) => (
                    <li key={`platinum-included-${index}`}>
                      <FaCheck /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="pricing-button">Choose Viral</button>
            </motion.div>
          </div>
        </div>

        <div className="faq-section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="faq-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>What's the difference between Essential, Premium, and Viral plans?</h3>
            <p>
              Essential gives you access to all eBooks and selected audiobooks and videos. Premium adds full access to
              all audiobooks and videos plus offline downloads. Viral includes everything plus early access to new
              releases, exclusive collectibles, and priority support.
            </p>
          </motion.div>

          <motion.div
            className="faq-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Can I cancel my subscription?</h3>
            <p>
              Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing
              period with no additional charges.
            </p>
          </motion.div>

          <motion.div
            className="faq-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Can I switch between plans?</h3>
            <p>
              Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be
              available immediately. If you downgrade, the change will take effect at the start of your next billing
              cycle.
            </p>
          </motion.div>
        </div>

        <div className="cta-section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Start Your Magical Journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of members who are already enjoying unlimited access to our enchanting Ghibli-inspired
            content.
          </motion.p>

          <motion.button
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default SubscriptionPage

