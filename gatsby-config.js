/**
 * @type {import('gatsby').GatsbyConfig}
 * 
 */
const adapter = require("gatsby-adapter-netlify");
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
