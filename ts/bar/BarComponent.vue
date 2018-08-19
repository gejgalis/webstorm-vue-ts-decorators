<template>
    <button></button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

    @Component
    export default class BarComponent extends Vue {

        @Prop()
        commonProp:BarModel

        doWatAction() {
        }
    }

    class BarModel {

        watChild: BarModel

        children: BarModel[]

    }
</script>