import { defineConfig } from 'rollup'
import run from '@rollup/plugin-run'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import externals from 'rollup-plugin-node-externals'
import { terser } from 'rollup-plugin-terser'

const dev = process.env.NODE_ENV !== 'production'

export default defineConfig({
    input: 'src/main.ts',
    output: {
        dir: 'bin',
        format: 'cjs'
    },
    plugins: [
        typescript(),
        commonjs(),
        externals(),
        nodeResolve({
            modulesOnly: true,
        }),
        !dev && terser(),
        dev && run()
    ]
})