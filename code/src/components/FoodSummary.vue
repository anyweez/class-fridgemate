<template>
    <div class="FoodSummary">
        <img :src="food.img">
        <div class="FoodSummary--foodfacts">
            <p class="title">{{ food.name }} {{ foodLabel }}</p>
            <div>
                <p><button @click="onSelect(food)">Add to fridge</button></p>
                <p><button @click="addToList(food)">Add to shopping list</button></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "FoodSummary",
  props: ['food', 'onSelect'],

  computed: {
      foodLabel() {
          const found = this.$store.state.shopping.find(item => item.id === this.food.id);

          return found !== undefined ? '(on list)' : '';
      },
  },
  methods: {
      addToList(food) {
          this.$store.commit('AddToShoppingList', food);
      }
  },
};
</script>

<style lang="scss" scoped>
.FoodSummary {
    display: flex;
    flex-direction: row;
    margin: 5px 0;

    .FoodSummary--foodfacts {
        text-align: left;

        div {
            display: flex;
            flex-direction: row;
        }

        .title {
            font-weight: bold;
            margin-top: 8px;
        }
    }
}

img {
  width: 60px;
  height: 60px;

  margin-right: 10px;
}
</style>