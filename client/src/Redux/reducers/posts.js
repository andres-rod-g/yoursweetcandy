export default function (posts = [], action) {
    switch (action.type) {
        case 'FETCH':
            return [...action.payload];
        case 'POST':
            return [...posts, action.payload]
        default:
            return posts
    }
}