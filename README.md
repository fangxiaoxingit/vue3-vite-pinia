
# Vue 3 + Vite + Pinia

### 尝试使用 [Pinia](http://https://pinia.vuejs.org/ "Pinia") 来实现 todolist
> Pinia
符合直觉的 Vue.js 状态管理库
类型安全、可扩展性以及模块化设计。
甚至让你忘记正在使用的是一个状态库。

`git clone https://github.com/fangxiaoxingit/vue3-vite-pinia.git`

`npm i`

`npm run dev`

#### 尝试使用 [**tailwindcss**](https://tailwindui.com/documentation) 来写 css，总结就是：不要用，原因如下：####

1. 直接导致 class 很长，特别是定义太多样式的，当然你可以说你申明了class，然后在样式文件里面写，但是这么做是不是违背了 tailwindcss 本身在 class 里面直接写的想法?
2. 在实现一些切换显示特别状态的时候，你不得不回归传统class命名一个的写法，不然还是太长了
3. 有一定的学习成本，需要了解如何简写 class 名称，对于不了解 css 开发人员，不友好，官方退出 [**templates**](https://tailwindui.com/templates) 大概率也是为了降低使用门槛