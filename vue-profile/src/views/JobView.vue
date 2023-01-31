<template>
<div class="Jobs">
    <h1 class="jobsHead"> Jobs</h1>
    <div class="jobField">
    <div v-for="job in jobs" :key="job.id" class="jobInfo">
        <router-link :to="`jobs/${job.id}`">
            <h2>{{job.title}}</h2>
        </router-link>
    </div>
    </div>
</div>
</template>

<script>
export default {

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
.jobsHead{
    margin-top: 25px;
    font-size: 40px;
    letter-spacing: 1px;
}
.jobField{
    margin-top: 50px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
}
.jobInfo{
    font-size: 20px;
    margin-top: 10px;
    width: 35%;
    background-color: #d4d6d9;
    color: #3f4040;
    
    
}
.jobInfo a{
    text-decoration: none;
    font-size:15px;
    color:blue
}
</style>
