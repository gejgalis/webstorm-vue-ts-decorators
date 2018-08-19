<template>
    <button></button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

    @Component
    export default class WatComponent extends Vue {

        @Prop()
        commonProp:WatModel

        doWatAction() {
        }
    }

    class WatModel {

        watChild: WatModel

        children: WatModel[]

    }
</script>