<template>
    <div class="input-group">
        <input
        class="form-control"
        :type=" showPassword ? 'text' : 'password'"
        :required="required"
        autocomplete="current-password"
        v-model="password"
        >
        <button class="btn btn-secondary" type="button" @click.stop="togglePassword">
            <span v-show="!showPassword"><i class="fas fa-fw fa-eye"></i></span>
            <span v-show="showPassword"><i class="fas fa-fw fa-eye-slash"></i></span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'AxioInputPassword',

    props: {
        modelValue: String,
        required: Boolean
    },

    emits: [
        'update:modelValue'
    ],

    data(){
        return{
            showPassword: false
        }
    },

    computed: {
        password: {
            get() { return this.modelValue },
            set(value) { this.$emit('update:modelValue', value) },
        }
    },

    methods: {
        togglePassword(){
            this.showPassword = !this.showPassword
        }
    }
}
</script>
