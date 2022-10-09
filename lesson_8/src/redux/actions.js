export const loadingUsers = () => ({
    type: 'getUsers'
})

export const errorUsers = (e) => ({
    type: 'error',
    payload: e
})