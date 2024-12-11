<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">未完成</h1>
      </v-col>
      <v-col cols="8">
        <!-- https://vuetifyjs.com/en/components/text-fields/#anatomy -->
        <!-- clearable可以打叉的按鈕 -->
        <!-- rules=[] 驗證用的陣列 -->
        <!-- click:append 當點到append-icon時會執行的東西 -->
        <v-text-field
          ref="inputTextField"
          v-model="input"
          append-icon="mdi-plus"
          label="新增事項"
          clearable
          :rules="[rules.required, rules.length]"
          @keydown.enter="onInputSubmit"
          @click:append="onInputSubmit"
        ></v-text-field>
        <v-table>
          <thead>
            <tr>
              <th>事項</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="items.length === 0">
              <td colspan="2">沒有項目</td>
            </tr>
            <tr v-for="(item, i) in items" :key="item.id">
              <td>
                <v-text-field
                  v-show="item.edit"
                  ref="editTextField"
                  v-model="item.model"
                  :rules="[rules.required, rules.length]"
                  autofocus
                  @keydown.enter="onEditSubmit(item.id, i)"
                ></v-text-field>
                <span v-show="!item.edit">{{ item.text }}</span>
              </td>
              <td>
                <template v-if="item.edit">
                  <v-btn class="button" icon="mdi-check" @click="onEditSubmit(item.id, i)"></v-btn>
                  <v-btn class="button" icon="mdi-undo" @click="cancelEditItem(item.id)"></v-btn>
                </template>
                <template v-else>
                  <v-btn class="button" icon="mdi-pencil" @click="editItem(item.id)"></v-btn>
                  <v-btn class="button" icon="mdi-delete" @click="delItem(item.id)"></v-btn>
                </template>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>

      <v-col cols="12">
        <h1 class="text-center">已完成</h1>
      </v-col>
      <v-col cols="8">
        <v-table>
          <thead>
            <tr>
              <th>事項</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="finishedItems.length === 0">
              <td colspan="2">沒有項目</td>
            </tr>
            <tr v-for="item in finishedItems" :key="item.id">
              <td>{{ item.text }}</td>
              <td>
                <v-btn class="button" icon="mdi-delete" @click="delFinishedItem(item.id)"></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useListStore } from '@/stores/list'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const list = useListStore()
const { addItem, editItem, delItem, confirmEditItem, cancelEditItem, delFinishedItem } = list
const { items, finishedItems } = storeToRefs(list)

const input = ref('')
// 在v-text內建立一個同名的ref 下面也需要宣告 ref初始值是 null
const inputTextField = ref(null)
// 會是陣列
const editTextField = ref([])

const rules = {
  required: (value) => {
    return Boolean(value) || '欄位必填'
  },
  length: (value) => {
    return value.length >= 3 || '必須三個字以上'
  },
}

const onInputSubmit = () => {
  // 先確認inputTextField.value.isValid有沒有驗證通過
  console.log(inputTextField.value.isValid)
  if (!inputTextField.value.isValid) return
  addItem(input.value)
  /*   input.value = '' 不能直接變成空的會直接觸發驗證 */
  inputTextField.value.reset()
}

const onEditSubmit = (id, i) => {
  if (!editTextField.value[i].isValid) return
  confirmEditItem(id)
}
</script>

<route lang="yaml">
meta:
  title: 清單
</route>
