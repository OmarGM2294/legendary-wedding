/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react'

import Game from './Game'
import GameContext from './helpers/GameContext'

const GameModal = () => {
  const { showGame, setShowGame } = useContext(GameContext)

  return (
    <>
      {showGame ? (
        <>
          <div className="hidden md:flex justify-center items-center  overflow-x-hidden w-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-8 bg-[black]/50">
            <div className="relative h-auto my-6 mx-auto max-w-5xl w-auto bg-[white]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <button
                    className="p-1 ml-auto text-black float-right text-3xl leading-none font-semibold mb-5"
                    onClick={() => setShowGame(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                  <Game />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default GameModal
