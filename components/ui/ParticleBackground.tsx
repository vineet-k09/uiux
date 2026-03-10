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
        fullScreen: false,

        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
            //   area: 800
            }
          },

          color: {
            value: "#ffffff"
          },

          shape: {
            type: "circle"
          },

          opacity: {
            value: 0.5
          },

          size: {
            value: { min: 1, max: 3 }
          },

          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out"
            }
          },

          links: {
            enable: false
          }
        },

        interactivity: {
          events: {
            onHover: {
              enable: false,
              mode: "repulse"
            },

            onClick: {
              enable: false,
              mode: "push"
            }
          },

          modes: {
            repulse: {
              distance: 120,
              duration: 0.4
            },

            push: {
              quantity: 4
            }
          }
        },

        detectRetina: true
      }}
    />
  )
}