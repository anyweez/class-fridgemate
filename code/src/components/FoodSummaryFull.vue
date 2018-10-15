<template>
    <div class="FoodSummaryFull">
        <div class="FoodSummaryFull--body">
            <img :src="food.img">
            <div> 
                <h4>{{ food.name }}</h4>
                <p>{{ food.age }} days old</p>
            </div>
        </div>
        <div class="FoodSummaryFull--actions">
            <ul>
                <li><button @click="onRequest(food)">Request</button></li>
                <li><button @click="onRemove(food)">Remove</button></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FoodSummaryFull',
    props: ['food', 'onRequest', 'onRemove'],
};
</script>

<style lang="scss" scoped>
img {
    width: 96px;
    height: 96px;

    margin: 5px 10px;
    border: 1px solid #ccc;
}

.FoodSummaryFull {
    text-align: left;
    padding: 10px;

    display: flex;
    flex-direction: row;
}

.FoodSummaryFull--body {
    display: flex;
    flex-direction: row;

    width: 80%;
}

.FoodSummaryFull--actions {
    text-align: right;
}

ul {
    list-style-type: none;
    padding: 0;

    display: flex;
    flex-direction: row;
}

button {
    border-style: none;
    background-color: transparent;
    text-decoration: underline;
}
</style>