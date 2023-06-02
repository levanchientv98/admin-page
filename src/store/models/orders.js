
const data = [
    {
        id: 1,
        name: "John",
        status: "success",
    },
    {
        id: 2,
        name: "Marl",
        status: "No success",
    },
    {
        id: 3,
        name: "Long",
        status: "success",
    },
    {
        id: 4,
        name: "Son",
        status: "No success",
    },
    {
        id: 5,
        name: "John",
        status: "success",
    },
    {
        id: 6,
        name: "Marl",
        status: "No success",
    },
    {
        id: 7,
        name: "Long",
        status: "success",
    },
    {
        id: 8,
        name: "Son",
        status: "No success",
    },
];

export const orders = {
    state: {
        listOrder: data,
        count: data.length,
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        setListOrder(state, listOrder) {
            return {
                ...state,
                listOrder,
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
    }),
    selectors: (slice, createSelector) => ({
        selectCount() {
            return slice(state => state.count);
        },
    }),
};