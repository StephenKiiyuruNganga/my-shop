import { AddShoppingCart } from "@mui/icons-material"
import { Badge, Drawer, Grid, LinearProgress } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { Wrapper } from "./App.styles"
import ProductCard from "./components/ProductCard"

export interface Product {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

const getProducts = async (): Promise<Product[]> => {
  const data = await (await fetch("https://fakestoreapi.com/products")).json()
  return data
}

const App = () => {
  const {
    data: productsData,
    isLoading,
    error,
  } = useQuery<Product[]>(["products"], getProducts)

  // * for debug purposes
  useEffect(() => {
    console.log(productsData)
  }, [productsData])

  // TODO: add logic later
  const getTotalItems = () => {}
  const addToCartHandler = (clickedItem: Product) => {
    console.log(clickedItem)
  }
  const RemoveFromCartHandler = () => {}

  if (isLoading) return <LinearProgress />

  if (error) return <div>Something went wrong...</div>

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {productsData?.map((product) => (
          <Grid key={product.id} item xs={12} sm={4}>
            <ProductCard product={product} onAddToCart={addToCartHandler} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default App
