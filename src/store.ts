import { Store } from 'pullstate'
import { UIStoreState } from "./types/store.type";

export const UIStore: Store<UIStoreState> = new Store({
    locale: null,
})
