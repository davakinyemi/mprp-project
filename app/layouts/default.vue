<template>
  <div class="flex h-dvh flex-col">
    <header class="flex h-9 shrink-0 items-center gap-3 border-b border-border px-3">
      <span class="font-medium">MPRP</span>
      <OrganizationSwitcher
        hide-personal
        after-select-organization-url="/"
        after-create-organization-url="/"
      />
      <div class="ml-auto flex items-center gap-3">
        <ThemeControl />
        <UserButton />
      </div>
    </header>
    <main class="min-h-0 flex-1">
      <slot />
    </main>
  </div>
</template>
