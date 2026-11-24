<script setup>
import { useRouter } from 'vue-router'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const router = useRouter()

// TODO (JAN-03): llista de jugadors connectats en temps real i comptador des de l'store de jugadors.
</script>

<template>
  <div class="view">
    <BaseCard title="Lobby">
      <p>Aquí es veurà qui està connectat i quanta gent hi ha dins del casino.</p>
      <template #footer>
        <BaseButton variant="secondary" @click="router.push({ name: 'entrada' })">
          Tornar
        </BaseButton>
        <BaseButton @click="router.push({ name: 'casino' })">Entra al casino</BaseButton>
      </template>
    </BaseCard>
  </div>
</template>

<style scoped>
.view {
  max-width: 640px;
  margin: 0 auto;
}
</style>
