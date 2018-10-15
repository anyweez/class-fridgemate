<template>
    <div class="FridgeList">
        <h3>Fridge</h3>

        <div class="FridgeList--foodlist">
            <ul>
                <li :key="food.id" v-for="food in foods">
                    <FoodSummaryFull :food="food" :onRequest="addToShoppingList" :onRemove="removeFromFridge" />
                </li>
            </ul>
        </div>
    </div>
</template> 

<script>
import FoodSummaryFull from './FoodSummaryFull.vue'

export default {
    name: 'FridgeList',
    components: {
        FoodSummaryFull,
    },
    computed: {
        foods() {
            return this.$store.state.fridge;
        }
    },
    methods: {
        addToShoppingList(item) {
            this.$store.commit('AddToShoppingList', item);
        },

        removeFromFridge(item) {
            this.$store.commit('RemoveFromFridge', item);
        },
    },
};
</script>
 

<style lang="scss" scoped>
.FridgeList {
    padding: 5px;
    background-color: #0cc;
}

ul {
    list-style-type: none;
    padding-left: 0;
}
</style>