/* eslint-disable @next/next/no-img-element */
import { FC, useContext, useEffect, useState } from 'react'

import ZoomContext from '../helpers/ZoomContext'

const ImageModal: FC = () => {
  const [show, setShow] = useState(false)
  const { imageUrl, setImageUrl } = useContext(ZoomContext)

  const close = () => {
    setShow(false)
    setImageUrl('')
  }

  useEffect(() => {
    if (imageUrl) {
      setShow(true)
    }
  }, [imageUrl])

  return (
    <>
      {show && imageUrl ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden w-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-8 bg-[black]/50">
            <div className="relative h-auto my-6 mx-auto max-w-5xl w-screen bg-[white]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <button
                    className="p-1 ml-auto text-black float-right text-3xl leading-none font-semibold mb-5"
                    onClick={() => close()}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                  <img src={imageUrl} alt="Zoomed image" />
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

export default ImageModal
