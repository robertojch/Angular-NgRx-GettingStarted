import { User } from '../user';
import * as fromRoot from '../../state/app.state';
import { _createFeatureStore } from '@ngrx/store/src/store_module';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    users: UserState;
}
export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

const initialState: UserState = {
    maskUserName: true,
    currentUser: null
}

const getUserFeatureState = createFeatureSelector<UserState>('users');
export const getMaskUserName = createSelector(getUserFeatureState, state => state.maskUserName);
export const getCurerntUser = createSelector(getUserFeatureState, state => state.currentUser);


export function reducer(state: UserState = initialState, action): UserState {
    switch (action.type) {
        case 'TOGGLE_MASKNAME':
            console.log('existing state: ' + JSON.stringify(state));
            console.log('payload ' + action.payload);
            return {
                ...state,
                maskUserName: action.payload
            };
            break;

        default:
            break;
    }
}