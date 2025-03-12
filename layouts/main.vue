<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { TooltipProvider } from 'reka-ui'

const color = useColorMode()

const isDark = computed(() => color.value === 'dark')
const toggleColorMode = () => color.value = isDark.value ? 'light' : 'dark'
</script>

<template>
  <TooltipProvider>
    <div class="relative flex flex-col bg-background min-h-svh">
      <div class="border-grid flex flex-1 flex-col">
        <header class="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div class="conatiner-wrapper">
            <div class="h-14 flex items-center container">
              <div class="mr-4 hidden md:mr-1 md:flex">
                <!-- logo -->
                <a href="/" class="lg:space-xl mr-4 flex items-center font-bold lg:mr-6 md:mr-2 xl:space-x-2">
                  <img src="http://static.ncsoft.com/ingame/bns/ue4/character/img/job/blademaster.png" alt="beans" class="h-6 w-6">
                  <span class="mt-0.5 font-bold">beans</span>
                </a>

                <nav class="flex items-center gap-4 text-sm xl:gap-6">
                  <NuxtLink class="text-foregroung transition-colors hover:text-foreground/80" active-class="text-foreground/80" to="/">
                    Home
                  </NuxtLink>
                  <NuxtLink class="text-foregroung transition-colors hover:text-foreground/80" active-class="text-foreground/80" to="/meter">
                    Meter
                  </NuxtLink>
                </nav>
              </div>

              <div class="flex flex-1 items-center justify-between md:justify-end space-x-2">
                <nav class="5 flex items-center gap-0">
                  <Button as="a" href="https://github.com/azuradara/beans" variant="ghost" size="icon" target="_blank">
                    <i class="i-ci-github h-5 w-5" />
                  </Button>

                  <Button
                    class="h-8 w-8"
                    aria-label="Toggle dark mode"
                    variant="ghost"
                    size="icon"
                    @click="toggleColorMode()"
                  >
                    <ClientOnly><i :class="isDark ? 'i-ci-moon' : 'i-ci-sun'" class="h-5 w-5 text-foreground" /></ClientOnly>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main class="flex flex-1 flex-col">
          <slot />
        </main>

        <footer class="border-grid border-t py-6 md:py-0">
          <div class="container-wrapper">
            <div class="py-4 container">
              <div class="text-center text-balance text-sm text-muted-foreground leading-loose md:text-left">
                <span class="ml-1 inline-block">Built by <a href="https://twitter.com/azuradara" target="_blank" class="font-medium underline underline-offset-4">azuradara</a>.</span>
                <span class="ml-1 inline-block">The source code is available on <a href="https://github.com/azuradara/beans" target="_blank" class="font-medium underline underline-offset-4">GitHub</a>.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </TooltipProvider>
</template>

<style>

</style>
