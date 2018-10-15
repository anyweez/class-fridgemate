import Vue from 'vue'
import Vuex from 'vuex'

import Food from '../data/Food'

Vue.use(Vuex);

const state = {
    items: [
        Food.MakeFood("Cottage cheese", 4, "http://cdn.shopify.com/s/files/1/2836/2982/products/cottage-cheese-1_grande.jpg?v=1529434175"),
        Food.MakeFood("Parsley", 10, "https://www.organicfacts.net/wp-content/uploads/parsley.jpg"),
        Food.MakeFood("Chicken soup", 30, "https://www.yellowblissroad.com/wp-content/uploads/2017/09/Best-Homemade-Chicken-Soup-fb-2.jpg"),
    ],                  // all known items
    fridge: [],         // items that are in the fridge
    shopping: [],       // items on the shopping list
    history: [],        // records of actions that changed either of the above arrays
};

const mutations = {
    AddToFridge(state, item) {
        state.fridge.push(item);
    },

    RemoveFromFridge(state, item) {
        state.fridge = state.fridge.filter(f => f.id !== item.id);
    },

    AddToShoppingList(state, item) {
        state.shopping.push(item);
    }
};

/**
 * Define STATE (data) and MUTATIONS (functions to modify state) 
 */
const store = new Vuex.Store({
    state: state,
    mutations: mutations,
});

export default store;