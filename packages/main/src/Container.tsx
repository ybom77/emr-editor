import { Component, JSX, onMount, children, createEffect, createUniqueId, getOwner } from "solid-js";
import { createStore } from "solid-js/store";

type ContainerProps = {
    children?: JSX.Element;
    key?: string
}

const Container: Component<ContainerProps> = (props) => {

    const resolved = children(() => props.children);

    createEffect(() => {
        let list = resolved.toArray();
        //@ts-ignore
        for (let child of list) child?.setAttribute?.("v-pid", createUniqueId());
    });

    return resolved();
};

const createElement = <S extends object,>(store: S, active: {}, Comp: (store: S) => JSX.Element) => {
    const [state, setState] = createStore(store);
    onMount(() => {
        debugger
    })
    const click = () => {
        debugger
    }
    return <Comp onClick={click} {...store}></Comp>

}


export {
    Container,
    createElement
}