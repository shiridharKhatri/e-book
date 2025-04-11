"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaPlay, FaPause, FaExpand, FaVolumeUp, FaVolumeMute } from "react-icons/fa"
import "../styles/VideoPage.css"

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)

  const videoRef = useRef(null)
  const videoContainerRef = useRef(null)
  const progressRef = useRef(null)

  const videos = [
    {
      id: 1,
      title: "Spirited Away: Official Trailer",
      thumbnail: "/placeholder.png?height=400&width=600",
      description: "Watch the official trailer for the Academy Award-winning masterpiece.",
      duration: "2:30",
      source: "https://example.com/video.mp4",
      isPremium: false,
    },
    {
      id: 2,
      title: "Princess Mononoke: Behind the Scenes",
      thumbnail: "/placeholder.png?height=400&width=600",
      description: "Discover how this epic tale of humans versus forest gods was created.",
      duration: "15:45",
      source: "https://example.com/video.mp4",
      isPremium: true,
    },
    {
      id: 3,
      title: "My Neighbor Totoro: Full Movie",
      thumbnail: "/placeholder.png?height=400&width=600",
      description: "Enjoy the complete heartwarming story about two sisters and their magical forest friends.",
      duration: "1:26:45",
      source: "https://example.com/video.mp4",
      isPremium: true,
    },
    {
      id: 4,
      title: "Howl's Moving Castle: Character Analysis",
      thumbnail: "/placeholder.png?height=400&width=600",
      description: "An in-depth look at the complex characters in this beloved film.",
      duration: "22:10",
      source: "https://example.com/video.mp4",
      isPremium: false,
    },
    {
      id: 5,
      title: "The Art of Studio Ghibli",
      thumbnail: "/placeholder.png?height=400&width=600",
      description: "Explore the unique artistic style that defines Studio Ghibli films.",
      duration: "35:20",
      source: "https://example.com/video.mp4",
      isPremium: false,
    },
    {
      id: 6,
      title: "Ponyo: The Making Of",
      thumbnail: "/placeholder.png?height=400&width=600",
      description: "Go behind the scenes of this magical underwater adventure.",
      duration: "28:15",
      source: "https://example.com/video.mp4",
      isPremium: true,
    },
  ]

  const selectVideo = (video) => {
    setSelectedVideo(video)
    setIsPlaying(false)
    setCurrentTime(0)

    // Reset video player
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleFullscreen = () => {
    if (videoContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoContainerRef.current.requestFullscreen()
      }
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleProgressChange = (e) => {
    const newTime = e.target.value
    setCurrentTime(newTime)
    if (videoRef.current) {
      videoRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <motion.div
      className="video-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="video-header">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Video Collection
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Watch trailers, behind-the-scenes, and full movies from the world of Ghibli
        </motion.p>
      </div>

      <AnimatePresence mode="wait">
        {selectedVideo ? (
          <motion.div
            className="video-player-container"
            ref={videoContainerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="video-player">
              <div className="video-wrapper" onClick={togglePlay}>
                <video
                  ref={videoRef}
                  poster={selectedVideo.thumbnail}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={selectedVideo.source} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {!isPlaying && (
                  <div className="play-overlay">
                    <FaPlay className="play-icon" />
                  </div>
                )}
              </div>

              <div className="video-controls">
                <button className="control-button" onClick={togglePlay}>
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
                  <button className="control-button" onClick={toggleMute}>
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

                <button className="control-button" onClick={toggleFullscreen}>
                  <FaExpand />
                </button>
              </div>
            </div>

            <div className="video-info">
              <h2>{selectedVideo.title}</h2>
              <p>{selectedVideo.description}</p>

              {selectedVideo.isPremium && (
                <div className="premium-notice">
                  <p>This is premium content. Upgrade to watch the full video.</p>
                  <motion.button className="premium-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Upgrade to Premium
                  </motion.button>
                </div>
              )}
            </div>

            <motion.button
              className="back-button"
              onClick={() => setSelectedVideo(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Videos
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            className="video-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {videos.map((video, index) => (
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
                onClick={() => selectVideo(video)}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail || "/placeholder.png"} alt={video.title} />
                  {video.isPremium && <div className="premium-badge">Premium</div>}
                  <div className="duration-badge">{video.duration}</div>
                  <div className="play-overlay">
                    <FaPlay />
                  </div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default VideoPage

