'use client'

import React, { useEffect, useState, useRef } from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from "@heroui/react"


// Collection of mathematical expressions with friendly names
const expressions = [
    { name: 'Square Rotation', value: 'sin(x*cos(t) - y*sin(t))*8 * (1-max(abs(x), abs(y)))' },
    { name: 'Psychedelic Chessboard', value: 'sin(round(x*8)*round(y*8) + t)*cos(r*4)' },
    { name: 'Light Beam Interweaving', value: 'sin(th + t + r*tan(t))' },
    { name: 'Quantum Vortex', value: 'sin(r*8 - t) * exp(-r*2) * cos(th/2) + sin(th*4 + t)' },
    { name: 'Snake', value: 'sin(hypot(x-sin(t),y-cos(t))*8) * exp(-hypot(x-sin(t*0.5),y-cos(t*0.5))*1.5) + sin(hypot(x-sin(t*0.7+2),y-cos(t*0.7+2))*8) * exp(-hypot(x-sin(t*0.3+2),y-cos(t*0.3+2))*1.5)' },
    { name: 'Light and Shadow Snake', value: '(sin(hypot(x-sin(t),y-cos(t))*8) * exp(-hypot(x-sin(t),y-cos(t))*1.8) + sin(hypot(x-sin(t-0.2),y-cos(t-0.2))*8) * exp(-hypot(x-sin(t-0.2),y-cos(t-0.2))*1.8)) * (1-r*0.7) * (0.8 + sin(t*3)*0.2)' },
    { name: 'Snake 2.0', value: 'max(sin(hypot(x-sin(t),y-cos(t))*8) * exp(-hypot(x-sin(t),y-cos(t))), sin(hypot(x-sin(t-0.5),y-cos(t-0.5))*8) * exp(-hypot(x-sin(t-0.5),y-cos(t-0.5))*1.2)) * (1-r*0.5)' },
    { name: 'Space-Time Tunnel', value: 'sin(hypot(x,y)*8 - t) * (1-r) + cos(atan2(y,x)*4 + t)' },
    { name: 'Dimension Gate', value: 'sin(sqrt(abs(x*y))*12 + t) * cos(atan2(y,x)*6 - t)' },
    { name: 'Fractal Light', value: 'sin(x*10+t) * cos(y*10-t) * noise(r*3) + sin(th*6)' },
    { name: 'Hyperdimensional Jump', value: 'sin(r*15 - t*2) * cos(th*8 + noise(r+t)*5) * exp(-r)' },
    { name: 'Light Rhythm', value: 'sin(th*2 + r*sin(t*2)) * exp(-r*1.5) * cos(t)' },
    { name: 'Quantum Resonance', value: 'sin(r*20 + noise(th+t)) * exp(-r*2) * cos(th*8)' },
    { name: 'Space-Time Ripples', value: 'sin(hypot(x,y)*10) * cos(atan2(y,x)*6 + t) * (1-r)' },
    { name: 'Dimensional Fold', value: 'sin(x*y*6 + t) * cos(r*10 - t) * noise(th+t)' },
    { name: 'Light Dance', value: 'sin(th*4 + t) * (1-r) * cos(r*6 - t) + sin(r*8)' },
    { name: 'Fractal Nebula', value: 'sin(r*15 + noise(th*2+t)*8) * cos(th*12 + sin(t))' },
    { name: 'Hyperspace Channel', value: 'sin(hypot(x,y)*12-t*2) * cos(atan2(y,x)*8+t) * noise(r)' },
    { name: 'Quantum Entanglement', value: 'sin(x*12 + noise(t)) * cos(y*12 + noise(t+1)) * sin(r*6)' },
    { name: 'Space-Time Tapestry', value: 'sin(r*20 + th*4 - t) * cos(th*10 + r*sin(t)) * exp(-r)' }
]

export function VortexPage() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const getContext = () => canvasRef.current?.getContext('2d')
    const [highResolution, setHighResolution] = useState(false)
    const isHoveringRef = useRef(false)
    const isDarkMode = true // Default to dark mode

    // Use default expression
    const [currentExpression, setCurrentExpression] = useState(expressions[0].value)
    const [selectedPattern, setSelectedPattern] = useState(expressions[0].name)

    // Define color themes
    const colorThemes = [
        { dark: 220, light: 160 },  // Cyan-Green
        { dark: 280, light: 320 },  // Purple
        { dark: 30, light: 50 },    // Orange
        { dark: 180, light: 200 },  // Cyan
        { dark: 340, light: 0 },    // Red
        { dark: 60, light: 80 },    // Yellow
        { dark: 260, light: 280 },  // Purple-Blue
        { dark: 120, light: 140 },  // Green
        { dark: 300, light: 320 },  // Pink
        { dark: 200, light: 220 },  // Blue
    ]

    // Current color theme
    const [currentColorTheme, setCurrentColorTheme] = useState(colorThemes[0])

    // Handle pattern change
    const handlePatternChange = (key: React.Key) => {
        const selected = expressions.find(exp => exp.name === key.toString())
        if (selected) {
            setSelectedPattern(selected.name)
            setCurrentExpression(selected.value)
        }
    }

    // Handle click event
    const handleClick = () => {
        if (!isHoveringRef.current) return
        const currentIndex = expressions.findIndex(exp => exp.value === currentExpression)
        const nextIndex = currentIndex === -1 || currentIndex === expressions.length - 1 ? 0 : currentIndex + 1
        const nextExpression = expressions[nextIndex]
        setSelectedPattern(nextExpression.name)
        setCurrentExpression(nextExpression.value)

        // Randomly select new color theme
        const newColorTheme = colorThemes[Math.floor(Math.random() * colorThemes.length)]
        setCurrentColorTheme(newColorTheme)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = e.clientX
        const y = e.clientY
        // Calculate hover area offset based on screen size (e.g., 25% of the smaller dimension)
        const hoverOffset = Math.min(window.innerWidth, window.innerHeight) * 0.25;

        const hovering = (
            x > window.innerWidth / 2 - hoverOffset &&
            x < window.innerWidth / 2 + hoverOffset &&
            y > window.innerHeight / 2 - hoverOffset &&
            y < window.innerHeight / 2 + hoverOffset
        )
        isHoveringRef.current = hovering
    }

    const handleMouseLeave = () => {
        isHoveringRef.current = false
    }

    // Handle keyboard events with useEffect
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault()
                setHighResolution(prev => !prev)
            }
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [])

    useEffect(() => {
        const ctx = getContext()
        if (!ctx) return

        // Set canvas size
        const updateCanvasSize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth
                canvasRef.current.height = window.innerHeight
            }
        }
        
        // Initial size setup
        updateCanvasSize()
        
        // Listen for window resize
        window.addEventListener('resize', updateCanvasSize)

        let frameId: number
        const startTime = Date.now()
        const size = 400

        // Define center coordinates
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2

        // Extended function definition
        type ExtendedFunction = (params: {
            t: number    // time
            r: number    // radius
            th: number   // angle
            x: number    // cartesian coordinate x
            y: number    // cartesian coordinate y
            noise: (v: number) => number  // perlin noise
            exp: (v: number) => number    // exponential function
            hypot: (x: number, y: number) => number  // euclidean distance
        }) => number

        // Perlin noise implementation
        const noise = (() => {
            const permutation = new Array(256).fill(0)
                .map((_, i) => i)
                .sort(() => Math.random() - 0.5);

            const p = new Array(512);
            for (let i = 0; i < 256; i++) {
                p[i] = p[i + 256] = permutation[i];
            }

            const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
            const lerp = (t: number, a: number, b: number) => a + t * (b - a);
            const grad = (hash: number, x: number) => {
                const h = hash & 15;
                const grad = 1 + (h & 7);
                return ((h & 8) === 0 ? grad : -grad) * x;
            };

            return function (v: number) {
                v = v * 2.0;
                const X = Math.floor(v) & 255;
                const x = v - Math.floor(v);
                const u = fade(x);
                const A = p[X] & 255;
                const B = p[X + 1] & 255;
                const g1 = grad(p[A], x);
                const g2 = grad(p[B], x - 1);
                return lerp(u, g1, g2);
            };
        })();

        // Use current expression
        const expression = currentExpression
        let fn: ExtendedFunction
        try {
            fn = new Function('params', `
                const {sin, cos, tan, abs, sqrt, exp, hypot, atan2, max, min, round, ceil, floor, random} = Math;
                const {t, r, th, x, y, noise} = params;
                return (${expression});
            `) as ExtendedFunction

            fn({ t: 0, r: 0, th: 0, x: 0, y: 0, noise, exp: Math.exp, hypot: Math.hypot })
        } catch {
            console.error('Expression compilation error')
            fn = () => 0
        }

        const draw = () => {
            const t = (Date.now() - startTime) / 1000
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

            const baseHue = isDarkMode ? currentColorTheme.dark : currentColorTheme.light

            const resolution = highResolution ? 2 : 4
            for (let px = -size / 2; px < size / 2; px += resolution) {
                for (let py = -size / 2; py < size / 2; py += resolution) {
                    const x = px / (size / 2)
                    const y = py / (size / 2)
                    const r = Math.sqrt(x * x + y * y)
                    const th = Math.atan2(y, x)

                    let value: number
                    try {
                        value = fn({
                            t,
                            r,
                            th,
                            x,
                            y,
                            noise,
                            exp: Math.exp,
                            hypot: Math.hypot
                        })
                        value = Math.max(-1, Math.min(1, value))
                    } catch {
                        value = 0
                    }

                    const intensity = Math.abs(value)
                    const hueOffset = r * 30
                    const hue = (baseHue + t * 10 + hueOffset) % 360
                    const lightness = isDarkMode ? 45 + intensity * 35 : 35 + intensity * 30
                    const saturation = isDarkMode ? 70 + intensity * 20 : 60 + intensity * 25
                    const alpha = isDarkMode ? intensity * 0.7 : intensity * 0.8

                    ctx.fillStyle = value > 0
                        ? `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
                        : `hsla(${(hue + 180) % 360}, ${saturation}%, ${lightness}%, ${alpha})`

                    ctx.fillRect(
                        centerX + px,
                        centerY + py,
                        resolution,
                        resolution
                    )
                }
            }

            frameId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            cancelAnimationFrame(frameId)
            window.removeEventListener('resize', updateCanvasSize)
        }
    }, [getContext, canvasRef, currentExpression, currentColorTheme, highResolution])

    return (
        <div className="relative w-full h-full bg-black">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                onClick={handleClick}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            />
            <div className="absolute left-1/2 -translate-x-1/2 text-base font-mono text-[#666666] text-center" style={{ bottom: '20px' }}>
                <div className="flex flex-col items-center gap-2">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button color="primary" variant="shadow" className="capitalize">
                                {selectedPattern}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                            aria-label="Pattern Selection" 
                            color="primary" 
                            variant="shadow"
                            onAction={handlePatternChange}
                        >
                            {expressions.map((exp) => (
                                <DropdownItem 
                                    key={exp.name} 
                                    className="cursor-pointer hover:cursor-pointer"
                                >
                                    {exp.name}
                                </DropdownItem> 
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <div className="text-sm text-[#666666]">
                        Click to change pattern • Space to toggle resolution
                    </div>
                </div>
            </div>
        </div>
    )
} 