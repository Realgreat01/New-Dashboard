<template>
  <div>
    <LoginView />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginView from './LoginView.vue';

export default {
  name: 'HomeView',
  components: {
    LoginView
}
}
</script>
<style>
.screen {
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;
  background: #F9F9F9;
  margin-left: 350px;
  max-width: 1440px;
}

.containers {
  background: #f9f9f9;
}
</style>