<template>
    <div>
        <label :for="id">Password:</label>
        <input :type="type" :id="id" required :placeholder="placeholder" v-model="userInput"  @change="onChange">
    </div>
</template>

<script>
    export default {
        name: 'Input',
        data: function() {
            return {
                userInput: ''
            }
        },
        props: {
            type: String,
            id: String,
            placeholder: String
        },
        methods: {
            onChange(e) {
                this.$emit('changed', e.target.value);
            }
        }
    }
</script>