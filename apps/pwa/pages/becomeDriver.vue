<script setup>
import { useToast } from 'vue-toastification'

const cities = ref(null)
const selectedCity = ref('')
const activeDiv = ref('bike')
const reponse = await useFetch('https://geo.api.gouv.fr/departements')
const cookie = useCookie('token')
const toast = useToast()

cities.value = reponse.data.value.filter(city => city.code <= '95')

function setActiveDiv(type) {
  activeDiv.value = type
}

async function becomeDriver(e) {
  e.preventDefault()
  const form = new FormData(e.target)
  const { data: restaurants, pending, refresh } = useGatewayFetch('/demand/driver', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookie.value}`,
    },
    body: JSON.stringify({
      departement: selectedCity.value,
      vehicule_type: activeDiv.value,
      date_birth: form.get('birthday'),
    }),
    onResponse({ response }) {
      if (response.ok) {
        toast.success('Votre demande a bien été envoyé')
        navigateTo('/profile')
      }
    },
    onResponseError({ error }) {
      toast.error('Une erreur est survenue')
    },
  })
}
</script>

<template>
  <div class="flex justify-start pt-4 pl-4">
    <NuxtLink to="/profile">
      <button class="btn rounded-full min-h-fit p-3 h-fit">
        <i class="bx bx-left-arrow-alt text-2xl" />
      </button>
    </NuxtLink>
  </div>
  <div class="px-4">
    <form class="w-full flex flex-col items-center" @submit="becomeDriver($event)">
      <div class="flex flex-col lg:w-1/4 w-full">
        <h1 class="text-2xl font-bold mt-4 mb-4">
          Devenir livreur
        </h1>
        <p>Dans quelle departement souhaitez-vous rouler ?</p>
        <select v-model="selectedCity" class="select w-full mt-4">
          <option value="" disabled selected>
            Choisissez un département
          </option>
          <option v-for="city in cities" :key="city.code" :value="city.code">
            {{ city.code }} - {{ city.nom }}
          </option>
        </select>
      </div>
      <div class=" lg:w-1/4 w-full mt-4">
        <p>Type de véhicule</p>
        <div class="flex justify-between mt-4">
          <div
            class="p-2 m-2 border-[3px] rounded-xl w-full" :class="{ active: activeDiv === 'bike' }"
            @click="setActiveDiv('bike')"
          >
            <p class="text-lg">
              Vélo
            </p>
            <i class="bx bx-cycling text-3xl" />
          </div>
          <div
            class="p-2 m-2 border-[3px] rounded-xl w-full" :class="{ active: activeDiv === 'scooter' }"
            @click="setActiveDiv('scooter')"
          >
            <p class="text-lg">
              Scooter
            </p>
            <i class="bx bx-cycling text-3xl" />
          </div>
          <div
            class="p-2 m-2 border-[3px] rounded-xl w-full" :class="{ active: activeDiv === 'car' }"
            @click="setActiveDiv('car')"
          >
            <p class="text-lg">
              Voiture
            </p>
            <i class="bx bx-car text-3xl" />
          </div>
        </div>
      </div>
      <div class="lg:w-1/4 w-full flex flex-col mt-4">
        <label for="birthday">Date de naissance</label>
        <input id="birthday" type="date" name="birthday" class="input mt-4 w-full birthDate">
        <button class="btn bg-neutral mt-3">
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.active {
    border: #18342B 3px solid;
}

.birthDate {
    -webkit-appearance: none;
}
</style>
