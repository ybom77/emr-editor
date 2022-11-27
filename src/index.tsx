
import "./index.css"
/* @refresh reload */
import { render } from 'solid-js/web';
import Main from "./views/main/src/App";
import type { Component } from 'solid-js';

const App: Component = () => <Main></Main>

render(() => <App />, document.getElementById('root') as HTMLElement);
