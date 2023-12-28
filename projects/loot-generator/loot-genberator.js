let roll1;
let roll2;

const rollD100 = (roll1, roll2) => {
    roll1 = Math.ceil(Math.random() * 100);

    if (roll1 <= 5) {
        console.log('Nothing');
    } else if (roll1 <= 25) {
        roll2 = Math.floor(Math.random() * common.length);
        console.log('Common');
        console.log(`Item: ${common[roll2][0]}`)
        console.log(`Link: ${common[roll2][1]}`)
    } else if (roll1 <= 40) {
        console.log('Consumable');
    } else if (roll1 <= 50) {
        console.log('Uncommon');
    } else if (roll1 <= 70) {
        console.log('Gold');
        console.log('1d12 x Encounter CR or Player Level')
    } else if (roll1 <= 85) {
        console.log('Healing Potion');
        console.log('1d4 Healing Potions')
    } else if (roll1 <= 93) {
        console.log('Rare');
    } else if (roll1 <= 97) {
        console.log('Very Rare');
    } else if (roll1 <= 99) {
        console.log('Cursed');
    } else {
        console.log('Legendary');
    }
};

rollD100();