
import { Component, For, JSXElement, JSX, createContext, useContext, createComputed, createSignal, createUniqueId, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { nanoid } from 'nanoid';
import { EditorProvider, useRoot } from "./Context";

export interface EditorComponentProps {
    children?: Array<EditorComponent>;
}

export interface EditorComponent {
    name: string;
    key?: string;
    props?: EditorComponentProps
}

export interface Editor {
    plugins?: Record<string, Component>;
    components?: Record<string, Component<{ children?: JSX.Element, key?: string, [key: string]: any }>>;
    data?: EditorComponent[];
    [key: string]: any
}




const installPlugin = () => {

}

const installComponent = () => {

}

const renderComponent = (comp: EditorComponent) => {
    const name = comp.name;
    const props = comp.props;
    const key = comp.key || nanoid();
    const root = useRoot()
    const Comp = root?.components ? root.components[name] : undefined;
    let ref
    onMount(() => {
        console.log(ref);
    })
    return Comp ? (
        <Comp key={key} {...props} data-vid={createUniqueId()} ref={ref}>
            <For each={comp.props?.children || []} fallback={<div>No items</div>}>
                {(Comp, index) => renderComponent(Comp)}
            </For>
        </Comp>
    ) : ""
}


const Main: Component<Editor> = (props) => {
    const [plugins, setPlugins] = createSignal<Component[]>([])
    const [store, setStore] = createStore<Editor>({
        name: "cemo",
        plugins: props.plugins,
        components: props.components,
        data: props.data || [{ name: "v-text" }]
    })

    createComputed(() => {
        setPlugins(Object.keys(props.plugins || {}).reduce((p, c) => (p.push((props.plugins || {})[c]), p), [] as Component[]))
    })

    return (
        <EditorProvider store={store}>
            <div class="v-editor">
                <div class="v-editor-plugin">
                    <For each={plugins()} fallback={<div>No items</div>}>
                        {(Comp, index) => <Comp />}
                    </For>
                </div>
                <div class="v-editor-body">
                    <For each={store.data} fallback={<div>No items</div>}>
                        {(comp, index) => renderComponent(comp)}
                    </For>
                </div>
            </div>
        </EditorProvider>
    )
};

export {
    Main as default,
    installPlugin,
    installComponent,
    renderComponent
}