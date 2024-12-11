<template>
  <!-- id=圖層名層 -->
  <svg
    class="digit"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="300px"
    height="344.166px"
    viewBox="0 0 224 344.166"
    enable-background="new 0 0 224 344.166"
    xml:space="preserve"
  >
    <path
      :class="{ active: '02356789'.includes(data) }"
      class="digit-a"
      fill="#FF0000"
      stroke="#FFFFFF"
      stroke-miterlimit="10"
      d="M194.667,13.903c0,7.732-6.755,14-15.086,14H43.086
	c-8.332,0-15.086-6.268-15.086-14l0,0c0-7.732,6.754-14,15.086-14h136.495C187.912-0.097,194.667,6.171,194.667,13.903
	L194.667,13.903z"
    />
    />
    <path
      :class="{ active: '0456789'.includes(data) }"
      class="digit-b"
      fill="#FF0000"
      stroke="#FFFFFF"
      stroke-miterlimit="10"
      d="M14.278,12.249c7.732,0,14,6.269,14,14v126.667
	c0,7.732-6.268,14-14,14l0,0c-7.732,0-14-6.268-14-14V26.249C0.278,18.518,6.546,12.249,14.278,12.249L14.278,12.249z"
    />
    <path
      :class="{ active: '2345689'.includes(data) }"
      class="digit-c"
      fill="#FF0000"
      stroke="#FFFFFF"
      stroke-miterlimit="10"
      d="M194.667,172.463c0,7.731-6.755,14-15.086,14H43.086
	c-8.332,0-15.086-6.269-15.086-14l0,0c0-7.732,6.754-14,15.086-14h136.495C187.912,158.463,194.667,164.73,194.667,172.463
	L194.667,172.463z"
    />
    <path
      :class="{ active: '0235689'.includes(data) }"
      class="digit-d"
      fill="#FF0000"
      stroke="#FFFFFF"
      stroke-miterlimit="10"
      d="M194.667,331.022c0,7.731-6.755,14-15.086,14H43.086
	c-8.332,0-15.086-6.269-15.086-14l0,0c0-7.731,6.754-14,15.086-14h136.495C187.912,317.022,194.667,323.291,194.667,331.022
	L194.667,331.022z"
    />
    <path
      :class="{ active: '0268'.includes(data) }"
      class="digit-e"
      fill="#FF0000"
      stroke="#FFFFFF"
      stroke-miterlimit="10"
      d="M14.778,176.249c7.732,0,14,6.269,14,14v126.667
	c0,7.732-6.268,14-14,14l0,0c-7.732,0-14-6.268-14-14V190.249C0.778,182.518,7.046,176.249,14.778,176.249L14.778,176.249z"
    />
    <path
      :class="{ active: '01234789'.includes(data) }"
      class="digit-f"
      fill="#FF0000"
      stroke="#FFFFFF"
      stroke-miterlimit="10"
      d="M209.779,12.249c7.731,0,14,6.269,14,14v126.667
	c0,7.732-6.269,14-14,14l0,0c-7.732,0-14-6.268-14-14V26.249C195.779,18.518,202.046,12.249,209.779,12.249L209.779,12.249z"
    />
    <path
      :class="{ active: '013456789'.includes(data) }"
      class="digit-g"
      fill="#FF0000"
      stroke="#FFFFFF"
      stroke-miterlimit="10"
      d="M210.279,176.249c7.731,0,14,6.269,14,14v126.667
	c0,7.732-6.269,14-14,14l0,0c-7.732,0-14-6.268-14-14V190.249C196.279,182.518,202.546,176.249,210.279,176.249L210.279,176.249z"
    />
    <circle
      id="c2"
      :class="{ active: data === ':' }"
      fill="#FF0000"
      cx="113.583"
      cy="99"
      r="20.5"
    />
    <circle
      id="c1"
      :class="{ active: data === ':' }"
      fill="#FF0000"
      cx="113.583"
      cy="253.5"
      r="20.5"
    />
  </svg>
</template>

<script setup>
// 定義digit元件要收那些資料

defineProps({
  data: {
    type: String,
    default() {
      return ''
    },
  },
  // 字要呈現什麼顏色
  color: {
    type: String,
    default() {
      return 'red'
    },
  },
})
</script>

<style scoped lang="sass">
.digit
  width: 100px
  height:115px
  margin:3px
  filter: drop-shadow(5px 5px 10px #ff5b35)

path, circle
  // fill => svg的填滿 預設是透明
  fill: transparent
  // 變成傳入的顏色
  &.active
    // 把v-bind跟css的值和vue的變數做綁定
    fill: v-bind(color)
</style>
