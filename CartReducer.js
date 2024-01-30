import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart", //slice ın adı
  initialState: {
    //başlangıç durumu - boş dizi
    cart: [],
  },
  reducers: {
    //slicedaki eylemlerin ve eylemler gerçekleştiğinde nasıl state değişimleri yapılacağı

    //sepete ürün ekleme
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItem;
    },
    //sepetteki ürünün miktarını artırır
    incrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      itemPresent.quantity++;
    },
    //sepetteki ürünün miktarını azaltır eğer 1 ise 0 yapar
    decrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent.quantity == 1) {
        itemPresent.quantity = 0;
        const removeItem = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeItem;
      } else {
        itemPresent.quantity--;
      }
    },
    //sepetteki tüm ürünleri kaldırır
    cleanCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  cleanCart,
} = CartSlice.actions;

export default CartSlice.reducer;
