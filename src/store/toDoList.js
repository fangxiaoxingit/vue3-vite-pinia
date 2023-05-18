
import { defineStore } from "pinia";

export const useDataListStore = defineStore('list', {
    state: () => ({ dataList: [] }),
    getters: {
        getDataList: (state) => state.dataList,
    },
    actions: {
        add(value) {
            this.dataList.push(value)
        },
        delete(value) {
            this.dataList = this.dataList.filter(item => item.id !== value)
        },
        updata(value) {
            let index = this.dataList.findIndex(item => item.id == value)
            this.dataList[index].done = true
        }
    },
})