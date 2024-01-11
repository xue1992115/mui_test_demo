<!--
 * @Author: hxx
 * @Date: 2024-01-10 17:36:43
 * @LastEditors: hxx
 * @LastEditTime: 2024-01-11 14:02:34
-->
<template>
  <div class="hello">
    <h1>UI库测试</h1>
    <div class="title01">1、引入的element-ui库</div>
    <div class="title02">button组件</div>
    <el-button type="primary">Primary</el-button>
    <div class="title02">radio组件</div>
    <el-radio v-model="radio" label="1">Option A</el-radio>
    <el-radio v-model="radio" label="2">Option B</el-radio>
    <div class="title02">select组件</div>
    <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="title01">2、引入mui组件库</div>
    <div class="title02">折叠面板</div>
    <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">面板1</a>
            <div class="mui-collapse-content">
                <p>面板1子内容</p>
            </div>
        </li>
    </ul>
    <div class="title02">数字角标</div>
    <span class="mui-badge">1</span>
    <span class="mui-badge mui-badge-primary">12</span>
    <span class="mui-badge mui-badge-success">123</span>
    <span class="mui-badge mui-badge-warning">3</span>
    <span class="mui-badge mui-badge-danger">45</span>
    <span class="mui-badge mui-badge-purple">456</span>
    <div class="title02">按钮</div>
    <button type="button" class="mui-btn">默认</button>
    <button type="button" class="mui-btn mui-btn-primary">蓝色</button>
    <button type="button" class="mui-btn mui-btn-success">绿色</button>
    <button type="button" class="mui-btn mui-btn-warning">黄色</button>
    <button type="button" class="mui-btn mui-btn-danger">红色</button>
    <button type="button" class="mui-btn mui-btn-royal">紫色</button> 
    <div class="mui-slider">
    <div class="title02">轮播图</div>
    <div class="mui-slider-group">
      <div class="mui-slider-item"><a href="#"><img src="1.jpg" /></a></div>
      <div class="mui-slider-item"><a href="#"><img src="2.jpg" /></a></div>
      <div class="mui-slider-item"><a href="#"><img src="3.jpg" /></a></div>
      <div class="mui-slider-item"><a href="#"><img src="4.jpg" /></a></div>
    </div>
  </div>
  <div class="title01">3、引入vant组件库</div>
  <div class="title02">按钮</div>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <div class="title02">cell 单元格</div>
  <van-cell-group>
    <van-cell title="单元格" value="内容"></van-cell>
    <van-cell title="单元格" value="内容"></van-cell>
  </van-cell-group>
  <div class="title02">日历</div>
  <van-cell title="选择单个日期" :value="date" @click="show = true" />
  <van-calendar v-model="show" @confirm="onConfirm" />
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      show: false,
      date: '',
      radio: '1',
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      value: ''
    }
  },
  mounted(){
  },
  methods: {
    toast(){
      window.mui && window.mui.toast('mui.toast')
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  text-align: left;
  margin: 0 auto;
}
.title01 {
  font-size: 24px;
  margin: 20px 2px;
  font-weight: 600;
}
.title02 {
  margin: 10px 0px;
  font-size: 20px;
  font-weight: 600;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
