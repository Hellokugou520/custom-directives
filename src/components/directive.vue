/* 
 * create date:2021-3-22
 * desc:自定义指令写法
 */
<template>
  <div
    class="main"
    v-nav-current="{
      curIndex,
      className: 'nav-item',
      activeClass: 'activeClass'
    }"
  >
    <p class="tip">自定义指令写法</p>
    <div class="box">
      <div
        class="nav-item"
        v-for="(item, index) in items"
        :key="index"
        @click="pick(index)"
      >
        {{ items[index] }}
      </div>
    </div>
  </div>
</template>

<script>
import navCurrent from '@/directives/navCurrent'
export default {
  name: 'DirecTive',
  directives: {
    navCurrent
  },
  data () {
    return {
      curIndex: 0,
      items: [
        '选项1',
        '选项2',
        '选项3',
        '选项4',
      ]
    }
  },
  methods: {
    pick (index) {
      this.curIndex = index
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}
.tip {
  text-align: center;
  font-size: 20px;
}
.box {
  margin: 50px auto;
  width: 400px;
  height: 50px;
  border: 3px solid #000;
  display: flex;
  justify-content: center;
}

.nav-item {
  width: 25%;
  text-align: center;
  line-height: 50px;
}

.activeClass {
  background-color: #000;
  color: #fff;
}
</style>
