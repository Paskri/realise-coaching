module.exports = {
  siteUrl: 'https://realise-coaching.fr',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', allow: '/qui-suis-je' },
      { userAgent: '*', allow: '/prestations/coaching-adulte' },
      { userAgent: '*', allow: '/prestations/coaching-en-entreprise' },
      { userAgent: '*', allow: '/prestations/coaching-en-milieu-scolaire' },
      { userAgent: '*', allow: '/prestations/coaching-orientation-scolaire' },
      { userAgent: '*', allow: '/questions' },
      { userAgent: '*', allow: '/actualites' },
      { userAgent: '*', allow: '/contact' },
      { userAgent: '*', disallow: '/mentions-legales' },
      { userAgent: '*', disallow: '/404' },
    ],
  },
};