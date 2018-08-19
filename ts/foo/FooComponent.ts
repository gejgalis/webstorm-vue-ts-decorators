import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class FooComponent extends Vue {

    @Prop()
    commonProp:FooModel

    doFooAction() {
    }
}

class FooModel {

    fooChild: FooModel

    children: FooModel[]

}