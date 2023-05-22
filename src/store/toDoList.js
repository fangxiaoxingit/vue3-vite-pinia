
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
            console.log(value)
            let index = this.dataList.findIndex(item => item.id == value)
            this.dataList.splice(index, 1)
        },
        updata(value) {
            let index = this.dataList.findIndex(item => item.id == value)
            this.dataList[index].done = true
        }
    },
})