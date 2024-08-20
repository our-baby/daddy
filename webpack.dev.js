const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    proxy: [
      {
        context: ['/api'], // /api로 시작하는 url은 아래의 전체 도메인을 추가하고, 옵션을 적용
        target: 'http://localhost:8080', // 클라이언트에서 api로 보내는 요청은 주소를 8080로 바꿔서 보내겠다 라는 뜻
        changeOrigin: true, // cross origin 허용 설정
      },
    ],
  },
});
