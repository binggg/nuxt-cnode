# nuxt-cnode

> Nuxt.js project

### 技术栈
- vue
- vue-router
- vuex
- nuxt
- axios
- simplemde
- ES6/7
- stylus

### 目录结构
```
├─npm-shrinkwrap.json
├─nuxt.config.js                # nuxt配置文件
├─package.json
├─README.md
├─utils
|   ├─axios.js                  # axios封装
|   ├─index.js                  # 工具函数
|   └scroll.js                  # 滚动条操作函数
├─store                         # store
|   ├─actions.js
|   ├─getters.js
|   ├─index.js
|   ├─mutation-types.js
|   ├─mutations.js
|   ├─README.md
|   └state.js
├─static                        # 静态资源
|   ├─favicon.ico
|   └README.md
├─plugins                       # vue实例化之前执行的插件
|    ├─component.js             # 注册全局组件
|    ├─filter.js                # 注册全局filter
|    ├─README.md                
|    └ssrAccessToken.js         # 服务端渲染时保存access_token,供服务端请求时的api获取
├─pages                         # 页面级组件
|   ├─index.vue                 # 首页
|   ├─login.vue                 # 登录页
|   ├─README.md 
|   ├─user
|   |  ├─messages.vue           # 未读消息页
|   |  ├─_id
|   |  |  ├─index.vue           # 用户信息页
|   |  |  └collections.vue      # 用户收藏的主题页
|   ├─topic
|   |   ├─create.vue            # topic创建页，复用为编辑页
|   |   ├─_id
|   |   |  └index.vue           # topic详情页
├─mixins                        # mixins
|   └index.js
├─middleware                    # 中间件，页面渲染之前执行
|     ├─auth.js                 # 用户权限中间件
|     ├─checkRoute.js           # 主要是对404页面的重定向
|     └README.md
├─layouts                       # 布局
|    ├─default.vue
|    └README.md
├─filters                       # 全局filter
|    └index.js
├─components
|     ├─alert.vue               # 提示组件
|     ├─backTop.vue
|     ├─clientPanel.vue
|     ├─commentList.vue         # 评论列表
|     ├─commonFooter.vue
|     ├─commonHeader.vue
|     ├─mainLayout.vue          # 页面内的主布局，划分左右两栏
|     ├─markdown.vue            # 基于simplemde封装的组件
|     ├─messageList.vue         # 消息列表
|     ├─pageNav.vue             # 分页组件
|     ├─panel.vue
|     ├─README.md
|     ├─tabHeader.vue
|     ├─topicCreatePanel.vue
|     ├─topicList.vue           # 文章列表
|     └userInfoPanel.vue
├─assets
|   ├─README.md
|   ├─css
|   |  ├─common.styl
|   |  ├─icon.styl
|   |  ├─index.styl
|   |  ├─mixin.styl
|   |  ├─reset.styl
|   |  └simplemdecover.styl
├─api                           # 请求api
|  └index.js
```

### 实现的功能
- 首页
- topic详情页
- 新建topic
- 编辑topic
- 收藏topic
- 用户收藏的topic
- 取消收藏topic
- 新建topic的评论
- 新建评论的评论
- 点赞评论
- 个人信息及用户信息
- 登录/退出
- 未读消息页



## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
