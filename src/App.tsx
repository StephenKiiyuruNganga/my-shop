import { AddShoppingCart } from "@mui/icons-material"
import { Badge, Drawer, Grid, LinearProgress } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { Wrapper } from "./App.styles"

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
  const { data, isLoading, error } = useQuery<Product[]>(
    ["products"],
    getProducts
  )

  // * for debug purposes
  useEffect(() => {
    console.log(data)
  }, [data])

  // TODO: add logic later
  const getTotalItems = () => {}
  const addToCartHandler = () => {}
  const RemoveFromCartHandler = () => {}

  if (isLoading) return <LinearProgress />

  if (error) return <div>Something went wrong...</div>

  return <div className="App">Start</div>
}

export default App
