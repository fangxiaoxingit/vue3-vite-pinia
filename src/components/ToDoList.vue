

<template>
  <div class="to-do-list">
    <h2>To Do List</h2>
    <ul v-if="dataList.length">
      <li v-for="(item, i) in dataList" :key="i">
        <div class="left">{{ i + 1 }}.{{ item.dose }}</div>
        <div class="right">
          <i @click="ondelete(item.id)" title="点击删除">删除</i>
        </div>
      </li>
    </ul>
    <h3 v-else>还没有代办事项，在下方添加</h3>
    <div class="add-line">
      <input
        v-model="newItem"
        @keydown.enter="onAdd"
        type="text"
        placeholder="新增，输入回车添加"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useDataListStore } from "./../store/toDoList";

const newItem = ref("");
const store = useDataListStore();

console.log(store, "store");

const dataList = computed(() => store.dataList);

//添加
const onAdd = () => {
  if (!newItem.value) {
    alert("请输入添加事项");
    return;
  }
  store.add({ id: new Date().getTime(), dose: newItem.value });
  newItem.value = "";
  window.scrollTo(0, document.body.scrollHeight);
};
// 删除
const ondelete = (id) => {
  store.delete(id);
};
</script>
<style lang="less" scoped>
.to-do-list {
  width: 500px;
  margin: 0 auto;
  > h2 {
    position: sticky;
    top: 0;
    background-color: #fff;
  }
  > ul {
    margin: 0;
    padding: 0;
    li {
      position: sticky;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      font-size: 14px;
      border-bottom: 1px solid #cccccc48;
      background-color: #fff;
      > .left {
        width: calc(100% - 60px);

        text-align: left;
        word-break: break-all;
        letter-spacing: 1px;
      }
      > .right {
        width: 50px;
        > i {
          color: rgb(240, 131, 131);
          cursor: pointer;
        }
      }
    }
    li:hover {
      transition: all 500ms ease-in-out;
      border-bottom: 1px solid rgb(1, 148, 99);
    }
  }
  h3 {
    color: #ccc;
  }
  > .add-line {
    width: 100%;
    position: sticky;
    bottom: 0;
    > input {
      width: 100%;
      padding: 20px 10px;
      outline: none;
      font-weight: bold;
      border: 0;
      font-size: 15px;
      color: rgb(10, 170, 50);
      border-bottom: 1px solid #cccccc48;
    }
  }
}
</style>
