const cjs = require('@rollup/plugin-commonjs')
const {babel} = require('@rollup/plugin-babel')
const {terser} = require('rollup-plugin-terser')
const replace = require('rollup-plugin-replace')

const env = process.env.NODE_ENV
const isProd = env==='production'
let plugins = [
  replace({'process.env.NODE_ENV': JSON.stringify(env),}),
  cjs(),
  babel({babelHelpers: "bundled", exclude:'node_modules/**'}),
  // terser(),
];
if( isProd) plugins.push( terser())
module.exports = {
  input:'./src/index.js',
  plugins: plugins,
  output:[{
    format:'umd',
    name:'useOnion',
    file:'dist/use-onion.umd.js',
  },
  {
    format:'cjs',
    file:'dist/use-onion.common.js',
  },
  {
    format:'es',
    file:'dist/use-onion.es.js',
  },
  ]
}