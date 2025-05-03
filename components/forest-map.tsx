"use client"

import { useEffect, useRef } from "react"

export function ForestMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = 300

    // Draw forest map
    drawForestMap(ctx, canvas.width, canvas.height)

    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = 300
      drawForestMap(ctx, canvas.width, canvas.height)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const drawForestMap = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Background
    ctx.fillStyle = "#e9f5e9"
    ctx.fillRect(0, 0, width, height)

    // Draw terrain
    drawTerrain(ctx, width, height)

    // Draw forest areas
    drawForestAreas(ctx, width, height)

    // Draw rivers
    drawRivers(ctx, width, height)

    // Draw roads
    drawRoads(ctx, width, height)

    // Draw legend
    drawLegend(ctx, width, height)
  }

  const drawTerrain = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Draw some hills
    ctx.fillStyle = "#d8e8d8"
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const radius = 30 + Math.random() * 50

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const drawForestAreas = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Dense forest areas (dark green)
    ctx.fillStyle = "#2d6a4f"
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const radius = 20 + Math.random() * 40

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    // Medium density forest (medium green)
    ctx.fillStyle = "#40916c"
    for (let i = 0; i < 12; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const radius = 15 + Math.random() * 30

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    // Light forest (light green)
    ctx.fillStyle = "#74c69d"
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const radius = 10 + Math.random() * 25

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const drawRivers = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Draw a main river
    ctx.strokeStyle = "#a9d6e5"
    ctx.lineWidth = 4

    ctx.beginPath()
    ctx.moveTo(0, height * 0.7)
    ctx.bezierCurveTo(width * 0.2, height * 0.6, width * 0.6, height * 0.8, width, height * 0.5)
    ctx.stroke()

    // Draw a tributary
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(width * 0.5, height * 0.7)
    ctx.bezierCurveTo(width * 0.55, height * 0.5, width * 0.6, height * 0.4, width * 0.7, height * 0.2)
    ctx.stroke()
  }

  const drawRoads = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Draw main road
    ctx.strokeStyle = "#d9d9d9"
    ctx.lineWidth = 3

    ctx.beginPath()
    ctx.moveTo(0, height * 0.3)
    ctx.bezierCurveTo(width * 0.3, height * 0.4, width * 0.7, height * 0.3, width, height * 0.4)
    ctx.stroke()

    // Draw secondary road
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(width * 0.3, height * 0.4)
    ctx.bezierCurveTo(width * 0.35, height * 0.5, width * 0.4, height * 0.6, width * 0.5, height * 0.8)
    ctx.stroke()
  }

  const drawLegend = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const legendX = width - 120
    const legendY = 20

    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.fillRect(legendX - 10, legendY - 10, 110, 130)
    ctx.strokeStyle = "#666"
    ctx.strokeRect(legendX - 10, legendY - 10, 110, 130)

    // Title
    ctx.fillStyle = "#333"
    ctx.font = "12px Arial"
    ctx.fillText("Legend", legendX, legendY + 10)

    // Dense forest
    ctx.fillStyle = "#2d6a4f"
    ctx.fillRect(legendX, legendY + 20, 15, 15)
    ctx.fillStyle = "#333"
    ctx.fillText("Dense Forest", legendX + 25, legendY + 32)

    // Medium forest
    ctx.fillStyle = "#40916c"
    ctx.fillRect(legendX, legendY + 45, 15, 15)
    ctx.fillStyle = "#333"
    ctx.fillText("Medium Forest", legendX + 25, legendY + 57)

    // Light forest
    ctx.fillStyle = "#74c69d"
    ctx.fillRect(legendX, legendY + 70, 15, 15)
    ctx.fillStyle = "#333"
    ctx.fillText("Light Forest", legendX + 25, legendY + 82)

    // Rivers
    ctx.strokeStyle = "#a9d6e5"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(legendX, legendY + 95)
    ctx.lineTo(legendX + 15, legendY + 95)
    ctx.stroke()
    ctx.fillStyle = "#333"
    ctx.fillText("Rivers", legendX + 25, legendY + 100)
  }

  return (
    <div className="relative w-full h-[300px] rounded-md overflow-hidden border">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

