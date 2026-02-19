import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "pagalworlid_cart";

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (_) {}
  return [];
}

function saveCart(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (_) {}
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);

  const addToCart = useCallback((productId, quantity = 1) => {
    const id = Number(productId);
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      let next;
      if (existing) {
        next = prev.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        next = [...prev, { id, quantity }];
      }
      saveCart(next);
      return next;
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setItems((prev) => {
      const next = prev.filter((i) => i.id !== Number(productId));
      saveCart(next);
      return next;
    });
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    const qty = Math.max(0, Number(quantity));
    setItems((prev) => {
      if (qty === 0) {
        const next = prev.filter((i) => i.id !== Number(productId));
        saveCart(next);
        return next;
      }
      const next = prev.map((i) =>
        i.id === Number(productId) ? { ...i, quantity: qty } : i
      );
      saveCart(next);
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    saveCart([]);
  }, []);

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
