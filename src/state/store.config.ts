import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./stores/store.reducer";
import thunkMiddleware from "redux-thunk";
import { IStore } from "./stores/store.interface";
import { Store, applyMiddleware, createStore, Action } from "redux";

/**
 * Build the app store.
 */
export default function configureStore(): Store<IStore> {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const initialState: IStore = {
        leaderboards: {},
        game: { state: "ended" },
        question: {}
    };

    const store: Store<IStore> = createStore<IStore, Action<any>, any, any>(reducers, initialState, composeWithDevTools(middleWareEnhancer)) as Store<IStore>;

    return store;
}
