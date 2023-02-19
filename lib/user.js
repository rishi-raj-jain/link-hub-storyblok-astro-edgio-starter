import { useStoryblokApi } from '@storyblok/astro'

export async function getUserInfo(slug) {
  console.log('entered')
  const storyblokApi = useStoryblokApi()
  console.log('api initialized')
  const { data } = await storyblokApi.get(`profiles/${slug}`)
  console.log('get data call')
  console.log(data)
  return data
}
