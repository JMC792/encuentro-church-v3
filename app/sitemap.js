export default function sitemap() {
    return [
      {
        url: 'https://encuentro.church',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://encuentro.church/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://encuentro.church/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://encuentro.church/service',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      // {
      //   url: 'https://encuentro.church/portfolio',
      //   lastModified: new Date(),
      //   changeFrequency: 'weekly',
      //   priority: 0.5,
      // },
      // {
      //   url: 'https://encuentro.church/blog',
      //   lastModified: new Date(),
      //   changeFrequency: 'weekly',
      //   priority: 0.5,
      // },
    ]
  }