const temp = {
    bacon: {type: "meat"},
    egg: {type: "chicken"},
    milk: {type: "dairy"},
    bagel: {type: "bread"},
    banana: {type: "fruit"},
    honey: {type: "idfk"},
    cheese: {type: "dairy"},
    salt: {type: "spice"},
    yogurt: {type: "dairy"},
    ham: {type: "meat"}
};
const ingredients = new Map();
for(let i = 0; i < Object.keys(temp).length; i++){
    ingredients.set(Object.keys(temp)[i], temp[Object.keys(temp)[i]]);
}
export default ingredients;