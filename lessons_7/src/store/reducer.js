

const initialState = {
    twits: [
        {
            id: 1,
            title: 'twit first post'
        },
        {
            id: 2,
            title: 'twit second post'
        },
        {
            id: 3,
            title: 'twit third post'
        },
        {
            id: 4,
            title: 'twit four post'
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'delete':
            return {
                ...state,
                twits: state.twits.filter((item) => item.id !== action.payload)
            }

        default:
            return state
    }
}