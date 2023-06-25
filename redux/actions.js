export const INCREES_CART = 'INCREES_CART';

export const increesCart = items => dispatch => {
    dispatch({
        type: INCREES_CART,
        payload: items
    })
}