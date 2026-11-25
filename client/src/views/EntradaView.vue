<script setup>
import { useRouter } from 'vue-router'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const router = useRouter()

// TODO (JAN-02): formulari de nom (2–20 caràcters), selector d'avatar i color, desar a l'store de sessió.
function entrar() {
  router.push({ name: 'lobby' })
}
</script>

<template>
  <div class="view">
    <BaseCard title="Benvingut a CasinoPlaza">
      <p>Aquí aniran el nom, l'avatar i el color del jugador.</p>
      <template #footer>
        <BaseButton @click="entrar">Entra</BaseButton>
      </template>
    </BaseCard>
  </div>
</template>

<style scoped>
.view {
  max-width: 480px;
  margin: 0 auto;
}
</style>
