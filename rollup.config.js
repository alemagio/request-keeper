import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'public/js/index.js',
  output: {
    file: 'dist/bundle.esm.js',
    format: 'esm'
  },
  plugins: [
    resolve({
      browser: true
    }),
    commonjs()
  ]
}
