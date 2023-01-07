#### 基于React18+typescript+pwa支持离线功能的H5火车票购票平台

- 项目描述：基于React18+typescript+pwa实现了支持离线访问的H5移动端火车票购票平台，主要模块包括火车票首页、搜索结果页、座次选择页和订单填写页。使用node.js编写模拟数据接口
- 项目要点：1. 利用service workder实现网络优先，失败缓存的缓存策略缓存Html文件、图片以及非实时性接口，从而实现系统离线可访问功能。2. 使用memo、useMemo和useCallback优化组件性能，防止不必要情况下的重复渲染。3. 以组件化的方式完成页面开发，分离业务组件和公共组件，减少单个组件的代码量 4. 使用redux处理复杂组件之间的数据共享问题
- 项目地址: https://github.com/loveYKY/Train-ticket-platform-pwa

![image](https://user-images.githubusercontent.com/92415895/209093003-fc01bf46-bd26-4f69-9def-28973e18c07c.png)
![image](https://user-images.githubusercontent.com/92415895/209093026-fe54ec41-b02b-4924-9d03-43dda894665a.png)
![image](https://user-images.githubusercontent.com/92415895/209093057-515dfee8-abae-413d-9889-a8c9d2fd3f35.png)
