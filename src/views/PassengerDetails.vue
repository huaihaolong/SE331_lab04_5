<template>
  <div v-if="passenger">
    <span>Name: {{ passenger.first_name }} {{ passenger.last_name }}</span>
    <h4>Email: {{ passenger.email }}</h4>
    <h4>Gender: {{ passenger.gender }}</h4>
    <h4>Ip_address: {{ passenger.ip_address }}</h4>
    <h4>Source:{{ passenger.Source }}</h4>
    <h4>{{ passenger.Destination }}</h4>
    <h4>{{ passenger.travelDate }}</h4>
    <h4>AirlineId:{{ passenger.airlineId }}</h4>
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
    console.log(this.id)
    PassengerService.getPassenger(this.id)
      .then((response) => {
        this.passenger = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
