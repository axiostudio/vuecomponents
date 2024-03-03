
<template>

    <Navbar />

    <main>
        <div class="container">

            <RouterView />

        </div>
    </main>
</template>

<script>
import Navbar from './layout/Navbar.vue';

export default {
    name: 'App',

    components: {
        Navbar
    }
}
</script>
