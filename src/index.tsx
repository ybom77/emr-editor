
import "./index.css"
/* @refresh reload */
import { render } from 'solid-js/web';
import Main from "@emreditor/main";
import Cursor from "@emreditor/cursor";
import Text from "@emrditor/text";

import type { Component } from 'solid-js';

const plugins = { Cursor }
const components = {
    "v-text": Text
}

const App: Component = () => <Main plugins={plugins} components={components}></Main>

render(() => <App />, document.getElementById('root') as HTMLElement);
