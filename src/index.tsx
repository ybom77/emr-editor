
import "./index.css"
/* @refresh reload */
import { render } from 'solid-js/web';
import Main from "@emreditor/main";
import Cursor from "@emreditor/cursor";

import { Component, JSX, onMount } from 'solid-js';

const plugins = { Cursor }
const components = {
    // "v-text": Text
}

type Instance = {
    $el?: HTMLElement | JSX.Element
}

type DefineComponent = {
    props: Record<string, any>
    setup: (props: DefineComponent["props"], instance: Instance) => JSX.Element
}


const index: Component<{}> = (props) => {
    return <div></div>;
};

const defineComponent = (options: DefineComponent): Component<{}> => {
    const setup = options.setup
    const props = options.props
    debugger
    return () => {
        const instance: Instance = {};
        const Comp = setup(props, instance)
        instance.$el = Comp
        // console.log(Comp);
        return Comp
    }
}

const Text = defineComponent({
    props: {
        name: String
    },
    setup(props, instance) {
        // instance.$el
        return <div>Text</div>
    },
})


const App: Component = () => <Text />
render(() => <App />, document.getElementById('root') as HTMLElement);
