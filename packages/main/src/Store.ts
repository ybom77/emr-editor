import { createStore as s } from "solid-js/store";
import { useRoot } from "./Context";

const createStore = <P extends object,>(p: P) => {
    const root = useRoot();

    return s(p)
}

export {
    createStore
}