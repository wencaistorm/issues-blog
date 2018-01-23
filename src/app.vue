<template>
    <div>
        <myHeader></myHeader>
        <router-view></router-view>
        <myFooter></myFooter>
    </div>
</template>
<script>
    import myHeader from './views/Header.vue'
    import myFooter from './views/Footer.vue'
    export default {
        name: 'app',
        components: {
            myHeader,
            myFooter
        }
    };
</script>