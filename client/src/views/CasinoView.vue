<script setup>
import { useRouter } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'

const router = useRouter()

// TODO (MIG-02, Jordi): substituir el contenidor pel component del canvas de Phaser.
</script>

<template>
  <div class="casino">
    <div class="casino__toolbar">
      <h1>Casino</h1>
      <BaseButton variant="danger" @click="router.push({ name: 'resum' })">Sortir</BaseButton>
    </div>

    <div class="casino__game" aria-label="Espai del casino">
      <p>Aquí anirà el mapa de Phaser</p>
    </div>
  </div>
</template>

<style scoped>
.casino__toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.casino__toolbar h1 {
  margin: 0;
}

.casino__game {
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 9;
  background: var(--color-felt);
  border: 4px solid var(--color-gold);
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
}
</style>
