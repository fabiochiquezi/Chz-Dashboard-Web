const withImages = require('next-images')

module.exports = withImages({
  webpack(config, options) {
    return config
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
})

// module.exports = {
//   reactStrictMode: true,
// }
