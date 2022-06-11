function getStoryRelations () {
  const relations = ['blok_relation.stack']
  return relations.join(',')
}

export default {
  // mounted() {
  //   window.scrollTo({ top: 0, behavior: 'instant' })
  // },
  async asyncData ({ $storyapi, error, route }) {
    try {
      const fullSlug =
        route.path === '/' || route.path === '' ? 'home' : route.path

      const payload = {
        resolve_links: 'url',
        cv: new Date().getTime(),
        resolve_relations: getStoryRelations()
      }

      const currentPage = await $storyapi.getStory(fullSlug, payload)

      // alternative: if you plan to use nuxt-storyblok-queries
      // const { story } = await $storyblok.getCurrentStory({
      //   resolve_links: 'url',
      // })

      return {
        story: currentPage.data.story
      }
    } catch (e) {
      // console.error('Exception', e)
      error({
        statusCode: 404,
        message: e.message
      })
    }
  }
}
