const htmlWebPackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

const webpack = require('webpack')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

const webpackConfigGenerator = env => {
  const sourcemaps = !!env.development;

  //dotenv.config({path: __dirname + '/.env.local' });
  //console.log('webpack', __dirname + (env.development) ? '/.env.local' : '/.env')

  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const envType= (env.development) ? 'local' : 'production'
  const envPath = basePath + '.' + envType //env.ENVIRONMENT;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  const webpackInitConfig = {
    entry: {
      react: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      publicPath: '/',
    },
    resolve: {
      alias: {
        Helpers: path.resolve(__dirname, 'src/views-custom/Helpers/'),
        ApiDropbox: path.resolve(__dirname, 'src/views-custom/Helpers/ApiDropbox/ApiDropbox.js')
      }
    },
    performance: {
      hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    stats: {
      children: false
    },
    optimization: {
      splitChunks: {
        //maxSize:
        cacheGroups: {
          default: false,
          vendors: false,
          commonsa: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2
          },
        }
      }
    },
    devServer: {
        historyApiFallback: {disableDotRule: true}
    },
    //devtool: 'inline-source-map',
    //devtool: 'source-map',
    //devtool: ( 'production' === process.env.NODE_ENV ? 'source-map' : 'cheap-module-eval-source-map' ),
    module: {
      rules: [ // el loader
        {
          test: /\.(js|jsx)$/, //todos los archivos js
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/react'],
              plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread"
              ]
            }
          }
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
              loader: 'ts-loader'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true } //comprimir
            }
          ]
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            miniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            }, {
              loader: 'sass-loader',
              options: {
                sourceComments: sourcemaps, //true,
                outputStyle: 'expanded',
                sourceMap: sourcemaps, //true,
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|ico|gif|svg|webp)$/i, // i -> mayusculas y minusculas
          use: [
            'file-loader?name=assets/[name].[ext]'
          ]
        },
        {
          test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
          use: 'file-loader?name=assets/[name].[ext]'
        }
      ]
    }, //loaders
    plugins: [
      new cleanWebpackPlugin(['dist/**/*.*']),
      new miniCssExtractPlugin({
          filename: '[name].css', // nombre variable del archivo origen
          chunkFilename: '[id].css',// para que no este en cache
          minimize: true
      }),
      new htmlWebPackPlugin({
          favicon: 'src/favicon.ico',
          template: './src/template.html',
          hash: true
      }),
      new htmlWebPackPlugin({
        template: './src/template.html',
        filename: './hello-ts.html',
        hash: true,
        chunks: ['ts']
      }),
      new webpack.DefinePlugin(envKeys),
    ]
  }

  return webpackInitConfig;
}

module.exports = webpackConfigGenerator;
