const cursed = [
    ['Armor of Vulnerability', 'magic-items/5376-armor-of-vulnerability'],
    ['Berserker Axe', 'magic-items/5382-berserker-axe'],
    ['Demon Armor', 'magic-items/4619-demon-armor'],
    ['Shield of Missile Attraction', 'magic-items/4754-shield-of-missile-attraction'],
    ['Sword of Vengence', 'magic-items/5505-sword-of-vengeance']
];

const common = [];

const consumable = [
    ['Potion of Acid Resistance', 'magic-items/5419-potion-of-resistance'],
    ['Potion of Animal Friendship', 'magic-items/4700-potion-of-animal-friendship'],
    ['Potion of Clairvoyance', 'magic-items/4701-potion-of-clairvoyance'],
    ['Potion of Climbing', 'magic-items/4702-potion-of-climbing'],
    ['Potion of Cloud Giant Strength', 'magic-items/5417-potion-of-giant-strength'],
    ['Potion of Cold Resistance', 'magic-items/5419-potion-of-resistance'],
    ['Potion of Diminution', 'magic-items/4703-potion-of-diminution'],
    ['Potion of Fire Breath', 'magic-items/5357-potion-of-fire-breath'],
    ['Potion of Fire Giant Strength', 'magic-items/5417-potion-of-giant-strength'],
    ['Potion of Fire Resistance', 'magic-items/5419-potion-of-resistance'],
    ['Potion of Flying', 'magic-items/4704-potion-of-flying'],
    ['Potion of Force Resistance', 'magic-items/5419-potion-of-resistance'],
    ['Potion of Frost Giant Strength', 'magic-items/5417-potion-of-giant-strength'],
    ['Potion of Gaseous Form', 'magic-items/4705-potion-of-gaseous-form'],
    ['Potion of Greater Healing', 'magic-items/4708-potion-of-healing'],
    ['Potion of Growth', 'magic-items/4707-potion-of-growth'],
    ['Potion of Heroism', 'magic-items/4709-potion-of-heroism'],
    ['Potion of Hill Giant Strength', 'magic-items/5417-potion-of-giant-strength'],
    ['Potion of Invisibility', 'magic-items/4710-potion-of-invisibility'],
    ['Potion of Invulnerability', 'magic-items/5358-potion-of-invulnerability'],
    ['Potion of Lightning Resistance', 'magic-items/5419-potion-of-resistance'],
    ['Potion of Longevity', 'magic-items/5359-potion-of-longevity'],
    ['Potion of Mind Reading', 'magic-items/4711-potion-of-mind-reading'],
    ['Potion of Necrotic Resistance', 'magic-items/5419-potion-of-resistance'],
    ['Potion of Poison', 'magic-items/4712-potion-of-poison'],
    ['Potion of Poison Resistance', 'magic-items/5419-potion-of-resistance'],
    ['Potion of Psychic Resistance', 'magic-items/5419-potion-of-resistance'],
    ['Potion of Radiant Resistance', 'magic-items/5419-potion-of-resistance'],
    ['Potion of Speed', 'magic-items/4714-potion-of-speed'],
    ['Potion of Stone Giant Strength', 'magic-items/5417-potion-of-giant-strength'],
    ['Potion of Storm Giant Strength', 'magic-items/5417-potion-of-giant-strength'],
    ['Potion of Superior Healing', 'magic-items/4708-potion-of-healing'],
    ['Potion of Supreme Healing', 'magic-items/4708-potion-of-healing'],
    ['Potion of Thunder Resistance', 'magic-items/5419-potion-of-resistance'],
    ['Potion of Vitality', 'magic-items/5360-potion-of-vitality'],
    ['Potion of Water Breathing', 'magic-items/4715-potion-of-water-breathing'],
    ['Scroll of Protection Against Aberrations', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Beasts', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Celestials', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Elementals', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Fey', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Fiends', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Plants', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Undead', 'magic-items/5398-scroll-of-protection'],
    ['Spell Scroll, Cantrip', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 1st Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 2nd Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 3rd Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 4th Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 5th Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 6th Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 7th Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 8th Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 9th Level', 'magic-items/5418-spell-scroll']
];

const uncommon = [
    ['Boots of the Winterlands', 'magic-items/4591-boots-of-the-winterlands'],
    ['Gray Bag of Tricks', 'magic-items/4582-bag-of-tricks'],
    ['Mithral Armor', 'magic-items/5381-mithral-armor'],
    ['Periapt of Health', 'magic-items/4692-periapt-of-health'],
    ['Ring of Warmth', 'magic-items/4736-ring-of-warmth'],
    ['Ring of Water Walking', 'magic-items/4737-ring-of-water-walking'],
    ['Rod of the Pact Keeper, +1', 'magic-items/11214-rod-of-the-pact-keeper'],
    ['Rust Bag of Tricks', 'magic-items/4582-bag-of-tricks'],
    ['Tan Bag of Tricks', 'magic-items/4582-bag-of-tricks'],
    ['Wand of the War Mage, +1', 'magic-items/34712-wand-of-the-war-mage'],
    ['Weapon, +1', 'magic-items/5400-weapon-1']
];

const rare = [
    ['Belt of Dwarvenkind', 'magic-items/4584-belt-of-dwarvenkind'],
    ['Belt of Hill Giant Strength', 'magic-items/5372-belt-of-giant-strength'],
    ['Elven Chain', 'magic-items/4631-elven-chain'],
    ['Horn of Valhalla, Brass', 'magic-items/5414-horn-of-valhalla'],
    ['Horn of Valhalla, Silver', 'magic-items/5414-horn-of-valhalla'],
    ['Ring of Acid Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Cold Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Fire Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Force Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Lightning Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Necrotic Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Poison Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Psychic Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Radiant Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Thunder Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of X-ray Vision', 'magic-items/4738-ring-of-x-ray-vision'],
    ['Rod of the Pact Keeper, +2', 'magic-items/11214-rod-of-the-pact-keeper'],
    ['Wand of the War Mage, +2', 'magic-items/34712-wand-of-the-war-mage'],
    ['Weapon, +2', 'magic-items/5401-weapon-2']
];

const veryRare = [
    ['Belt of Fire Giant Strength', 'magic-items/5372-belt-of-giant-strength'],
    ['Belt of Frost Giant Strength', 'magic-items/5372-belt-of-giant-strength'],
    ['Belt of Stone Giant Strength', 'magic-items/5372-belt-of-giant-strength'],
    ['Crystal Ball', 'magic-items/4610-crystal-ball'],
    ['Horn of Valhalla, Bronze', 'magic-items/5414-horn-of-valhalla'],
    ['Rod of the Pact Keeper, +1', 'magic-items/11214-rod-of-the-pact-keeper'],
    ['Tome of Understanding', 'magic-items/4783-tome-of-understanding'],
    ['Wand of the War Mage, +3', 'magic-items/34712-wand-of-the-war-mage'],
    ['Weapon, +3', 'magic-items/5404-weapon-3']
];

const legendary = [
    ['Belt of Cloud Giant Strength', 'magic-items/5372-belt-of-giant-strength'],
    ['Belt of Storm Giant Strength', 'magic-items/5372-belt-of-giant-strength'],
    ['Crystal Ball of Mind Reading', 'magic-items/4610-crystal-ball'],
    ['Crystal Ball of Telepathy', 'magic-items/4610-crystal-ball'],
    ['Crystal Ball of True Seeing', 'magic-items/4610-crystal-ball'],
    ['Horn of Valhalla, Iron', 'magic-items/5414-horn-of-valhalla'],
    ['Ring of Three Wishes', 'magic-items/4735-ring-of-three-wishes'],
    ['Well of Many Worlds', 'magic-items/4802-well-of-many-worlds']
];