/**
 *  Se exporta asi mismo sin nombre
 */

const htmlWebPackPlugin = require('html-webpack-plugin'),
    miniCssExtractPlugin = require('mini-css-extract-plugin'),
    AsyncChunkNames = require('webpack-async-chunk-names-plugin'),
    cleanWebpackPlugin = require('clean-webpack-plugin'),
    //autoprefixer = require('autoprefixer'),
    path = require('path')

module.exports = {
    entry: //'./src/index.js',
    { // En automatico busca src/index.js
        // Ejm cuando carga del servidor diferentes rutas (no SPA)
        // js: y vanilla: en este caso son alias y se utilizan en el output [name]
        react: './src/index.js',
        ts: './src/hello_ts.js'
    },
    // inline-source-map -> Activar los sourceMap en linea 
    //                      para saber el error segun la linea
    output: {
        // [chunkhash] ->   Para evitar que se guarde en cache los archivos 
        //                  o generar archivos con versionado
        path: path.resolve(__dirname, 'dist'),
        //filename: 'main.js',
        //chunkFilename: '[name].js',
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
        /* maxEntrypointSize: 512000,
        maxAssetSize: 512000 */
        //hints: false
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
                /* vendor: {
                    // sync + async chunks
                    name: 'vendor',
                    chunks: 'all',
                    // import file path containing node_modules
                    test: /node_modules/,
                    priority: 20
                }, */
                commonsa: {
                  name: 'commons',
                  chunks: 'all',
                  minChunks: 2
                },
                // common chunk
                /* common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'all',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true
                } */
            }
        }
    },
    devServer: {
        historyApiFallback: {disableDotRule: true}
    },
    //devtool: 'inline-source-map', 
    devtool: 'source-map', 
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
                      outputStyle: 'compressed',
                      sourceMap: true,
                    },
                  },
                ],
                    
                //})
                /* use: [
                    'style-loader', // convertir a formato js el codigo css y scss
                    miniCssExtractPlugin.loader, // Extrae css de los archivos js
                    // css-loader -> transforma codigo css a webpack
                    // -- Opciones --
                    // minimize -> compactar codigo
                    // sourceMap -> Mostrar ruta de deteccion de errores
                    //'css-loader?minimize&sourceMap',
                    'css-loader?minimize&sourceMap', // Solo hasta la version 0.28.11
                    'postcss-loader?sourceMap',
                    'resolve-url-loader?sourceMap', // necesario el sourceMap
                    // Extraer el codigo css necesario
                    // -- Opciones --
                    // outputStyle=compressed -> compactar codigo
                    // sourceMap -> Mostrar ruta de deteccion de errores
                    'sass-loader?outputStyle=compressed&sourceMap'
                ] */
            }, 
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i, // i -> mayusculas y minusculas
                use: [ // '[]' corchetes para poner mas de un loader
                    'file-loader?name=assets/[name].[ext]' // para distribuir los archivos+
                    // Optimizacion de imagenes
                    // -- Opciones --
                    // bypassOnDebug -> Si hay error de debug de otro cargador o de tecnologia, 
                    //                  que no interfiera con el procesamiento de las imagenes
                    //'image-webpack-loader?bypassOnDebug' 
                ]
            }, 
            {
                test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
                use: 'file-loader?name=assets/[name].[ext]'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            } 
        ]
    }, //loaders
    plugins: [
        new AsyncChunkNames(),
        new cleanWebpackPlugin(['dist/**/*.*']), // Borra todo en todos los niveles
        new miniCssExtractPlugin({
            filename: '[name].css', // nombre variable del archivo origen
            chunkFilename: '[id].css',// para que no este en cache
            minimize: true
        }),
        /* new htmlWebPackPlugin({
            template: './src/template.html',
            filename: './index.html',
            hash: true,
            chunks: ['react']
        }) */
        new htmlWebPackPlugin({
            //template: path.resolve(__dirname, './dist/index.html'),
            template: './src/template.html', // archivo origen
            //filename: './index.html',  // Carpeta de produccion
            hash: true
            //chunks: ['react']    
        }),
        new htmlWebPackPlugin({
          template: './src/template.html',
          filename: './hello-ts.html',
          hash: true,
          chunks: ['ts'] 
        }),
    ]
}