/* 
在配置postcss插件时注意事项
1.通过require引入插件时，postcss.config.js需要将后缀名改为.cjs 因为这是commonjs的格式
  require('tailwindcss')({})需要配置参数就加上({}) 用来配置
2.plugins有两种定义格式，一种是数组,一种是对象
  数组写法如下：
  对象写法 plugins:{tailwindcss:{},autoprefixer:{}}
  区别 数组写法是postcss插件需要以函数形式调用
*/
import mobile from "postcss-mobile-forever";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    mobile({
      viewportWidth: 375, //设计稿宽度
      enableMediaQuery: true,
      desktopWidth: 375,//桌面最大宽度
      minDesktopDisplayWidth: 640, //屏幕尺寸超过640px时，设置最大屏幕尺寸为 desktopWidth 值
      border: true,//边框
      appContainingBlock: 'auto',//重置fixed定位元素为 appSelector
      appSelector: ".root-class", //页面最外层选择器，例如“#app”，用于设置在桌面端和移动端横屏时的居中样式
    }),
  ],
};
