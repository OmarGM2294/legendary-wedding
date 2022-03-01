import { createContext } from 'react'

type ContextType = {
  imageUrl: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setImageUrl: any
}

const ImageContext: ContextType = {
  imageUrl: '',
  setImageUrl: () => null,
}

const ZoomContext = createContext(ImageContext)

export default ZoomContext
