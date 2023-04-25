<template>
    <div>
        <el-table :data="shopObj.shopList" stripe style="width: 100%" :header-cell-style="{ 'text-align': 'center' }">
            <el-table-column prop="name" label="名称" width="100" align="center" />
            <el-table-column prop="price" label="单价" width="100" align="center" />
            <el-table-column prop="num" label="数量" width="200" align="center">
                <template #default="scope">
                    <span><el-button size="small" type="danger" circle @click="calc(scope.row, false)">-</el-button></span>
                    {{ scope.row.num }}
                    <span><el-button size="small" type="success" circle @click="calc(scope.row, true)">+</el-button></span>
                </template>
            </el-table-column>
            <el-table-column prop="count" label="小计" width="100" align="center">
                <template #default="scope">
                    <span>
                        {{ scope.row.price * scope.row.num }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column prop="count" label="操作" width="100" align="center">
                <template #default="scope">
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button class="mt-4" style="width: 50%">总价: {{ shopObj.totalFee }}</el-button>
    </div>
</template>

<script setup lang='ts'>
import { reactive, computed, Ref } from 'vue';
type Shop = {
    name: string,
    price: number,
    num: number,
    count: number
}
type ShopC = {
    shopList: Shop[],
    totalFee: Ref
}
const shopObj = reactive<ShopC>({
    shopList: [{
        name: '耳机',
        price: 100,
        num: 1,
        count: 0
    }, {
        name: '显示器',
        price: 200,
        num: 1,
        count: 0
    }, {
        name: '音响',
        price: 300,
        num: 1,
        count: 0
    }],
    totalFee: 0
});
const handleDelete = (index: number, row: Shop) => {
    shopObj.shopList.splice(index, 1);
    console.log(index, row);
}
const calc = (row: Shop, type: boolean) => {
    if (!type && row.num > 1) {
        row.num--
    }
    if (type && row.num < 100) {
        row.num++
    }
}

// 使用computed 里面的值变化都可以监听到 同步变化
shopObj.totalFee = computed<number>(() => {
    return shopObj.shopList.reduce((prev, next) => {
        return prev + (next.num * next.price);
    }, 0);
});

</script>

<style scoped></style>