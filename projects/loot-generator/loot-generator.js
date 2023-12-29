let roll1;
let roll2;
let roll3;

const rollButton = document.getElementById('d100');
const itemDisplay = document.getElementById('item');
const linkDisplay = document.getElementById('link');

const rollLoot = () => {
    roll1 = rollD100();
    console.log(`Roll: ${roll1}`);

    if (roll1 == 1) {
        console.log('Category: Cursed');
    } else if (roll1 <= 11) {
        //console.log('Category: Nothing');
        itemDisplay.innerHTML = `You Didn't Find Anything`;
        linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
    } else if (roll1 <= 26) {
        //console.log('Category: Health Potion');
        roll2 = rollD4();

        if (roll2 == 1) {
            itemDisplay.innerHTML = `${roll2} Potion of Healing`;
        } else {
            itemDisplay.innerHTML = `${roll2} Potions of Healing`;
        }

        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/magic-items/4708-potion-of-healing" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 42) {
        console.log('Category: Common');
    } else if (roll1 <= 67) {
        console.log('Category: Gold');
        rollGold();
    } else if (roll1 <= 85) {
        //console.log('Category: Consumable');
        roll2 = Math.floor(Math.random() * consumable.length);
        itemDisplay.innerHTML = `${consumable[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${consumable[roll2][1]}" id="link" target="_blank">View Item</a>`;
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

rollButton.addEventListener('click', () => {
    rollLoot();
});