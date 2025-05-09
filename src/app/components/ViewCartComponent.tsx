"use client";

import { useCart } from "@/context/CartContext";

export default function ViewCartModal({ onClose }: { onClose: () => void }) {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4 text-black">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-600">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
                <button
                  className="text-red-600 text-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Close
          </button>
          <a
            href="/checkout"
            className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 text-black font-semibold"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
