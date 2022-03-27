export default function (coinc = [null], action) {
    switch (action.type) {
        case 'FIND':
            return action.payload
        case 'CLEAR_COINCIDENCES':
            return [null]
        default:
            return [null]
    }
}