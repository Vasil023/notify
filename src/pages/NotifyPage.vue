<template>
<div class="wrapper-content wrapper-content--fixed">
  <div class="container">
    <div class="notify-wrapper">
      <div class="notify-title">
        <p>Notify App</p>
      </div>
      <div class="notify__content">
          <!--preloader-->
        <preloader v-if="loading" :width="90" :height="90" />
        <notify
           v-if="!loading"
           :messages="messages"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import notify from '../components/Notify'
//UI
import preloader from '../components/UI/Preloader'
export default {
  name: "Notify",
  // eslint-disable-next-line vue/no-unused-components
  components: { notify, preloader },
  data () {
    return {
      loading: false,
      messages: []
    }
  },
  mounted() {
    axios
      .get('https://tocode.ru/static/_secret/courses/1/notifyApi.php')
      .then(response => {
        this.messages = response.data.notify
      })
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
.notify-wrapper {
  width: 400px;
  background-color: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);
}
.notify__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
}
.notify-title p {
  font-size: 24px;
}
</style>