const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8787
  }
})
// module.exports = {
//   transpileDependencies:ture,
//   devServer:{
//     port:8787
//   }
// }
