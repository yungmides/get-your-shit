<script setup>
import { authRegister } from '~/utils/auth'

const isLoading = ref(false)
useHeadSafe({
  title: 'Inscription',
  meta: [
    {
      name: 'description',
      content: 'Inscription',
    },
  ],
})
async function register(credentials) {
  isLoading.value = true
  await authRegister(credentials)
  isLoading.value = false
}
</script>

<template>
  <div class="flex items-center justify-center min-h-full flex-1 h-full">
    <div class="flex flex-col justify-center w-full px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:max-w-full">
        <div>
          <h2 class="text-2xl font-bold leading-9 tracking-tight text-center lg:text-left">
            Faites une demande de création de restaurant
          </h2>
        </div>

        <div class="mt-10">
          <div>
            <FormKit type="form" form-class="flex flex-col lg:grid lg:grid-cols-2 w-full items-center lg:items-start gap-6" :actions="false" @submit="register">
              <FormKit
                type="text"
                name="address"
                label="Adresse postale de votre restaurant"
                placeholder="13 rue de la Hess"
                validation="required"
                input-class="input input-bordered input-primary w-full mt-2 w-full"
                outer-class="w-full"
                label-class="label label-text"
                message-class="label-text-alt mt-2 text-error"
              />
              <FormKit
                type="text"
                name="postal_code"
                label="Code postal"
                placeholder="75000"
                validation="required"
                input-class="input input-bordered input-primary w-full mt-2 w-full"
                outer-class="w-full"
                label-class="label label-text"
                message-class="label-text-alt mt-2 text-error"
              />
              <FormKit
                type="text"
                name="city"
                label="Ville"
                placeholder="Paris"
                validation="required"
                input-class="input input-bordered input-primary w-full mt-2 w-full"
                outer-class="w-full"
                label-class="label label-text"
                message-class="label-text-alt mt-2 text-error"
              />
              <FormKit
                type="text"
                name="phone"
                label="Numéro de téléphone"
                placeholder="06 12 34 56 78"
                validation="required"
                input-class="input input-bordered input-primary w-full mt-2 w-full"
                outer-class="w-full"
                label-class="label label-text"
                message-class="label-text-alt mt-2 text-error"
              />
              <FormKit
                type="text"
                name="name"
                label="Nom de votre restaurant"
                placeholder="Le restaurant de la Hess"
                validation="required"
                input-class="input input-bordered input-primary w-full mt-2 w-full"
                outer-class="w-full"
                label-class="label label-text"
                message-class="label-text-alt mt-2 text-error"
              />
              <FormKit
                type="text"
                name="username"
                label="Nom d'utilisateur"
                placeholder="restaurantdelahess"
                validation="required"
                input-class="input input-bordered input-primary w-full mt-2 w-full"
                outer-class="w-full"
                label-class="label label-text"
                message-class="label-text-alt mt-2 text-error"
              />
              <FormKit
                type="email"
                name="email"
                label="Adresse mail de votre restaurant"
                placeholder="email@example.com"
                validation="required|email"
                input-class="input input-bordered input-primary mt-2 w-full"
                outer-class="w-full"
                label-class="label label-text"
                message-class="label-text-alt mt-2 text-error"
              />
              <FormKit
                type="password"
                name="password"
                label="Mot de passe"
                validation="required"
                input-class="input input-bordered input-primary w-full mt-2 w-full"
                outer-class="w-full"
                label-class="label label-text"
                message-class="label-text-alt mt-2 text-error"
              />
              <FormKit
                type="password"
                name="password_confirm"
                label="Confirmation du mot de passe"
                validation="required|confirm"
                input-class="input input-bordered input-primary w-full mt-2 w-full"
                outer-class="w-full col-span-full"
                label-class="label label-text"
                message-class="label-text-alt mt-2 text-error"
              />
              <UButton class="col-span-full w-96 place-self-center" size="md" type="submit" :loading="isLoading" block>
                Faire une demande
              </UButton>
            </FormKit>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
