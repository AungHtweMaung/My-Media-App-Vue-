<template>

  <router-view></router-view>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  
  computed: {
    // ...mapActions['userDataLoad'],

    
  },

  methods: {
  },
  
  mounted() {
    this.$store.dispatch('userDataLoad')
    // // this.userDataLoad();
    // // this.$store.dispatch('userDataLoad')
    // // this.userDataLoad;
    // console.log(this.$store.getters.storageUserData);
    // // console.log(this.$store.state.userData);
  },
}
</script>

