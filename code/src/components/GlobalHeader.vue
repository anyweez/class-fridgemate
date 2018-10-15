<template>
    <div class="GlobalHeader">
        <h1>Fridge Mate</h1>

        <nav>
            <ul>
                <li>Fridge</li>
                <li>Shopping List</li>
                <li>History</li>
            </ul>
        </nav>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>

.GlobalHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;

    background-color: #cccccc;
}

nav ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;

    li {
        margin: 0 8px;
    }
}


</style>