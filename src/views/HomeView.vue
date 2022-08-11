<template>
  <div class="home">
    <PassengerCard
      v-for="passenger in passengers"
      :key="passenger.id"
      :passenger="passenger"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import PassengerCard from '@/components/PassengerCard.vue'
import PassengerService from '@/services/PassengerService'
export default {
  name: 'HomeView',
  components: {
    PassengerCard
  },
  data() {
    return {
      passengers: null
    }
  },
  created() {
    PassengerService.getPassengers()
      .then((response) => {
        this.passengers = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
