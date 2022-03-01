# getting start

## 插件开发

1、启动 lerna 包管理，进行包的安装即依赖处理
```bash
yarn bootstrap
```

2、启动插件打包 
```bash
yarn start:plugins
```

启动插件打包后，新起终端，继续往下执行。

3、启动示例应用
```bash
yarn start:examples
```

4、文档构建
```bash
yarn docs
```


## 测试/上线部署

静态资源构建
1、启动 lerna 包管理，进行包的安装即依赖处理
```bash
yarn bootstrap
```

2、启动插件打包
```bash
yarn start:plugins
```

3、
```bash
#进入静态资源目录
cd online

#开启http服务，以下启动服务的方式可被替换
python -m SimpleHTTPServer
```
