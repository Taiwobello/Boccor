import { FILTER_PORTFOLIO_ITEM } from "./portfortfolioTypes";
import {portfolioData} from "../../portfolioData"

const initialState = {
    portfolioData,
    filterType: "all"
}

const portfolioReducer = (state = initialState, action) => {
    switch(action.type) {
        case FILTER_PORTFOLIO_ITEM:
            return {
                ...state,
                filterType: action.payload
            }
        default:
            return state
    }
}

export default portfolioReducer;