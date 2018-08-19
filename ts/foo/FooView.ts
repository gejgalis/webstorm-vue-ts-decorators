import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class FooView extends Vue {

    @Prop()
    commonProp:FooModel

    doFooAction() {
    }
}

class FooModel {

    fooChild: FooModel

    children: FooModel[]

}