import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-node-externals';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        sourcemap: true,
        dir: 'dist',
        preserveModules: true,
      },
    ],
    plugins: [
      external(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
];
