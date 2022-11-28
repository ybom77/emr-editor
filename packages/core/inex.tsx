import { Component, JSX } from "solid-js"

type DefineComponent = {
    setup(props: any, { expose }: any): JSX.Element
}

export const defineComponent = (options: DefineComponent): JSX.Element => {
    const Comp = options.setup(props, context)
    debugger
    return Comp
}

const Text = defineComponent({
    setup(props, { expose }) {
        return <div>Text</div>
    },
})


export default Text