import { createSlice } from "@reduxjs/toolkit";

const loadWishListFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("wishList");
    return data
      ? JSON.parse(data)
      : {
          count: 0,
          items: [],
        };
  } catch (error) {
    console.error("Error loading wishlist from localStorage", error);
    return {
      count: 0,
      items: [],
    };
  }
};
/*
  STEP 2: Save cart items to localStorage
*/

const saveWishListToLocalStorage = (state) => {
  try {
    localStorage.setItem("wishList", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving wishList to localStorage", error);
  }
};

  // Initial state (restored from localStorage)
  const initialState = loadWishListFromLocalStorage();

/*
  STEP 3: Create cart slice
*/

const wishListSlice = createSlice({
  name: "wishList",
  initialState,

 
  reducers: {
    /*
      ADD TO CART
      - action.payload → full product object from mockProducts
      - Uses _id to avoid duplicates
    */
    addToWishList: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item._id === product._id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      state.count += 1;
      saveWishListToLocalStorage(state);
    },

    /*
      REMOVE FROM CART (entire product)
    */
        removeFromWishList: (state, action) => {
            const productId = action.payload;

            const existingItem = state.items.find(
                (item) => item._id === productId
            );

            if (existingItem) {
                state.count -= existingItem.quantity;
                state.items = state.items.filter(
                (item) => item._id !== productId
                );
            }

            if (state.count < 0) state.count = 0;
            saveWishListToLocalStorage(state);
            },


      /*
      INCREASE QUANTITY (+ button)
    */
       increaseQuantity: (state, action) => {
      const productId = action.payload;

      const item = state.items.find(
        (item) => item._id === productId
      );

      if (item) {
        item.quantity += 1;
        state.count += 1;
        saveWishListToLocalStorage(state);
      }
    },

      /*
      DECREASE QUANTITY (- button)
    */
    decreaseQuantity: (state, action) => {
      const productId = action.payload;

      const item = state.items.find(
        (item) => item._id === productId
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
        state.count -= 1;
      } else {
        // remove item if quantity becomes 0
        state.items = state.items.filter(
          (i) => i._id !== productId
        );
        state.count -= 1;
      }

      if (state.count < 0) state.count = 0;
      saveWishListToLocalStorage(state);
    },



     /*
      CLEAR CART
    */
    clearWishList: (state) => {
      state.count = 0;
      state.items = [];
      saveWishListToLocalStorage(state);
    },
  },
})

export const {
    addToWishList,
    removeFromWishList,
    increaseQuantity,
    decreaseQuantity,
    clearWishList
} = wishListSlice.actions;

export default wishListSlice.reducer;