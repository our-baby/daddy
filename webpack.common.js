const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const distDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');
const staticDir = path.resolve(__dirname, 'static');

const { NODE_ENV } = process.env;
dotenv.config({ path: `./.env.${NODE_ENV}` });

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: distDir,
    clean: true,
  },
  resolve: {
    alias: {
      '@': srcDir,
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /(node_modules)/,
        use: ['swc-loader', 'ts-loader'],
        // use: {
        //   loader: 'swc-loader',
        // },
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset', // 40KB(default) 미만은 inline, 이상은 resource로 대처
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 기준을 20KB 로 변경
          },
        },
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            use: ['@svgr/webpack'],
            issuer: /\.[jt]sx?$/,
            resourceQuery: { not: [/url/] },
          },
          {
            type: 'asset',
            resourceQuery: /url/, // *.svg?url
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      hash: true,
      favicon: `${staticDir}/favicon.ico`,
    }),
    new webpack.DefinePlugin({
      API_BASE_PATH: JSON.stringify(process.env.API_BASE_PATH),
      APP_BASE_URL: JSON.stringify(process.env.APP_BASE_URL),
      NAVER_APP_CLIENT_ID: JSON.stringify(process.env.NAVER_APP_CLIENT_ID),
      NAVER_LOGIN_CALLBACK_PATH: JSON.stringify(process.env.NAVER_LOGIN_CALLBACK_PATH),
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },
};
