
import { Component, For, JSXElement, JSX, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import type { Context } from "solid-js";
import { Editor } from "./App";

const EditorContext = createContext<Editor>();

export const EditorProvider: Component<{ children: JSX.Element, store: Editor }> = (props) => {
    const [state, setState] = createStore(props.store);
    return <EditorContext.Provider value={state}>{props.children}</EditorContext.Provider>
}

export const useRoot = () => useContext(EditorContext);