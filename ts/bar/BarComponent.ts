import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class BarComponent extends Vue {

    @Prop()
    commonProp: BarModel

    doBarAction() {
    }
}

class BarModel {

    barChild: BarModel

    children: BarModel[]

}