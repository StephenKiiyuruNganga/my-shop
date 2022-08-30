import { Product } from "../App"
import { Wrapper } from "./Cart.styles"
import CartItem from "./CartItem"

interface CartProps {
  cartItems: Product[]
  onAdd: (clickedItem: Product) => void
  onRemove: (id: number) => void
}

const Cart = ({ cartItems, onAdd, onRemove }: CartProps) => {
  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map((product) => (
        <CartItem key={product.id} />
      ))}
    </Wrapper>
  )
}

export default Cart
