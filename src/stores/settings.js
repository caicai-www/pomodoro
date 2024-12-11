import { defineStore } from 'pinia'

//                                             ↓id , {內容}
export const useSettingsStore = defineStore('settings', {
  state: () => ({
    alarms: [
      { id: 1, name: '鬧鐘', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
      { id: 2, name: 'yay', file: new URL('@/assets/yay.mp3', import.meta.url).href },
    ],
    selected: 1,
  }),
  // 類似computed
  getters: {
    // 把鈴聲 selected1 網址抓出來
    selectedFile() {
      const i = this.alarms.findIndex((alarm) => alarm.id === this.selected)
      return this.alarms[i].file
    },
  },
  // 存在localstorage的設定
  persist: {
    // 存進localstorage的自定義key
    key: 'pomodoro-settings',
    pick: ['selected'],
  },
})
