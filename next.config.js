module.exports = {
  // reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: "",
  },
  
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
}
