<template>
    <div>
        <Nav></Nav>
        <Login></Login>
    </div>
</template>

<script>
    import Nav from '../../components/nav/Nav.vue';
    import Login from '../../components/login/LoginContainer.vue';

    export default {
        name: 'LoginPage',
        components: {
            Nav,
            Login
        }
    }
</script>