<template>
<div class="jobs">
    <h1> Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <router-link :to="{name:JobDetails,params:{id:job.id}}">
            <h2>{{job.title}}</h2>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'JobView',
    components: {},
    data() {
        return {
            jobs: [{
                    title: 'Ninja UX designer',
                    id: 1,
                    details: 'lorem'
                },
                {
                    title: 'Ninja Web developer',
                    id: 2,
                    details: 'lorem'
                },
                {
                    title: 'Ninja Vue developer',
                    id: 3,
                    details: 'lorem'
                }
            ]
        }
    }

}
</script>

<style scoped>

</style>
