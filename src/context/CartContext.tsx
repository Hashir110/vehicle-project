"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from '@/context/stripe';

export type CartItem = {
  id: string;
  title: string;
  price: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isLoading: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    setIsLoading(false);
  }, []);

  // Save cart to localStorage on change (after loading)
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLoading]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isLoading , clearCart }}>
      <Elements stripe={stripePromise}>
      {children}
      </Elements>
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
