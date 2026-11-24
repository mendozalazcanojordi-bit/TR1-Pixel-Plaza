<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="base-card">
    <header v-if="title || $slots.header" class="base-card__header">
      <slot name="header">
        <h2 class="base-card__title">{{ title }}</h2>
      </slot>
    </header>
    <div class="base-card__body">
      <slot />
    </div>
    <footer v-if="$slots.footer" class="base-card__footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<style scoped>
.base-card {
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  padding: var(--space-6);
}

.base-card__title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-4);
}

.base-card__footer {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  justify-content: flex-end;
  margin-top: var(--space-6);
}
</style>
