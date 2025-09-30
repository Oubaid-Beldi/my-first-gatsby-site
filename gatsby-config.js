/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false
  }),
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
}
