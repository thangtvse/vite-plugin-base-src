import path from 'path';
import ViteBaseSrcPlugin, { IViteBaseSrcPlugin } from '../index';

describe('ViteBaseSrcPlugin', () => {
  let plugin: IViteBaseSrcPlugin;

  describe('Default configuration', () => {
    beforeEach(() => {
      plugin = ViteBaseSrcPlugin({
        src: 'test-src'
      });
  
    })
  
    it('should resolve file name correctly', () => {
      const result = plugin.resolveId('file');
      expect(result).toEqual(path.resolve('test-src', 'file.ts'));
    });
  
    it('should resolve file name with extension correctly', () => {
      const result = plugin.resolveId('folder/style.css');
      expect(result).toEqual(path.resolve('test-src', 'folder', 'style.css'));
    });
  
    it('should resolve folder name correctly', () => {
      const result = plugin.resolveId('folder');
      expect(result).toEqual(path.resolve('test-src', 'folder', 'index.js'));
    });
  
    it('should return null if it can\'t resolve the file', () => {
      const result = plugin.resolveId('something/something');
      expect(result).toBeNull();
    })
  })

  describe('Custom file extensions', () => {
    beforeEach(() => {
      plugin = ViteBaseSrcPlugin({
        src: 'test-src',
        fileExtensions: ['.mjs']
      });
    });

    it('should resolve file name correctly', () => {
      const result = plugin.resolveId('mjs');
      expect(result).toEqual(path.resolve('test-src', 'mjs.mjs'));
    });


    it('should resolve folder name correctly', () => {
      const result = plugin.resolveId('folder');
      expect(result).toEqual(path.resolve('test-src', 'folder', 'index.mjs'));
    });
  

    it('should return null if it can\'t resolve the file', () => {
      const result = plugin.resolveId('file');
      expect(result).toBeNull();
    })
  })
})