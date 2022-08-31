import { Button } from "@mui/material"
import { Product } from "../App"
import { Wrapper } from "./CartItem.styles"

interface Props {
  item: Product
  onAdd: (clickedItem: Product) => void
  onRemove: (id: number) => void
}

const CartItem = ({ item, onAdd, onRemove }: Props) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => onRemove(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => onAdd(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  )
}

export default CartItem
