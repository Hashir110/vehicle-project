import { useCart } from "@/context/CartContext";


export default function ViewCartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">View Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 border-b"
          >
            <div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
