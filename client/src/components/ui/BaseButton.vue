<script setup>
defineProps({
  /** primary: acció principal (daurat) · secondary: acció normal · danger: sortir, esborrar... */
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button :type="type" :disabled="disabled" class="base-button" :class="`base-button--${variant}`">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: var(--font-size-md);
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.4);
  transition:
    transform var(--transition-fast),
    background-color var(--transition-fast);
}

.base-button:active:not(:disabled) {
  transform: translateY(2px);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}

.base-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.base-button--primary {
  background: var(--color-gold);
  color: var(--color-text-on-gold);
}

.base-button--primary:hover:not(:disabled) {
  background: var(--color-gold-light);
}

.base-button--secondary {
  background: transparent;
  border-color: var(--color-border);
  color: var(--color-text);
}

.base-button--secondary:hover:not(:disabled) {
  background: var(--color-surface-raised);
}

.base-button--danger {
  background: var(--color-red);
  color: var(--color-text);
}

.base-button--danger:hover:not(:disabled) {
  background: var(--color-red-light);
}
</style>
