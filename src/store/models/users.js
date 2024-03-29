
const data = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        address: "John Address",
        phone: "05898147584",
    },
    {
        id: 2,
        name: "David",
        email: "david@gmail.com",
        address: "David Address",
        phone: "05898468434",
    },
    {
        id: 3,
        name: "James",
        email: "james@gmail.com",
        address: "James Address",
        phone: "125184387621",
    },
    {
        id: 4,
        name: "Sam",
        email: "sam@gmail.com",
        address: "Sam Address",
        phone: "0935530774",
    },
];

export const users = {
    state: {
        listUser: data,
        count: data.length,
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        setListUser(state, listUser) {
            return {
                ...state,
                listUser,
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