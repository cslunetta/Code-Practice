// practice questions
// Given the array of animal objects return a new array containing only the animals that are mammals

//skills tested
// iterating through an array
// accessing properties of an object

const animals = [
    {
        type: "Dog",
        mammal: true,
    },
    {
        type: "Snake",
        mammal: false,
    },
    {
        type: "Cheetah",
        mammal: true,
    },
];

const mammals = [];

for (let i = 0; i < animals.length; i++)
    if (animals[i].mammal) {
        mammals.push(animals[i]);
    }

export const animalResults = () => {
    return console.log(mammals);
};
