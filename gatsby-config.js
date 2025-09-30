/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
      adapter: adapter({
    excludeDatastoreFromEngineFunction: false
  })
  },
  plugins: [],
}
