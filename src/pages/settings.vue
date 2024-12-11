<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">鈴聲設定</h1>
      </v-col>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>名稱</th>
              <th>試聽</th>
              <th>選擇</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alarm in settings.alarms" :key="alarm.id">
              <td>{{ alarm.name }}</td>
              <td>
                <audio :src="alarm.file" controls></audio>
              </td>
              <td>
                <v-radio-group v-model="settings.selected" hide-details>
                  <v-radio :value="alarm.id"></v-radio>
                </v-radio-group>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
// 第一種寫法:definePage
import { definePage } from 'vue-router/auto'

// 改標題title的名字
/* router index.js檔案也要新增
router.afterEach((to) => {
  document.title = to.meta.title + ' | 番茄鐘'
}) */
definePage({
  meta: {
    title: '設定',
  },
})

const settings = useSettingsStore()
</script>

/* 第二種寫法:
<route lang="json">
{
  "meta": {
    "title": "設定"
  }
}
</route>

第三種寫法:
<route lang="yaml">
meta:
  title: 設定
</route>
*/
