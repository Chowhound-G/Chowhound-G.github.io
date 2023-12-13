---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "小G的成长之路"
  text: "The Path of Grow"
  tagline: 发现新世界的人，刚开始都是走错了路。
  actions:
    - theme: brand
      text: 开始查看
      link: /markdown-examples
    - theme: alt
      text: 关于小G
      link: /aboutme
  image: 
    src: /avatar.jpg
  
---


<!-- 自定义组件 -->
<script setup>
import home from './components/home.vue';
</script>

<home />


