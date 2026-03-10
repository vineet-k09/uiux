"use client"

import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useEffect, useState } from "react"
export default function ParticleBackground() {

  
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      // particlesLoaded={Particles}
      className="absolute inset-0 -z-10 pointer-events-none"
      options={{
  fullScreen: true,

  fpsLimit: 60,

  particles: {
    number: {
      value: 150,
      density: {
        enable: true
      }
    },

    color: {
      value: "#ff0000"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: {
        enable: true,
        speed: 3,
        sync: false
      }
    },

    size: {
      value: { min: 0.1, max: 6 },
      animation: {
        enable: true,
        speed: 20,
        sync: false
      }
    },

    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out"
      }
    },

    links: {
      enable: true,
      distance: 120,
  color: "#ffffff",
  opacity: 0.4,
  width: 1
    },
    
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "bubble"]
      },

      onClick: {
        enable: false,
        mode: "push"
      },

      // resize: true
    },

    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        factor: 1,
        maxSpeed: 50,
        speed: 1
      },

      push: {
        quantity: 4
      },
      bubble: {
  distance: 200,
  size: 10,
  duration: 2,
  opacity: 1
},
    }
  },

  detectRetina: true
}}
    />
  )
}