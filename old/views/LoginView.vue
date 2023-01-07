<template>
	<form class="container">
		<div class="login_card">
			<div class="space">
				<h1><span>Greach</span></h1>
				<small>Welcome Back, Please login to your account.</small>
			</div>
			<form
				@submit.prevent="handleSubmit"
				class="form_group">
				<input
					v-model="email"
					type="email"
					id="email"
					class="form-control"
					placeholder="Email" />
				<!-- <input v-model="password" type="password" class="form-control" placeholder="Password" > -->
				<div class="password_div">
					<input
						v-model="password"
						:type="type"
						class="form-control"
						placeholder="Your password" />
					<span v-if="open">
						<button
							@click.prevent="showPassword"
							class="see_button">
							<img
								src="../assets/eyes_close.svg"
								alt="" /></button
					></span>
					<span v-if="close">
						<button
							@click.prevent="showPassword"
							class="see_button">
							<img
								src="../assets/eyes_open.svg"
								alt="" /></button
					></span>
				</div>
				<input
					type="submit"
					value="Login"
					class="greach_button" />
				<router-link to="/forgot">Forgot Password?</router-link>
			</form>
		</div>
	</form>
</template>

<script>
import axios from 'axios';
export default {
	name: 'LoginView',
	data() {
		return {
			email: '',
			password: '',
			type: 'password',
			btnText: 'show',
			close: false,
			open: true,
		};
	},
	methods: {
		showPassword() {
			if (this.type === 'password') {
				this.type = 'text';
				this.btnText = 'hide';
				this.close = true;
				this.open = false;
			} else {
				this.type = 'password';
				this.btnText = 'show';
				this.close = this.open = true;
			}
		},
		validateEmail(email) {
			const re =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
			return re.test(email);
		},
		async handleSubmit() {
			if (this.email === '') {
				this.$toasted.error('Please fill your email');
				return false;
			}
			if (!this.validateEmail(this.email)) {
				this.$toasted.error('Invalid email address');
				return false;
			}
			if (this.password == '') {
				this.$toasted.error('Please enter your password');
				return false;
			}
			await axios
				.post('http://3.85.252.84/api/v1/users/admin/login', {
					email: this.email,
					password: this.password,
				})
				.then(response => {
					if (response.status === 200 && response.data.status === 'ok') {
						this.$toasted.success('Success!');
						this.$router.push('/dashboard');
					} else {
						this.$toasted.error('oops an error occurred');
						return false;
					}
					console.log(response);
				})

				.catch(error => {
					console.log(error);
					if (error.response.data.detail) {
						this.$toasted.error(error.response.data.detail);
					} else {
						this.$toasted.error('An error occured. Please, try again later.');
					}
				});
		},
	},
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
	box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.form_group {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 20px;
}

input[type='email'] {
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

input[type='password'] {
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
