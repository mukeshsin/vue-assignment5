<template>
<h1>jobs detail page</h1>
<p> This job id is{{id}}</p>
</template>

<script>
export default {
    name: 'jobDetails',
    props: ['id'],
    components: {},
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style>
</style>
