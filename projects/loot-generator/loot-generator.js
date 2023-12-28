let roll1;
let roll2;

const rollD100 = (roll1, roll2) => {
    roll1 = Math.ceil(Math.random() * 100);
    console.log(`Roll: ${roll1}`)

    if (roll1 == 1) {
        console.log('Category: Cursed');
    } else if (roll1 <= 11) {
        console.log('Category: Nothing');
    } else if (roll1 <= 26) {
        console.log('Category: Health Potion');
    } else if (roll1 <= 42) {
        console.log('Category: Common');

        roll2 = Math.floor(Math.random() * common.length);
        console.log(`Item: ${common[roll2][0]}`)
        console.log(`Link: ${common[roll2][1]}`)
    } else if (roll1 <= 67) {
        console.log('Category: Gold');
    } else if (roll1 <= 85) {
        console.log('Category: Consumable');
    } else if (roll1 <= 93) {
        console.log('Category: Uncommon');
    } else if (roll1 <= 97) {
        console.log('Category: Rare');
    } else if (roll1 <= 99) {
        console.log('Category: Very Rare');
    } else {
        console.log('Category: Legendary');
    }
};

rollD100();