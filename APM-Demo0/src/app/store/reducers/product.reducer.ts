import { ProductActionTypes, ProductActions } from '../actions/product.action';
import { ProductState, initialState } from '../state/product.state';



export function reducer(state: ProductState = initialState, action: ProductActions): ProductState {
    switch (action.type) {
        case ProductActionTypes.ToggleProductCode:
            return { ...state, showProductCode: action.payload };
        default:
            return state;
    }
}