<template>
    <div class="about">

        <AxioInputPassword v-model="password" required>
            <template v-slot:show-button>Show password</template>
            <template v-slot:hide-button>Hide password</template>
        </AxioInputPassword>

        <pre>{{ password }}</pre>

        <hr>

    </div>
</template>

<script>
import AxioInputPassword from '../components/InputPassword/InputPassword.vue';

export default {
    name: 'HomeView',

    components: {
        AxioInputPassword
    },

    data(){
        return {
            password: ''
        }
    }
}
</script>
