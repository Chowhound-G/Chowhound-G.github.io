<template>
    <div>
      <!-- 显示图标 -->
      <div class="page-icon">
        <img :src="iconPath" alt="Page Icon" />
      </div>
  
      <!-- 页面的其余部分 -->
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      iconPath() {
        // 如果 Frontmatter 中指定了图标，就使用它，否则使用默认图标
        return this.$page.frontmatter.icon || '/favicon.ico';
      }
    }
  };
  </script>
  
  <style>
  .page-icon img {
    /* 图标的样式 */
  }
  </style>
  