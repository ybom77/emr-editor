import { useRoot } from "@emreditor/main";
import { Component, onCleanup } from "solid-js";

const App: Component = (props) => {

    const root = useRoot();

    console.log(root);

    //卸载对应事件
    onCleanup(() => {
        console.log(111);
    })

    return (
        <div class="v-cursor"></div>
    );
};

export default App