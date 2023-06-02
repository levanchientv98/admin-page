
export const products = {
    state: {
        listProduct: [],
        count: 0,
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        setListProduct(state, listProduct) {
            return {
                ...state,
                listProduct,
            };
        },
        setCount(state, count) {
            return {
                ...state,
                count,
            };
        },
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        // async incrementAsync(payload, rootState) {
        //   await new Promise((resolve) => setTimeout(resolve, 1000));
        //   dispatch.count.increment(payload);
        // },
        async fetchProducts() {
            const data = await fetch('https://dummyjson.com/products')
                .then(response => response.json());
            this.setListProduct(data.products);
        }

    }),
    selectors: (slice, createSelector) => ({
        selectCount() {
            return slice(state => state.count);
        },
    }),
};