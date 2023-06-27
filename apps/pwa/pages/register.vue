<script setup>
import { useToast } from "vue-toastification";
definePageMeta({
    layout: 'empty'
})
const register = async (e) => {
    e.preventDefault()
    const toast = useToast();
    const form = new FormData(e.target)
    const username = form.get('username')
    const email = form.get('email')
    const password = form.get('password')
    const password_confirmation = form.get('password_confirmation')

    if (password !== password_confirmation) {
        alert('Les mots de passe ne correspondent pas')
        return
    }

    const data = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    });

    if (data.ok) {
        toast.success("Vous êtes inscrit");
        navigateTo('/login')
    }
}

</script>

<template>
    <div class="register-container">
      <div class="register-header">
        <h1 class="register-title">Register</h1>
      </div>
      <div class="register-content">
        <form @submit="register($event)" class="register-form">
          <input type="text" name="username" placeholder="Username" class="input" />
          <input type="email" name="email" placeholder="Email" class="input" />
          <input type="password" name="password" placeholder="Password" class="input" />
          <input type="password" name="password_confirmation" placeholder="Password confirmation" class="input" />
          <button class="btn" type="submit">Register</button>
        </form>
        <p class="register-text">Vous avez déjà un compte ? <NuxtLink to="/login" class="register-link">Connexion</NuxtLink></p>
      </div>
    </div>
  </template>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.register-content {
    width: 100%;
}

.register-header {
  text-align: center;
  margin-bottom: 20px;
}

.register-title {
  font-size: 2rem;
  font-weight: bold;
}

.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input {
  width: 80%;
  height: 40px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.btn {
  width: 40%;
  height: 40px;
  background-color: #18342B;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.btn:hover {
  background-color: #1e4136;
}

.register-text {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}

.register-link {
  color: #10B981;
}

/* tablet */

@media (min-width: 738px) {
    .input {
        width: 40%;
    }

    .btn {
        width: 20%;
    }
}


/* desktop */

@media (min-width: 1280px) {
    .input {
        width: 20%;
    }

    .btn {
        width: 10%;
    }
}

</style>
