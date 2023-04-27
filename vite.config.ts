import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 给css配置 
  css: {
    // 给css的预处理器配置
    preprocessorOptions: {
      // 给css的预处理器配置sass
      scss:{
        //配置路径
        additionalData : '@import "./src/bem.scss";'
      }
    }
  }
})
