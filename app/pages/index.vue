<script setup lang="ts">
// Read from the session token, which the server already has, so the
// organization is in the first HTML response rather than filled in after
// hydration.
const { orgId, sessionClaims } = useAuth()
const orgName = computed(() => sessionClaims.value?.org_name)
</script>

<template>
  <div class="p-3">
    <h1 class="font-medium">{{ orgName }}</h1>
    <p class="font-mono text-text-muted">{{ orgId }}</p>
  </div>
</template>
