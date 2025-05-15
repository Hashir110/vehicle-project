// "use client";

// import { useCart } from "@/context/CartContext";
// import { X } from "lucide-react";
// import Link from "next/link";

// export default function ViewCartModal({ onClose }: { onClose: () => void }) {
//   const { cart, removeFromCart } = useCart();

//   return (
//     <div className="fixed inset-0 z-50">
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 " onClick={onClose} />

//       {/* Slide-in Cart */}
//       <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6 overflow-y-auto animate-slide-in">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold text-black">Your Cart</h2>
//           <button onClick={onClose}>
//             <X className="text-black hover:text-gray-600 hover:cursor-pointer" />
//           </button>
//         </div>

//         {/* Cart Items */}
//         {cart.length === 0 ? (
//           <p className="text-gray-500">Your cart is empty.</p>
//         ) : (
//           <ul className="space-y-4">
//             {cart.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center border-b pb-2"
//               >
//                 <div>
//                   <h3 className="font-semibold text-gray-700">{item.title}</h3>
//                   <p className="text-sm text-gray-500">{item.price}</p>
//                 </div>
//                 <button
//                   className="text-red-500 text-sm hover:underline hover:cursor-pointer"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Footer */}
//         <div className="mt-6">
//           {cart.length > 0 ? (
//             <Link
//               href="/billing-address"
//               className="block w-full text-center bg-red-600 hover:bg-red-700 text-black font-semibold py-2 rounded"
//             >
//               Checkout
//             </Link>
//           ) : (
//             <Link
//               href=""
//               className="block w-full text-center bg-gray-500  text-black font-semibold py-2 rounded cursor-not-allowed"
//             >
//               Checkout
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
