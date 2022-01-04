<template>
  <div>
    <div v-for="sector in sectors" :key="sector.id">
      <p>{{ sector.sector }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectors: { type: Array },
  },
};
</script>
