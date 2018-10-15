<template>
    <div class="FoodSearch">
        <h3>Available foods</h3>
        
        <input type="text" placeholder="Search...">

        <div class="FoodSearch--foodbox">
            <ul>
                <li :key="food.id" v-for="food in foods.slice(0, 5)">
                    <FoodSummary :food="food" :onSelect="addToFridge" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import FoodSummary from './FoodSummary.vue'

import Food from '../data/Food'

export default {
    name: 'FoodSearch',
    components: {
        FoodSummary,
    },
    data() {
        return {
            foods: this.$store.state.items,
        };
    },
    methods: {
        addToFridge(item) {
            this.$store.commit('AddToFridge', item);
        },
    }
};
</script>

<style lang="scss" scoped>
.FoodSearch {
    padding: 5px;
    background-color: #cc0;
}

ul {
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
}
</style>