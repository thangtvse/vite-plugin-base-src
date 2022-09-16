import fs from 'fs';
import path from 'path';

export interface IViteBaseSrcPlugin {
  name: string
  resolveId: (source: string) => string | null
}

const ViteBaseSrcPlugin = ({
  src,
  fileExtensions,
}: {
  src: string,
  fileExtensions?: string[]
}): IViteBaseSrcPlugin => ({
  name: 'vite-plugin-base-src',
  resolveId(source) {
    const extensions = fileExtensions || ['.js', '.ts', '.jsx', '.tsx'];

    if (path.extname(source)) {
      // Path has extension
      const filePath = path.resolve(src, source);
      if (fs.existsSync(filePath)) {
        return filePath;
      }
    } else {
      // Path has no extension
      for (const ext of extensions) {
        const filePath = path.resolve(src, source + ext);
        const indexFilePath = path.resolve(src, source, `index${ext}`);

        // Path points to a file
        if (fs.existsSync(filePath)) {
          return filePath;
        }

        /// Path points to a folder
        if (fs.existsSync(indexFilePath)) {
          return indexFilePath;
        }
      }
    }

    return null;
  },
});

export default ViteBaseSrcPlugin
