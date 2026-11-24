<script setup>
import { RouterLink, RouterView } from 'vue-router'

// Navegació temporal per moure's entre vistes mentre no hi ha el flux real (JAN-02 / JAN-03).
const links = [
  { to: { name: 'entrada' }, label: 'Entrada' },
  { to: { name: 'lobby' }, label: 'Lobby' },
  { to: { name: 'casino' }, label: 'Casino' },
  { to: { name: 'resum' }, label: 'Resum' },
]
</script>

<template>
  <div class="app-layout">
    <header class="app-header">
      <RouterLink :to="{ name: 'entrada' }" class="app-logo">CasinoPlaza</RouterLink>
      <nav class="app-nav" aria-label="Navegació principal">
        <RouterLink v-for="link in links" :key="link.label" :to="link.to" class="app-nav__link">
          {{ link.label }}
        </RouterLink>
      </nav>
    </header>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  background: var(--color-felt-dark);
  border-bottom: 3px solid var(--color-gold);
}

.app-logo {
  font-family: var(--font-pixel);
  font-size: var(--font-size-md);
  color: var(--color-gold);
  text-decoration: none;
}

.app-nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.app-nav__link {
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  text-decoration: none;
  font-weight: 600;
}

.app-nav__link:hover {
  color: var(--color-text);
}

.app-nav__link.router-link-exact-active {
  color: var(--color-text-on-gold);
  background: var(--color-gold);
}

.app-main {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-4);
}
</style>
