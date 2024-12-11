<template>
  <v-app>
    <v-app-bar class="bg-warning">
      <v-container class="d-flex align-center">
        <v-app-bar-title>番茄鐘</v-app-bar-title>
        <!-- prepend-icon前面的icon -->
        <!-- https://pictogrammers.com/library/mdi/ -->
        <!-- to="" 路由連結 -->
        <v-btn prepend-icon=" mdi-fruit-pineapple" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-fruit-cherries" to="/list">事項</v-btn>
        <v-btn prepend-icon="mdi-fruit-watermelon" to="/settings">設定</v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <!-- ★要寫router-view才會顯示出to分頁內容!! -->
      <!--  slot= 插槽 = 自訂元件內某部分HTML
      v-slot="元件插槽提供的可用變數"
      component = 目前路由應該顯示的元件 -->

      <!-- v-slot :插槽 https://rogeraabbccdd.github.io/F2E-book/vue/basic.html#%E5%85%83%E4%BB%B6-->
      <!-- component 指現在要渲染的元件 -->
      <router-view v-slot="{ Component }">
        <!-- keep-alive裡面包的元件不會被銷毀
       include 指定保留的元件 -->
        <!-- https://cn.vuejs.org/guide/built-ins/keep-alive -->
        <!-- https://vuejs.org/guide/built-ins/keep-alive -->
        <!-- 可以設定那些要快取 只有首頁在倒數,所以只要include首頁就好 -->
        <!-- component = 動態元件
               is = 要使用的元件 -->
        <keep-alive include="index">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>
