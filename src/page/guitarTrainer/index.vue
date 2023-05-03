<template>
  <div class="trainer-view">
    <div class="tool-bar">Never Give Up Dream</div>
    <el-row :gutter="12">
      <el-col
        v-for="(item, index) in scaleGroupList"
        :span="8"
        style="padding: 8px"
      >
        <el-card :body-style="{ padding: '80px 0px', fontSize: '4vw' }">
          {{ item }}
        </el-card>
      </el-col>
    </el-row>
    <div class="submit">
      <el-button type="success" @click="generateRandomGuitarGroup"
        >(生成音名)</el-button
      >
    </div>
    <div class="copy-right">@Copyright by KleinBrey 2023</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const routers = useRouter()
const menulist = computed(() => store.state.menulist)
const ruleForm = ref(null)
const scaleGroupList = ref(['AFTD', 'AFTD', 'AFTD', 'AFTD', 'AFTD', 'AFTD'])

function generateRandomGuitarGroup() {
  let letters = 'ABCDEFG' // 字母表
  let group = []
  for (let i = 0; i < 6; i++) {
    let result = ''
    for (let i = 0; i < 5; i++) {
      let randomIndex = Math.floor(Math.random() * letters.length) // 随机生成字母表中的索引
      result += letters[randomIndex] // 将随机生成的字母添加到结果中
    }
    group.push(result)
  }
  scaleGroupList.value = group
}

onMounted(() => {
  generateRandomGuitarGroup()
})
</script>

<style lang="less" scoped>
.trainer-view {
  width: 100%;
  height: 70%;
  padding: 10px;
  box-sizing: border-box;
  .tool-bar {
    height: 70px;
    background-color: #c78f3b;
    font-family: 'Franklin';
    font-size: 40px;
    line-height: 70px;
  }
  .submit {
    padding-top: 30px;
    .el-button {
      min-height: 66px;
      min-width: 300px;
      font-size: 25px;
    }
  }
}
.copy-right {
  position: fixed;
  bottom: 2px;
  left: 50%;
  transform: translate(-50%);
}
</style>
