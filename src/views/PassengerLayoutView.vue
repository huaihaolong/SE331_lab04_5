<template>
  <div v-if="passenger">
    <h1>Passenger_ID:{{ passenger.id }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'PassengerDetail', params: { id } }"
        >Details</router-link
      >|
      <router-link :to="{ name: 'AirlineInfo', params: { id } }"
        >AirlineInfo</router-link
      >
    </div>
    <br />
    <router-view :passenger="passenger" />
  </div>
</template>
<script>
import PassengerService from '@/services/PassengerService'

export default {
  props: ['id'],
  data() {
    return {
      passenger: null
    }
  },
  created() {
    PassengerService.getPassenger(this.$route.params.id)
      .then((response) => {
        this.passenger = response.data
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'event' }
          })
        } else {
          this.$router.push({ name: 'NetworkError' })
        }
      })
  }
}
</script>
