const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemoveWebpackPlugin = require('remove-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const styledComponentsTransformer = require('typescript-plugin-styled-components').default;

const rootPath = process.cwd();
const resolvePath = path.resolve.bind(rootPath);

const devLoaders = [
  {
    loader: 'awesome-typescript-loader',
    options: {
      getCustomTransformers: () => ({
        before: [styledComponentsTransformer()]
      })
    }
  }
];

const config = {
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'static/js/[name].[hash:8].js',
    publicPath: '/',
    chunkFilename: 'static/js/[name].[hash:8].chunk.js'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: ['node_modules', resolvePath('src')]
  },

  node: {
    fs: 'empty'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: resolvePath('src'),
        exclude: /node_modules/,
        use: devLoaders
      },
      {
        test: /\.(pik-icon|raw)\.svg$/,
        use: 'raw-loader'
      },
      {
        test: [/\.gif$/, /\.png$/, /^((?!(pik-icon|raw)).)*\.svg$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '..', 'public'),
        to: path.resolve(__dirname, '..', 'build')
      }
    ]),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new FaviconsWebpackPlugin({
      logo: require.resolve('./favicon.png'),
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false
      }
    }),
    new RemoveWebpackPlugin([path.resolve(__dirname, '..', 'build')], 'hide')
  ],

  devServer: {
    contentBase: path.resolve(__dirname, '..'),
    hot: true,
    port: 80,
    host: '0.0.0.0',
    historyApiFallback: true
  },

  performance: {
    hints: false
  }
};

module.exports = config;
