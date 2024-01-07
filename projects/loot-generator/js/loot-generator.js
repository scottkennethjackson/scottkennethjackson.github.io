let roll1;
let roll2;
let roll3;

const itemDisplay = document.getElementById('item');
const linkDisplay = document.getElementById('link');
const rollButton = document.getElementById('d100');

const rollLoot = () => {
    roll1 = rollD100();
    console.log(`Roll: ${roll1}`);

    if (roll1 == 1) {
        roll2 = Math.floor(Math.random() * cursed.length);

        console.log('Category: Cursed');
        console.log(`Item: ${cursed[roll2][0]}`);

        itemDisplay.innerHTML = `${cursed[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${cursed[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 11) {
        console.log('Category: Nothing');
        console.log('Item: None');

        itemDisplay.innerHTML = `You Didn't Find Anything`;
        linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
    } else if (roll1 <= 26) {
        roll2 = rollD4();

        if (roll2 == 1) {
            itemDisplay.innerHTML = `${roll2} Potion of Healing`;
        } else {
            itemDisplay.innerHTML = `${roll2} Potions of Healing`;
        }

        console.log('Category: Health Potion');
        console.log(`Item: Potion of Healing x ${roll2}`);

        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/magic-items/4708-potion-of-healing" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 42) {
        roll2 = Math.floor(Math.random() * common.length);

        console.log('Category: Common');
        console.log(`Item: ${common[roll2][0]}`);

        itemDisplay.innerHTML = `${common[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${common[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 67) {
        console.log('Category: Gold');

        rollGold();
    } else if (roll1 <= 85) {
        roll2 = Math.floor(Math.random() * consumable.length);

        console.log('Category: Consumable');
        console.log(`Item: ${consumable[roll2][0]}`);

        itemDisplay.innerHTML = `${consumable[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${consumable[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 93) {
        roll2 = Math.floor(Math.random() * uncommon.length);

        console.log('Category: Uncommon');
        console.log(`Item: ${uncommon[roll2][0]}`);

        itemDisplay.innerHTML = `${uncommon[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${uncommon[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 97) {
        roll2 = Math.floor(Math.random() * rare.length);

        console.log('Category: Rare');
        console.log(`Item: ${rare[roll2][0]}`);

        itemDisplay.innerHTML = `${rare[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${rare[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 99) {
        roll2 = Math.floor(Math.random() * veryRare.length);

        console.log('Category: Very Rare');
        console.log(`Item: ${veryRare[roll2][0]}`);

        itemDisplay.innerHTML = `${veryRare[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${veryRare[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else {
        roll2 = Math.floor(Math.random() * legendary.length);
        
        console.log('Category: Legendary');
        console.log(`Item: ${legendary[roll2][0]}`);

        itemDisplay.innerHTML = `${legendary[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${legendary[roll2][1]}" id="link" target="_blank">View Item</a>`;
    }
};

rollButton.addEventListener('click', () => {
    rollLoot();
});