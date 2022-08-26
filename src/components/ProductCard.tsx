import { Product } from "../App"
import { Wrapper } from "./ProductCard.style"

interface ProductCardProps {
  product: Product
  onAddToCart: (clickedProduct: Product) => void
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Wrapper>
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h3>$ {product.price}</h3>
      </div>
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </Wrapper>
  )
}

export default ProductCard
