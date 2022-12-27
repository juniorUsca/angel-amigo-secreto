'use client'

import { Wheel } from 'react-custom-roulette'
import JSConfetti from 'js-confetti'
import { useEffect, useRef, useState } from 'react'

const colors = [
  { backgroundColor: '#94a3b8', textColor: '#323232' },
  { backgroundColor: '#a8a29e', textColor: '#323232' },
  { backgroundColor: '#f87171', textColor: '#323232' },
  { backgroundColor: '#fb923c', textColor: '#323232' },
  { backgroundColor: '#fbbf24', textColor: '#323232' },
  { backgroundColor: '#facc15', textColor: '#323232' },
  { backgroundColor: '#a3e635', textColor: '#323232' },
  { backgroundColor: '#4ade80', textColor: '#323232' },
  { backgroundColor: '#34d399', textColor: '#323232' },
  { backgroundColor: '#2dd4bf', textColor: '#323232' },
  { backgroundColor: '#22d3ee', textColor: '#323232' },
  { backgroundColor: '#38bdf8', textColor: '#323232' },
  { backgroundColor: '#60a5fa', textColor: '#323232' },
  { backgroundColor: '#818cf8', textColor: '#323232' },
  { backgroundColor: '#a78bfa', textColor: '#323232' },
  { backgroundColor: '#c084fc', textColor: '#323232' },
  { backgroundColor: '#e879f9', textColor: '#323232' },
  { backgroundColor: '#f472b6', textColor: '#323232' },
  { backgroundColor: '#fb7185', textColor: '#323232' },
]

export default function Result ({ participantes, angel }) {
  const jsConfetti = useRef()
  const [showAngel, setShowAngel] = useState(false)
  const data = participantes.map(participante => ({
    option: participante.nombre,
    style: colors[Math.floor(Math.random() * colors.length)],
  }))

  if (!angel) return null

  useEffect(() => {
    jsConfetti.current = new JSConfetti()
  }, [])

  const position = data.findIndex(participante => participante.option === angel.nombre)

  const handleAngelSelected = async () => {
    setShowAngel(true)
    await jsConfetti.current.addConfetti()
    await jsConfetti.current.addConfetti({
      confettiRadius: 12,
      confettiNumber: 100,
    })
    await jsConfetti.current.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    })
    await jsConfetti.current.addConfetti({
      emojis: ['⚡️', '💥', '✨', '💫'],
    })
    await jsConfetti.current.addConfetti({
      emojis: ['🦄'],
      confettiRadius: 100,
      confettiNumber: 30,
    })
    await jsConfetti.current.addConfetti({
      confettiColors: ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'],
      confettiRadius: 10,
      confettiNumber: 150,
    })
    await jsConfetti.current.addConfetti({
      confettiColors: ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4'],
      confettiRadius: 6,
      confettiNumber: 300,
    })
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="p-4">
        <div className="mx-auto mt-8" style={{ width: '80vw', maxWidth: '445px' }}>
          <Wheel
            mustStartSpinning
            prizeNumber={position}
            data={data}
            radiusLineColor="#e5e7eb"
            outerBorderColor="#e5e7eb"
            spinDuration={1}
            radiusLineWidth={2}
            fontSize={20}
            onStopSpinning={handleAngelSelected}
          />
        </div>
        {showAngel && (
          <>
            <div className="block mt-12 md:flex text-center justify-center">
              <div className="mr-8">
                <img
                  className="w-48 h-48 rounded-xl object-cover block mx-auto"
                  src={angel.foto}
                  alt={angel.nombre}
                />
              </div>
              <div className="mt-4">
                <h1 className="text-2xl mb-4">
                  Vas a ser ángel de:
                  {' '}
                  <span className="text-3xl font-bold text-indigo-400">{angel.nombre}</span>
                  {' '}
                  👀
                </h1>
                <p className="font-medium">
                  A
                  {' '}
                  {angel.nombre}
                  {' '}
                  le gustaría:
                </p>
                <p>
                  <span className="font-medium">Primera opción de regalo 🎁: </span>
                  {angel.regalo1}
                </p>
                <p>
                  <span className="font-medium">Segunda opción de regalo 🎁: </span>
                  {angel.regalo2}
                </p>
                <p>
                  <span className="font-medium">Tercera opción de regalo 🎁: </span>
                  {angel.regalo3}
                </p>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-4">
              <span className="font-medium">
                😉 Perfil de
                {' '}
                {angel.nombre}
                :
              </span>
            </p>
            <p className="text-center text-gray-700 whitespace-pre-line">
              {angel.perfil}
            </p>
          </>
        )}
      </div>
    </div>
  )
}
