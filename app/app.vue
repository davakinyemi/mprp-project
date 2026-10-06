<script setup lang="ts">
const theme = useTheme()

// "system" writes no attribute, which lets the prefers-color-scheme rule apply.
useHead({
  htmlAttrs: {
    'data-theme': computed(() => (theme.value === 'light' || theme.value === 'dark') ? theme.value : undefined),
  },
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
