module.exports = (api) => {
  api.cache(true)
  return {
    presets: [['@babel/preset-env', { targets: { node: '18' } }], '@babel/preset-typescript'],
    plugins: [
      '@babel/proposal-object-rest-spread',
      [
        'module-resolver',
        {
          alias: {
            '^#(.+)': './src/\\1',
          },
          extensions: ['.ts', '.js', '.json'],
        },
      ],
      [
        '@babel/proposal-decorators',
        {
          legacy: true,
        },
      ],
      ['@babel/proposal-class-properties', { loose: true }],
      ['inline-json-import', {}],
    ],
  }
}
