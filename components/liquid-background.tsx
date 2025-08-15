"use client"

import { useEffect, useRef } from "react"

export default function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Liquid blob properties
    const blobs = [
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.4,
        radius: 120,
        vx: 0.5,
        vy: 0.3,
        color: "rgba(59, 130, 246, 0.15)", // blue-500 with opacity
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.6,
        radius: 100,
        vx: -0.3,
        vy: 0.4,
        color: "rgba(99, 102, 241, 0.12)", // indigo-500 with opacity
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.3,
        radius: 80,
        vx: 0.4,
        vy: -0.2,
        color: "rgba(147, 197, 253, 0.1)", // blue-300 with opacity
      },
    ]

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX
      targetMouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Smooth mouse following
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      // Update and draw blobs
      blobs.forEach((blob, index) => {
        // Move blobs
        blob.x += blob.vx
        blob.y += blob.vy

        // Bounce off edges
        if (blob.x + blob.radius > canvas.width || blob.x - blob.radius < 0) {
          blob.vx *= -1
        }
        if (blob.y + blob.radius > canvas.height || blob.y - blob.radius < 0) {
          blob.vy *= -1
        }

        // Mouse interaction - attract blobs to mouse
        const dx = mouseX - blob.x
        const dy = mouseY - blob.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200) {
          const force = (200 - distance) / 200
          blob.x += dx * force * 0.01
          blob.y += dy * force * 0.01
        }

        // Create liquid effect with multiple gradients
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)

        gradient.addColorStop(0, blob.color.replace("0.15", "0.25").replace("0.12", "0.2").replace("0.1", "0.15"))
        gradient.addColorStop(0.5, blob.color)
        gradient.addColorStop(1, blob.color.replace("0.15", "0.05").replace("0.12", "0.03").replace("0.1", "0.02"))

        ctx.fillStyle = gradient
        ctx.filter = "blur(2px)"

        // Draw organic blob shape
        ctx.beginPath()
        const points = 8
        for (let i = 0; i < points; i++) {
          const angle = (i / points) * Math.PI * 2
          const radiusVariation = blob.radius + Math.sin(Date.now() * 0.001 + index + i) * 15
          const x = blob.x + Math.cos(angle) * radiusVariation
          const y = blob.y + Math.sin(angle) * radiusVariation

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.fill()

        ctx.filter = "none"
      })

      // Add connecting lines between blobs
      ctx.strokeStyle = "rgba(59, 130, 246, 0.08)"
      ctx.lineWidth = 2
      ctx.filter = "blur(1px)"

      for (let i = 0; i < blobs.length; i++) {
        for (let j = i + 1; j < blobs.length; j++) {
          const dx = blobs[i].x - blobs[j].x
          const dy = blobs[i].y - blobs[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 300) {
            const opacity = (300 - distance) / 300
            ctx.globalAlpha = opacity * 0.3
            ctx.beginPath()
            ctx.moveTo(blobs[i].x, blobs[i].y)
            ctx.lineTo(blobs[j].x, blobs[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      ctx.filter = "none"

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "multiply" }} />
  )
}
