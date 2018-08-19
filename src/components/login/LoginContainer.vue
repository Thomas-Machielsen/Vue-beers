<template>
    <form method="post">
        <CustomInput type="text" id="username" placeholder="Robert Oppenheimer" v-on:changed="usernameChanged"></CustomInput>
        <CustomInput type="password" id="password" placeholder="********"   v-on:changed="passwordChanged"></CustomInput>

        <button type="submit" @click="postFormData()">Submit</button>
        <ErrorMessage v-if="failedAuthenticating" errorMessage="Sorry we couldn't log you in, please try again"></ErrorMessage>
    </form>
</template>

<script>
    import postData from '../api/api';
    import ErrorMessage from '../contentBlock/ErrorMessage.vue';
    import CustomInput from '../inputs/Input.vue'

    export default {
        name: 'LoginContainer',
        components: {
            CustomInput,
            ErrorMessage,
        },
        data: function()  {
            return {
                username: '',
                password: '',
                failedAuthenticating: false
            }
        },
        methods: {
            postFormData: function() {
                event.preventDefault();
                if(!this.username || !this.password) { return; }

                const formData = {
                    username: this.username,
                    password: this.password
                };

                const url = 'https://beeer-api.herokuapp.com/api/authenticate/';

                postData(url, formData).then(result => this.isUserAuthenticated(result));
            },

            passwordChanged(password) {
                this.password = password;
            },

            usernameChanged: function(username) {
                this.username = username;
            },

            isUserAuthenticated(result) {
                result.data ? this.redirectAndSaveToken(result.data) : this.showNotLoggedInMessage(result.error);
            },

            redirectAndSaveToken(token) {
                this.redirectToBeers();
                this.saveToken(token);
            },

            redirectToBeers() {
                this.$router.push('beers');
            },

            saveToken(token) {
                this.failedAuthenticating = false;
                localStorage.setItem('token', token);
            },

            showNotLoggedInMessage() {
                this.failedAuthenticating = true;
            }
        }
    }

</script>
