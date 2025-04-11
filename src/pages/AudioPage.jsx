"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaTimes } from "react-icons/fa"
import "../styles/AudioPage.css"

const AudioPage = () => {
  const [selectedAudio, setSelectedAudio] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const [showPlayer, setShowPlayer] = useState(false)

  const audioRef = useRef(null)
  const progressRef = useRef(null)

  const audiobooks = [
    {
      id: 1,
      title: "Spirited Away",
      narrator: "Rumi Hiiragi",
      cover: "/placeholder.png?height=400&width=300",
      description: "Join Chihiro on her journey through the spirit world in this enchanting audiobook.",
      duration: "3h 45m",
      sample: "https://example.com/sample.mp3",
      isPremium: false,
    },
    {
      id: 2,
      title: "Princess Mononoke",
      narrator: "Yōji Matsuda",
      cover: "/placeholder.png?height=400&width=300",
      description: "Experience the epic tale of humans versus forest gods in this immersive audio adventure.",
      duration: "4h 20m",
      sample: "https://example.com/sample.mp3",
      isPremium: true,
    },
    {
      id: 3,
      title: "My Neighbor Totoro",
      narrator: "Noriko Hidaka",
      cover: "/placeholder.png?height=400&width=300",
      description: "A heartwarming story about two sisters and their magical forest friends.",
      duration: "2h 55m",
      sample: "https://example.com/sample.mp3",
      isPremium: false,
    },
    {
      id: 4,
      title: "Howl's Moving Castle",
      narrator: "Chieko Baisho",
      cover: "/placeholder.png?height=400&width=300",
      description: "Follow Sophie's adventure in a magical moving castle in this captivating audiobook.",
      duration: "4h 10m",
      sample: "https://example.com/sample.mp3",
      isPremium: true,
    },
    {
      id: 5,
      title: "Kiki's Delivery Service",
      narrator: "Minami Takayama",
      cover: "/placeholder.png?height=400&width=300",
      description: "Join young witch Kiki as she starts her own delivery service in a new town.",
      duration: "3h 15m",
      sample: "https://example.com/sample.mp3",
      isPremium: false,
    },
    {
      id: 6,
      title: "Ponyo",
      narrator: "Yuria Nara",
      cover: "/placeholder.png?height=400&width=300",
      description: "Dive into the magical underwater world of Ponyo and her journey to become human.",
      duration: "2h 40m",
      sample: "https://example.com/sample.mp3",
      isPremium: false,
    },
  ]

  const selectAudio = (audio) => {
    setSelectedAudio(audio)
    setIsPlaying(false)
    setCurrentTime(0)
    setShowPlayer(true)

    // Reset audio player
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    setIsPlaying(false)
    setShowPlayer(false)
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleProgressChange = (e) => {
    const newTime = e.target.value
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  return (
    <motion.div
      className="audio-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="audio-header">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Audiobook Collection
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Listen to magical stories narrated by talented voice actors
        </motion.p>
      </div>

      <div className="audio-grid">
        {audiobooks.map((audio, index) => (
          <motion.div
            key={audio.id}
            className="audio-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
            }}
            onClick={() => selectAudio(audio)}
          >
            <div className="audio-cover">
              <img src={audio.cover || "/placeholder.png"} alt={audio.title} />
              {audio.isPremium && <div className="premium-badge">Premium</div>}
              <div className="play-overlay">
                <FaPlay />
              </div>
            </div>
            <div className="audio-info">
              <h3>{audio.title}</h3>
              <p className="audio-narrator">Narrated by {audio.narrator}</p>
              <p className="audio-duration">{audio.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showPlayer && selectedAudio && (
          <motion.div
            className={`audio-player ${showPlayer ? "active" : ""}`}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <button className="close-player-btn" onClick={closePlayer}>
              <FaTimes />
            </button>
            <div className="player-content">
              <div className="player-cover">
                <img src={selectedAudio.cover || "/placeholder.png"} alt={selectedAudio.title} />
              </div>

              <div className="player-info">
                <h3>{selectedAudio.title}</h3>
                <p>Narrated by {selectedAudio.narrator}</p>

                <div className="player-controls">
                  <audio
                    ref={audioRef}
                    src={selectedAudio.sample}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                  />

                  <button className="play-button" onClick={togglePlay}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>

                  <div className="progress-container">
                    <span className="time-display">{formatTime(currentTime)}</span>
                    <input
                      type="range"
                      ref={progressRef}
                      className="progress-bar"
                      min="0"
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleProgressChange}
                    />
                    <span className="time-display">{formatTime(duration)}</span>
                  </div>

                  <div className="volume-container">
                    <button className="volume-button" onClick={toggleMute}>
                      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                    </button>
                    <input
                      type="range"
                      className="volume-slider"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                    />
                  </div>
                </div>

                <div className="player-actions">
                  {selectedAudio.isPremium ? (
                    <motion.button className="premium-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      Unlock with Premium
                    </motion.button>
                  ) : (
                    <motion.button className="buy-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      Buy Audiobook
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default AudioPage

