import { FILTER_PORTFOLIO_ITEM } from "./portfortfolioTypes"

export const toggleFilterType = (value) => {
    return {
        type: FILTER_PORTFOLIO_ITEM,
        payload: value
    }
}