

<template>
  <div class="container">
    <h2 class="text-2xl fon-bold">To Do List</h2>
    <div class="container flex justify-around text-sm">
      <div @click="onTab(1)" :class="['item', curTab == 1 ? 'active' : '']">
        未完成{{ `（${unDoList.length}）` }}
      </div>
      <div @click="onTab(2)" :class="['item', curTab == 2 ? 'active' : '']">
        已完成{{ `（${doneList.length}）` }}
      </div>
    </div>
    <template v-if="curTab == 1">
      <ul v-if="unDoList.length" class="p-0">
        <li v-for="(item, i) in unDoList" :key="item.id" class="sticky top-90 flex justify-between p-2 border-b-2 border-gray-50">
          <div class="left">{{ i + 1 }}.{{ item.do }}</div>
          <div class="right">
            <label @click="onUpdata(item.id)" class="pr-10">
              <input type="checkbox" name="完成" />
            </label>
            <i @click="onDelete(item.id)" title="点击删除" class="color-red-500">删除</i>
          </div>
        </li>
      </ul>
      <h3 v-else>还没有代办事项，在下方添加</h3>
    </template>
    <template v-else>
      <ul v-if="doneList.length">
        <li v-for="(item, i) in doneList" :key="item.id">
          <div class="left through">{{ i + 1 }}.{{ item.do }}</div>
          <div class="right">
            <i @click="onDelete(item.id)" title="点击删除">删除</i>
          </div>
        </li>
      </ul>
      <h3 v-else>暂无已完成事项</h3>
    </template>

    <div v-if="curTab == 1" class="sticky bottom-0">
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
import { computed, ref, watch } from "vue";
import { useDataListStore } from "../store/toDoList";

const newItem = ref("");
const store = useDataListStore();

console.log(store, "store");

const dataList = computed(() => store.dataList);
const unDoList = ref(dataList.value.filter((v) => !v.done));
const doneList = ref(dataList.value.filter((v) => v.done));

// 需要注意的是，由于 dataList 是一个计算属性，它本身不是一个响应式数据。因此，在 watch 函数中监听 dataList 时，实际上是监听了 dataList.value
watch(dataList.value, (newValue) => {
  console.log(dataList.value, "dataList");
  unDoList.value = dataList.value.filter((v) => !v.done);
  doneList.value = dataList.value.filter((v) => v.done);
});

const curTab = ref(1);

const onTab = (type) => {
  curTab.value = type;
};
//添加
const onAdd = () => {
  if (!newItem.value) {
    alert("请输入添加事项");
    return;
  }
  store.add({ id: new Date().getTime(), do: newItem.value, done: false });
  newItem.value = "";
  window.scrollTo(0, document.body.scrollHeight);
};
// 删除
const onDelete = (id) => {
  console.log(id);
  store.delete(id);
};
const onUpdata = (id) => {
  setTimeout(() => {
    store.updata(id);
  }, 200);
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
  > .tab-list {
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #cccccc6b;
    position: sticky;
    top: 60px;
    background-color: #fff;
    > .item {
      width: 50%;
      padding: 10px 20px;
      cursor: pointer;
    }
    > .active {
      position: relative;
      // border-top: 3px solid rgb(7, 156, 107);
    }
    > .active::before {
      position: absolute;
      content: "";
      left: 50%;
      top: 5px;
      transform: translateX(-20px);
      width: 40px;
      height: 2px;
      border-radius: 2px;
      background-color: rgb(7, 156, 107);
    }
  }
  > ul {
    margin: 0;
    padding: 0;
    li {
      position: sticky;
      top: 90px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      font-size: 14px;
      border-bottom: 1px solid #cccccc48;
      background-color: #fff;
      > .left {
        width: calc(100% - 120px);

        text-align: left;
        word-break: break-all;
        letter-spacing: 1px;
      }
      > .through {
        text-decoration: line-through;
        color: #797979;
      }
      > .right {
        width: 120px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        // opacity: 0;
        > label {
        }
        > i {
          color: rgb(240, 131, 131);
          cursor: pointer;
        }
      }
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
