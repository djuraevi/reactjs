const initialState = {
    chats: [
        {
            id: 1,
            name: 'Alex'
        },
        {
            id: 2,
            name: 'John'
        }
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state
    }
}