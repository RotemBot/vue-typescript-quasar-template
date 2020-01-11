import Vue from 'vue'
import Component from 'vue-class-component'
import { createDecorator } from 'vue-class-component'
export { Watch, Prop } from 'vue-property-decorator'

const NoCache = createDecorator((options, key) => {
    // component options should be passed to the callback
    // and update for the options object affect the component
    // @ts-ignore
    options.computed[key].cache = false
})

abstract class BaseComponent extends Vue {

    constructor () {
        super()
    }
}

export { BaseComponent, Component, NoCache }
