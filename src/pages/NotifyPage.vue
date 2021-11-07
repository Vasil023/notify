<template>
<div class="wrapper-content wrapper-content--fixed">
  <div class="container">
    <div class="notify-wrapper">
      <div class="notify-title">
        <p>Notify App</p>
      </div>
      <div class="notify__content">
        <notify
           :messages="messages"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import notify from '../components/Notify'
export default {
  name: "Notify",
  // eslint-disable-next-line vue/no-unused-components
  components: { notify },
  data () {
    return {
      messages: [
        {title: 'message 1'},
        {title: 'message 2'},
        {title: 'message 3'},
        {title: 'message 4'},
        {title: 'message 5'},
      ]
    }
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