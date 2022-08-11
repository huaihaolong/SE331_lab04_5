<template>
  <h4>Destination: {{ passenger.Destination }}</h4>
  <h4>TravelDate: {{ passenger.travelDate }}</h4>
  <h4>AirlineId: {{ passenger.airlineId }}</h4>
</template>
<script>
export default {
  props: ['passenger']
}
</script>
