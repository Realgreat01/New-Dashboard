<template>
  <div class="container">
    <div class="login_card">
      <div class="space">
        <h1><span>Greach</span></h1>
        <small>Welcome Back, Please login to your account.</small>
      </div>
      <form @submit.prevent="handleSubmit" class="form_group">
        <input
          v-model="formResponse[input.value]"
          :type="input.type"
          class="form-control"
          :placeholder="input.title"
          v-for="(input, index) in loginForm"
          :key="index"
        />

        <input type="submit" value="Login" class="greach_button" />
        <router-link to="/forgot">Forgot Password?</router-link>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import Message from "vue-m-message";
import { ref, reactive } from "vue";

const loginForm = ref([
  { title: "Email", value: "email", type: "text" },
  { title: "Your Password", value: "password", type: "password" },
]);
const formResponse = reactive({
  email: "",
  password: "",
});
const validateEmail = (email) => {
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
  return re.test(email);
};
const handleSubmit = async () => {
  if (formResponse.email === "") return Message.error("Please fill your email");
  if (validateEmail(formResponse.email) === false)
    return Message.error("Invalid email address");
  if (formResponse.password == "")
    return Message.error("Please enter your password");
	try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "admin/login",
      formResponse
    );
    
		console.log(response);
      return response;
    // }
  } catch (error) {
    const {data} = error.response
    if (data) {
      Message.error(data.message);
    } else {
      Message.error("An error occured. Please, try again later.");
    }
  }
};
</script>

<style scoped>
.see_button {
  height: 50px;
  border: none;
  color: #ffffff;
  background: none;
  padding: 0 20px;
  cursor: pointer;
}

.form-control {
  border: none;
  background: #ffffff;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border: none;
  border-radius: 3px;
  outline: none;
  height: 50px;
  padding: 0 0 0 15px;
  width: 100%;
}
.password_div {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
}

.login_card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  background: #f9f9f9;
  height: 400px;
  width: 50%;
  padding: 5%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.form_group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
}

input[type="email"] {
  border: none;
  background: #ffffff;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border: none;
  border-radius: 3px;
  outline: none;
  width: 100%;
  height: 50px;
  padding: 0 0 0 15px;
}

input[type="password"] {
  border: none;
  background: #ffffff;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border: none;
  border-radius: 3px;
  outline: none;
  height: 50px;
  padding: 0 0 0 15px;
  width: 100%;
}

.greach_button {
  border: none;
  outline: none;
  cursor: pointer;
  width: 70%;
  height: 50px;
  text-align: center;
  color: #ffffff;
  background: #2aaa0b;
  border-radius: 3px;
}

a {
  color: #2aaa0b;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

span {
  color: #2aaa0b;
}

.space {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
