import { BUY_ICECREAM } from "./iceCreamTypes"

export const buyIceCream = (qty = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: qty
    }
}