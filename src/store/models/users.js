
const data = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        address: "John Address",
    },
    {
        id: 2,
        name: "David",
        email: "david@gmail.com",
        address: "David Address",
    },
    {
        id: 3,
        name: "James",
        email: "james@gmail.com",
        address: "James Address",
    },
    {
        id: 4,
        name: "Sam",
        email: "sam@gmail.com",
        address: "Sam Address",
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