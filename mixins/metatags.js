const createSeoMeta = (data = {}) => {
  const DEFAULT_META_DATA = {
    title: 'Köck',
    description: 'yyy',
    image: '/seo/seoimage.jpg'
  }
  const meta = [
    {
      hid: 'description',
      name: 'description',
      content: data.description || DEFAULT_META_DATA.description
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: 'Köck'
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: data.og_type || 'website'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: data.ogTitle || data.og_title || 'Köck'
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        data.ogDescription ||
        data.og_description ||
        DEFAULT_META_DATA.description
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: data.ogImage || data.og_image || DEFAULT_META_DATA.image
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',

      content: data.twitterCard || data.twitter_card || 'summary_large_image'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content:
        data.twitterTitle || data.twitter_title || DEFAULT_META_DATA.title
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        data.twitterDescription ||
        data.twitter_description ||
        DEFAULT_META_DATA.description
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content:
        data.twitterImage || data.twitter_image || DEFAULT_META_DATA.image
    }
  ]
  const head = {
    title: data?.title || DEFAULT_META_DATA.title,
    meta
  }
  return head
}

export default {
  head () {
    if (this.story?.content?.metaTags) {
      const meta = this.story.content.metaTags
      return createSeoMeta(meta)
    }
  }
}
