<script setup lang="ts">
const theme = useTheme()

const labels: Record<ThemeChoice, string> = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
}
</script>

<template>
  <div role="group" aria-label="Theme" class="flex rounded border border-border bg-surface-sunken p-px">
    <button
      v-for="choice in THEME_CHOICES"
      :key="choice"
      type="button"
      :aria-pressed="theme === choice"
      class="rounded-sm px-2 py-0.5 text-text-muted focus-visible:outline focus-visible:outline-accent aria-pressed:bg-surface-raised aria-pressed:text-text"
      @click="theme = choice"
    >
      {{ labels[choice] }}
    </button>
  </div>
</template>
