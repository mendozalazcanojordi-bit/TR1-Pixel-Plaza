<script setup>
import { useRouter } from 'vue-router'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const router = useRouter()
</script>

<template>
  <div class="view">
    <BaseCard title="Resum de la partida">
      <p>Aquí es mostrarà el resum en sortir del casino (sprint 3).</p>
      <template #footer>
        <BaseButton @click="router.push({ name: 'entrada' })">Tornar a l'entrada</BaseButton>
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
