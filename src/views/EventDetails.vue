<template>
    <div>
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{event.date }} @ {{event.location }}</p>
        <p>{{ event.desribtion }}</p>
    </div>
</template>
<script>
import EventService from '@/services/EventService.js'

export default {
    data() {
        return {
            event:null,
            id: 123
        }
    },
    created() {
        EventService.getEvent(this.id)
            .then(response => {
                this.event = response.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>