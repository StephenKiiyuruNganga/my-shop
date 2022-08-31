import { Product } from "../App"
import { Wrapper } from "./Cart.styles"
import CartItem from "./CartItem"

interface CartProps {
  cartItems: Product[]
  onAdd: (clickedItem: Product) => void
  onRemove: (id: number) => void
}

const Cart = ({ cartItems, onAdd, onRemove }: CartProps) => {
  const calculateTotalCost = (items: Product[]) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0)

  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map((product) => (
        <CartItem
          key={product.id}
          item={product}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
      <h2>Total: ${calculateTotalCost(cartItems).toFixed(2)}</h2>
    </Wrapper>
  )
}

export default Cart
