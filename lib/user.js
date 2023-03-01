import { useStoryblokApi } from '@storyblok/astro'

export async function getUserInfo(slug) {
  try {
    const storyblokApi = useStoryblokApi()
    // Append cdn/stories/ before your full slug path
    const { data } = await storyblokApi.get(`cdn/stories/profiles/${slug}`)
    // If the story is there, return the required data
    if (data.story) {
      const { name, content } = data.story
      const { About, Image, Links, Socials, OG } = content
      return {
        name,
        image: Image.filename,
        about: About,
        links: Links.map((i) => [i.Name, i.URL.url, i.Image.filename]),
        socials: Socials.map((i) => [i.Name, i.URL.url]),
        og: { image: OG.filename },
        code: 1,
      }
    }
    return { code: 0 }
  } catch (e) {
    console.log(e.message || e.toString())
    return { code: 0 }
  }
}
