import {

    APP_DEMATE_LINK_REQUEST,
    APP_DEMATE_LINK_SUCESS,
    APP_DEMATE_LINK_FAIL,

} from '../constants'

const initialState = {
    error: undefined,
    loading: false,
    data: undefined
}

export default (state = initialState, action) => {

    switch (action.type) {
        case APP_DEMATE_LINK_REQUEST:
            return { ...state, error: undefined, loading: true }

        case APP_DEMATE_LINK_FAIL:
            return { ...state, error: action.error, loading: false }

        case APP_DEMATE_LINK_SUCESS:
            return {
                ...state,
                loading: false,
                data: { ...action.payload }
            }


        default: return state
    }
}