<template>
  <div>
    <a-input @input="handleInput"></a-input>
    <!-- <p>{{ inputValue }}</p> -->
    <a-show :count="inputValue"></a-show>
    <p>{{ appName }}：{{ appNameWithVesion }}</p>
    <p>{{ userName }}</p>
    <button @click="handleChangeAppName">修改appName</button>
  </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    ...mapState('user', {
      userName: state => state.userName
    }),
    ...mapState({
      appName: state => state.appName
    }),
    ...mapGetters([
      'appNameWithVesion'
    ])
    // appNameWithVesion () {
    //   return this.$store.getters.appNameWithVesion
    // }
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName (){
    //   return this.$store.state.user.userName
    // }
  },
  methods: {
    ...mapActions([
      'upDateAppName'
    ]),
    handleInput (val){
      this.inputValue = val
    },
    handleChangeAppName () {
      this.upDateAppName()
      // this.$store.commit('SET_APP_NAME', 'newAppName')
    }
  }
}
</script>

