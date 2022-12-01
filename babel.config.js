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
                    },
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            ],
        ],
    }
}
