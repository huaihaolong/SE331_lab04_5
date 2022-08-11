<template>
  <span>Name:{{ passenger.first_name }} {{ passenger.last_name }}</span>
  <h4>Email: {{ passenger.email }}</h4>
  <h4>Gender: {{ passenger.gender }}</h4>
  <h4>Ip_address: {{ passenger.ip_address }}</h4>
  <h4>Source:{{ passenger.Source }}</h4>
</template>

<script>
export default {
  props: ['passenger']
}
</script>
