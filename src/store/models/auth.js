export const auth = {
    state: {
        username: "",
        password: "******",
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        setUsername(state, username) {
            return {
                ...state,
                username,
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
};