import { FormatPrice } from '@/utils/FormatPrice';
import { createSlice } from '@reduxjs/toolkit';

const fetchFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Error fetching cart from localStorage:', error);
    return [];
  }
};

const storeInLocalStorage = (data) => {
  try {
    localStorage.setItem('cart', JSON.stringify(data));
  } catch (error) {
    console.error('Error storing cart in localStorage:', error);
  }
};

const initialState = {
  data: fetchFromLocalStorage(),
  totalItems: 0,
  totalAmount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const tempItem = state.data.find((item) => item.id === action.payload.id);
      if (tempItem) {
        const tempCart = state.data.map((item) => {
          if (item.id === action.payload.id) {
            let newQty = item.quantity + action.payload.quantity;
            let newTotalPrice = newQty * item.actual_price;

            return {
              ...item,
              quantity: newQty,
              totalPrice: FormatPrice(newTotalPrice)
            };
          } else {
            return item;
          }
        });
        state.data = tempCart;
        storeInLocalStorage(state.data);

        state.totalAmount = state.data.reduce((total, item) => {
          return total + item.actual_price * item.quantity;
        }, 0);
        state.totalAmount = FormatPrice(state.totalAmount)
      } else {
        state.data.push(action.payload);
        storeInLocalStorage(state.data);
        
        state.totalAmount = state.data.reduce((total, item) => {
          return total + item.actual_price * item.quantity;
        }, 0);
        state.totalAmount = FormatPrice(state.totalAmount)
      }
    },
    removeFromCart(state, action) {
      const tempCart = state.data.filter((item) => item.id !== action.payload);
      state.data = tempCart;
      storeInLocalStorage(state.data);
      
      state.totalAmount = state.data.reduce((total, item) => {
        return total + item.actual_price * item.quantity;
      }, 0)
      state.totalAmount = FormatPrice(state.totalAmount)
    },
    toggleCartQty(state, action) {
      const tempCart = state.data.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity;
          if (action.payload.type === 'INC') {
            tempQty++;
          }
          if (action.payload.type === 'DEC') {
            tempQty--;
            if (tempQty < 1) tempQty = 1;
          }

          let tempTotalPrice = tempQty * item.actual_price;

          return {
            ...item,
            quantity: tempQty,
            totalPrice: FormatPrice(tempTotalPrice)
          };
        } else {
          return item;
        }
      });
      state.data = tempCart;
      storeInLocalStorage(state.data);
    },
    getCartTotal(state) {
      state.totalItems = state.data.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.data.reduce((total, item) => {
        return total + item.actual_price * item.quantity;
      }, 0);

      state.totalAmount = FormatPrice(state.totalAmount);
    }
  }
})

export const { addToCart, removeFromCart, toggleCartQty, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
