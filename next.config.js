module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: "",
  },
  
  // trailingSlash: true,
  // exportPathMap: function() {
  //   return {
  //     '/': { page: '/' }
  //   };
  // }
  
  trailingSlash: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/games': { page: '/games' },
    }
  },
}
