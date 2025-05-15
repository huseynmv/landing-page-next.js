
import { fetchFromApi } from './fetcher'

export const getSlides = () => fetchFromApi('/big-sliders')
export const getInfoCardsData = () => fetchFromApi('/features')
export const getProducts = () => fetchFromApi('/special-offer')
