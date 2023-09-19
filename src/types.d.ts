export interface Gifts {
    id: number
    title: string
    author: string
    image: string
    buy_url: string
    isOnSale: boolean
    releaseDate: string
    stock?: boolean
    price: string
    reserved: boolean
}