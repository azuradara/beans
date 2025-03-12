<script lang="ts" setup>
import type { GhRelease } from '~/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

definePageMeta({ title: 'Home', layout: 'main' })

const { data: releases, status } = useFetch<GhRelease[]>('/api/meter/releases', {
  key: 'meter/releases',
  getCachedData: (key, app) => app.isHydrating ? app.payload.data[key] : app.static.data[key],
})
</script>

<template>
  <div class="container-wrapper">
    <div class="py-8 container lg:py-12 md:py-10">
      Hello

      <ClientOnly>
        <template v-if="status === 'success'">
          <div class="flex flex-col gap-6">
            <Card
              v-for="release in releases"
              :key="release.id"
              class="mb-6"
            >
              <CardHeader>
                <CardTitle class="flex items-center gap-2">
                  {{ release.name }}
                  <span class="text-sm text-muted-foreground font-normal">
                    {{ release.tag_name }}
                  </span>
                </CardTitle>
                <CardDescription>
                  Released {{ new Date(release.published_at).toLocaleDateString() }}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MDC
                  :value="release.body!"
                  class="prose dark:prose-invert max-w-none"
                >
                  <template #empty>
                    <p class="text-muted-foreground">
                      No release notes available
                    </p>
                  </template>
                </MDC>
              </CardContent>
            </Card>
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<style>

</style>
