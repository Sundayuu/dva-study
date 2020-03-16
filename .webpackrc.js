export default {
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]
  ],
  define: {
    'process.env': {
      API_URl: process.env.API_URl
    }
  }
};
