<template>
    <div class="Fridge">
        <div class="fridge--window">
            <FoodSearch class="sidebar" />
            <FridgeList /> 
        </div>
    </div>
</template>

<script>
import FoodSearch from '../components/FoodSearch' 
import FridgeList from '../components/FridgeList'

export default {
  name: 'app',
  components: {
    FoodSearch,
    FridgeList,
  }
}
</script>

<style lang="scss" scoped>
.fridge--window {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-gap: 10px;
}

.sidebar {

}

</style>