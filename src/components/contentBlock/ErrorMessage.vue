<template>
    <div class="contentblock contentblock--error">
        <p>{{ errorMessage }}</p>
    </div>
</template>

<script>
    export default {
        name: 'ErrorMessage',
        props: {
            errorMessage: ''
        }
    }
</script>
