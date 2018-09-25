<template>
    <div>
        <Nav></Nav>
        <BeersContainer></BeersContainer>
    </div>
</template>

<script>
    import Nav from '../../components/nav/Nav.vue';
    import BeersContainer from '../../components/beers/BeersContainer.vue';

    export default {
        name: 'BeersOverview',
        components: {
            Nav,
            BeersContainer
        }
    }
</script>