type Product = {
  id: number
  name: string
  image: string
  rate: number
  reviewCount: number
  discount: number
  discounted_price: number
  price: number
  monthly_price: number
  perMonth: {
    month: number
    price: number
  }
}

type Section = {
  title: string
  products: Product[]
}

export type ProductProps = {
  data: Section[]
}