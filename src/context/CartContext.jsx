// client/src/context/CartContext.jsx
import React, { createContext, useReducer, useMemo } from 'react';

const CartContext = createContext();

const TAX_RATE = 0.12;

const initialState = {
  items: [],      // { id, name, price, quantity, image }
  subtotal: 0,
  taxes: 0,
  total: 0,
};

function reducer(state, action) {
  let items;
  switch (action.type) {
    case 'ADD_ITEM':
      const exists = state.items.find(i => i.id === action.payload.id);
      items = exists
        ? state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        : [...state.items, { ...action.payload, quantity: 1 }];
      break;
    case 'REMOVE_ITEM':
      items = state.items.filter(i => i.id !== action.payload);
      break;
    case 'UPDATE_QUANTITY':
      items = state.items.map(i =>
        i.id === action.payload.id
          ? { ...i, quantity: action.payload.quantity }
          : i
      );
      break;
    case 'CLEAR_CART':
      items = [];
      break;
    default:
      return state;
  }

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const taxes   = parseFloat((subtotal * TAX_RATE).toFixed(2));
  const total   = parseFloat((subtotal + taxes).toFixed(2));

  return { items, subtotal, taxes, total };
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem       = item => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem    = id   => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const updateQuantity = (id, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  const clearCart     = ()   => dispatch({ type: 'CLEAR_CART' });

  const value = useMemo(() => ({
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  }), [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
