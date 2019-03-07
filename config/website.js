const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Logan Garland | Developer', // Navigation and Site Title
  siteTitleAlt: 'Logan Garland | Full Stack Developer', // Alternative Site title for SEO
  siteTitleShort: 'LG', // short_name for manifest
  siteHeadline: 'Making the web a more intersting place', // Headline for schema.org JSONLD
  siteUrl: 'https://logangarland.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Developer Portfolio for Logan Garland | Tucson, AZ',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@floppycatfish', // Twitter Username
  ogSiteName: 'floppycatfish', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-XXXXXXXX-X',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
