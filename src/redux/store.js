import {createStore} from "redux"
import portfolioReducer from "./portfolio/portfolioReducer"

const store = createStore(portfolioReducer)
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store