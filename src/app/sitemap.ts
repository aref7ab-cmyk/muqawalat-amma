import type { MetadataRoute } from 'next';

const BASE_URL = 'https://fekr-alkhaleej.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = [
    'sawatir-aldammam',
    'mazallat-aldammam',
    'barjolat-aldammam',
    'hanajir-almustodaat-aldammam',
    'tarimeem-wasianah-aldammam',
    'hayakil-hadidiya-aldammam',
  ];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/khadamat`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...servicePages.map((slug) => ({
      url: `${BASE_URL}/khadamat/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
