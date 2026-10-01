import type { MetadataRoute } from 'next';

const BASE_URL = 'https://muqawalat-amma.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = [
    'mazallat-aldammam',
    'sawatir-aldammam',
    'hanajir-almustodaat-aldammam',
    'hayakil-hadidiya-aldammam',
    'barjolat-aldammam',
    'tarimeem-wasianah-aldammam',
  ];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...servicePages.map((slug) => ({
      url: `${BASE_URL}/khadamat/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
  ];
}
