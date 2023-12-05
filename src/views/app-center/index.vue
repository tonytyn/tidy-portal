<script lang="ts">
export default {
  name: 'AppList'
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
const msg =
  '应用使用形式1：所有人无需申请即可使用2：用户自己申请，管理员同意后可以使用3：管理员邀请后可以使用'
const desc =
  '这里是应用的简要介绍，应该让用户简洁直观的了解应用的大致功能。文字不要太多，超出后会隐藏'
// const bodyStyle = {
//   height: '100px'
// }
const activeNames = ref(['usual'])
const dialogVisible = ref(false)
const viewDetail = () => {
  dialogVisible.value = true
}
const enter = () => {
  console.log('吃了吗')
}
</script>
<template>
  <a-collapse v-model:activeKey="activeNames">
    <a-collapse-panel key="usual" header="已授权">
      <a-row :gutter="30" style="margin: 12px">
        <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <a-card shadow="hover" class="mycard">
            <a-space wrap fill>
              <span class="title"> 系统名称不能超过一行 </span>

              <span class="brief">{{ desc }}</span>
              <span>
                <a @click="viewDetail"> 详情 </a>
                <a-divider direction="vertical" />
                <a @click="viewDetail">取消收藏</a>
              </span>
              <a-button @click="enter" type="primary">进入应用</a-button>
            </a-space>
          </a-card>
        </a-col>
        <a-col v-for="index of 7" :key="index" :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <a-card shadow="hover" class="mycard">
            <a-space wrap fill>
              <span class="title"> 考勤系统 </span>

              <span class="brief">{{ desc }}</span>
              <span>
                <a @click="viewDetail">详情</a>
              </span>
              <a-button @click="enter" type="primary">进入应用</a-button>
            </a-space>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <a-card shadow="hover" class="mycard">
            <a-space wrap fill>
              <span class="title"> 设备点检系统 </span>
              <span class="brief">{{ desc }}</span>
              <span>
                <a @click="viewDetail"> 详情 </a>
                <a-divider direction="vertical" />
                <a @click="viewDetail"> 收藏 </a>
              </span>
              <a-button @click="enter" type="primary">进入应用</a-button>
            </a-space>
          </a-card>
        </a-col>
      </a-row>
    </a-collapse-panel>
    <a-collapse-panel key="unusual" header="未授权">
      <a-row :gutter="30">
        <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <a-card shadow="hover" class="mycard">
            <a-space wrap fill>
              <span class="title">一个新奇的应用 </span>
              <span class="brief">这个应用您还没有使用权限,需要联系张三进行权限申请</span>
              <span>
                <a @click="viewDetail">详情</a>
              </span>
              <a-button @click="enter" type="primary">申请使用</a-button>
            </a-space>
          </a-card>
        </a-col>
      </a-row>
    </a-collapse-panel>
  </a-collapse>
  <!-- </ContentWrap> -->
  <a-modal v-model:open="dialogVisible" title="应用详情">
    <ul>
      <li>应用功能：人力资源部</li>
      <li>目标用户：集团所有正式员工</li>
      <li>创建人：张三</li>
      <li>负责部门：人力资源部</li>
      <li>联系方式：钉钉搜索12345677654321，电话：138888438</li>
      <li>{{ msg }}</li>
    </ul>
    <template #footer>
      <a-button @click="dialogVisible = false"> 关闭 </a-button>
    </template>
  </a-modal>
</template>
<style lang="less" scoped>
.mycard {
  margin-bottom: 20px;
  border-radius: 20px;
  transition: all 0.5s;

  .title {
    display: -webkit-box;
    /* 超出范围隐藏 */
    overflow: hidden;
    font-weight: bolder;
    /* 文字超出用省略号 */
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .brief {
    display: -webkit-box;
    overflow: hidden;
    font-size: smaller;
    color: slategray;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
}

.mycard:hover {
  transform: scale(1.1);
}
</style>
