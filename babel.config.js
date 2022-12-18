module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'nativewind/babel',
            require.resolve('expo-router/babel'),
            [
                'module-resolver',
                {
                    alias: {
                        '@components': './src/common/components',
                        '@types': './src/common/types',
                        '@models': './src/common/models',
                        '@utils': './src/common/utils',
                        '@common': './src/common',
                        '@useCases': './src/domain/useCases',
                        '@contexts': './src/domain/contexts',
                        '@assets': './assets',
                        '@view': './src/view',
                    },
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            ],
        ],
    }
}
