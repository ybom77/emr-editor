import { Component, onMount, getOwner, createEffect } from "solid-js";

import { useRoot, createElement, createStore, Container } from "@emreditor/main";

export type Text = {
    key?: string
}

const Text: Component<Text> = (props) => {

    const [store, setStore] = createStore({
        value: "张三 222123",
        name: "张三"
    })

    return (
        <>
            <span class="v-text" {...props}>{store.value}</span>
        </>
    )
}

export default Text