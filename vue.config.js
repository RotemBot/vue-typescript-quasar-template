const webpack = require('webpack')
const env = {
    SERVER_URL: "'" + (process.env.SERVER_URL || 'http://localhost:1337') + "'",
    LOGGER: 'console'
}

console.log("Env: ", env)

module.exports = {
    pluginOptions: {
        quasar: {
            importStrategy: 'manual',
            rtlSupport: true
        }
    },
    transpileDependencies: [
        'quasar'
    ],
    runtimeCompiler: true,
    lintOnSave: false,

    configureWebpack: {

        plugins: [
            new webpack.DefinePlugin({
                __SERVER_URL: env.SERVER_URL,
                __LOGGER: env.LOGGER
            })
        ],
        node: {
            fs: 'empty'
        }
    },

    devServer: {
        public: '0.0.0.0:8080',
        disableHostCheck: true
    }
}
