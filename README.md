# ng-antd

## 处理项目中ng1和react混用的场景下对loaders和打包处理
    在使用本工具需要ng1相关代码使用.js后缀react相关代码使用.jsx后缀
    先定义好入口出口文件和一些配置，然后调用工具提供的方法添加loaders和分割包方法

## ng1的依赖注入问题
    需要配合注释 /* @ngInject */
## ng1(.js)和react(.jsx)分开打包