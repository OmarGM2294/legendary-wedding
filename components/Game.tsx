import React, { FC, useEffect, useRef, useState } from 'react'

import styles from '../styles/Game.module.css'

const Game: FC = () => {
  const [score, setScore] = useState(0)
  const [counter, setCounter] = useState(0)
  const [start, setStart] = useState(false)

  const character = useRef<HTMLDivElement>(null)
  const block = useRef<HTMLDivElement>(null)

  const jump = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      const characterElement = character.current
      if (
        characterElement &&
        !characterElement.classList.contains(styles.animate)
      ) {
        characterElement.classList.add(styles.animate)
        setTimeout(() => {
          characterElement.classList.remove(styles.animate)
        }, 500)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', jump)
    const interval = setInterval(() => {
      const characterElement = character.current
      const blockElement = block.current
      if (characterElement && blockElement) {
        const characterTop = parseInt(
          window.getComputedStyle(characterElement).getPropertyValue('top')
        )
        const blockLeft = parseInt(
          window.getComputedStyle(blockElement).getPropertyValue('left')
        )
        if (blockLeft < 50 && blockLeft > -50 && characterTop >= 110) {
          blockElement.style.animation = 'none'
          alert('Game Over. score: ' + Math.floor(counter / 100))
          setCounter(0)
          setStart(false)
          setScore(0)
          blockElement.style.animation = 'block 1s infinite linear'
        } else {
          setCounter(counter + 1)
          setScore(Math.floor(counter / 100))
        }
      }
    }, 10)

    return () => {
      window.removeEventListener('keydown', jump)
      clearInterval(interval)
    }
  }, [start, counter])

  return (
    <>
      <p className="text-center mb-4">
        Ayuda a KIARA, evita los pasteles de matrimonio.
        <br />
        Oprime espacio para saltar
      </p>
      {!start ? (
        <div className="flex justify-center p-7">
          <button
            onClick={() => setStart(true)}
            className="bg-secondary text-[white] rounded p-3 hover:bg-primary"
          >
            Comenzar
          </button>
        </div>
      ) : (
        <>
          <div className={styles.game}>
            <div
              id="character"
              className={styles.character}
              ref={character}
            ></div>
            <div id="block" className={styles.block} ref={block}></div>
          </div>
          <p className={`${styles.score} mt-3`}>
            Score: <span id="scoreSpan">{score}</span>
          </p>
        </>
      )}
    </>
  )
}

export default Game
