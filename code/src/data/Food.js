
let next_id = 0;

function MakeFood(name, age, img, upc) {
    return {
        id: next_id++,
        name,
        age,
        img,
        upc,
    };
}

export default {
    MakeFood,
};