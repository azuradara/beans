import type { GhRelease } from '~/lib/types'
import { Octokit } from '@octokit/rest'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()

    const octokit = new Octokit({
      userAgent: 'azuradara/beans',
      auth: config.githubToken,
    })

    const { data } = await octokit.repos.listReleases({
      owner: 'azuradara',
      repo: 'neo-act-plugin',
      per_page: 10,
    })

    setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600')

    return data as GhRelease[]
  }
  catch {
    setResponseStatus(event, 500)
    return { error: 'failed to fetch releases' }
  }
})
