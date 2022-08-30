import { AddShoppingCart } from "@mui/icons-material"
import { Badge, Drawer, Grid, LinearProgress } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { StyledIconButton, Wrapper } from "./App.styles"
import Cart from "./components/Cart"
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
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<Product[]>([])

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
  const getTotalItems = (items: Product[]) => {
    return items.reduce(
      (previousCount: number, item) => previousCount + item.amount,
      0
    )
  }

  const addToCartHandler = (clickedItem: Product) => {
    console.log(clickedItem)
  }
  const removeFromCartHandler = () => {}

  if (isLoading) return <LinearProgress />

  if (error) return <div>Something went wrong...</div>

  return (
    <Wrapper>
      <Drawer
        anchor="right"
        open={cartIsOpen}
        onClose={() => setCartIsOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          onAdd={addToCartHandler}
          onRemove={removeFromCartHandler}
        />
      </Drawer>
      <StyledIconButton onClick={() => setCartIsOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledIconButton>
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
