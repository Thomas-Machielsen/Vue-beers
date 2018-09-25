<template>
    <section class="beer">
        <p class="beer__name">{{ beers.name }}</p>
        <p class="beer__brewer">{{ beers.brewer }}</p>
    </section>
</template>

<script>
    export default {
      name: 'Beer',
      props: {
        beers: Object
      }
    }
</script>