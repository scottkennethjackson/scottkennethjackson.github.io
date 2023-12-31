const cursed = [
    ['Armor of Vulnerability', 'magic-items/5376-armor-of-vulnerability'],
    ['Berserker Axe', 'magic-items/5382-berserker-axe'],
    ['Demon Armor', 'magic-items/4619-demon-armor'],
    ['Shield of Missile Attraction', 'magic-items/4754-shield-of-missile-attraction'],
    ['Sword of Vengence', 'magic-items/5505-sword-of-vengeance']
];

const common = [
    ['Armor of Gleaming', 'magic-items/36571-armor-of-gleaming'],
    ['Boots of False Tracks', 'magic-items/27025-boots-of-false-tracks'],
    ['Candle of the Deep', 'magic-items/27026-candle-of-the-deep'],
    ['Cast-Off Armor', 'magic-items/36589-cast-off-armor'],
    ['Charlatan\'s Die', 'magic-items/27039-charlatans-die'],
    ['Cloak of Billowing', 'magic-items/27040-cloak-of-billowing'],
    ['Cloak of Billowing', 'magic-items/27040-cloak-of-billowing'],
    ['Cloak of Many Fashions', 'magic-items/27041-cloak-of-many-fashions'],
    ['Clockwork Amulet', 'magic-items/27042-clockwork-amulet'],
    ['Clothes of Mending', 'magic-items/27043-clothes-of-mending'],
    ['Dark Shard Amulet', 'magic-items/27044-dark-shard-amulet'],
    ['Dread Helm', 'magic-items/27045-dread-helm'],
    ['Ear Horn of Hearing', 'magic-items/27046-ear-horn-of-hearing'],
    ['Enduring Spellbook', 'magic-items/27047-enduring-spellbook'],
    ['Ersatz Eye', 'magic-items/27048-ersatz-eye'],
    ['Hat of Vermin', 'magic-items/27049-hat-of-vermin'],
    ['Hat of Wizardry', 'magic-items/27050-hat-of-wizardry'],
    ['Heward\'s Handy Spice Pouch', 'magic-items/27063-hewards-handy-spice-pouch'],
    ['Horn of Silent Alarm', 'magic-items/27064-horn-of-silent-alarm'],
    ['Instrument of Illusions', 'magic-items/27065-instrument-of-illusions'],
    ['Instrument of Scribing', 'magic-items/27066-instrument-of-scribing'],
    ['Lock of Trickery', 'magic-items/27068-lock-of-trickery'],
    ['Moon-Touched Sword', 'magic-items/36822-moon-touched-sword'],
    ['Mystery Key', 'magic-items/27076-mystery-key'],
    ['Orb of Direction', 'magic-items/27077-orb-of-direction'],
    ['Orb of Time', 'magic-items/27078-orb-of-time'],
    ['Pipe of Smoke Monsters', 'magic-items/27082-pipe-of-smoke-monsters'],
    ['Pole of Angling', 'magic-items/27108-pole-of-angling'],
    ['Pole of Collapsing', 'magic-items/27112-pole-of-collapsing'],
    ['Pot of Awakening', 'magic-items/27113-pot-of-awakening'],
    ['Prosthetic Limb', 'magic-items/1000601-prosthetic-limb'],
    ['Rope of Mending', 'magic-items/27114-rope-of-mending'],
    ['Ruby of the War Mage', 'magic-items/27115-ruby-of-the-war-mage'],
    ['Shield of Expression', 'magic-items/27116-shield-of-expression'],
    ['Smoldering Armor', 'magic-items/36837-smoldering-armor'],
    ['Staff of Adornment', 'magic-items/27136-staff-of-adornment'],
    ['Staff of Birdcalls', 'magic-items/27137-staff-of-birdcalls'],
    ['Staff of Flowers', 'magic-items/27139-staff-of-flowers'],
    ['Talking Doll', 'magic-items/27140-talking-doll'],
    ['Tankard of Sobriety', 'magic-items/27142-tankard-of-sobriety'],
    ['Unbreakable Arrow', 'magic-items/36838-unbreakable-arrow'],
    ['Veteran\'s Cane', 'magic-items/27145-veterans-cane'],
    ['Walloping Ammunition', 'magic-items/36839-walloping-ammunition'],
    ['Wand of Conducting', 'magic-items/27146-wand-of-conducting'],
    ['Wand of Pyrotechnics', 'magic-items/27147-wand-of-pyrotechnics'],
    ['Wand of Scowls', 'magic-items/27148-wand-of-scowls'],
    ['Wand of Smiles', 'magic-items/27149-wand-of-smiles']
];

const consumable = [
    ['Bead of Nourishment', 'magic-items/27022-bead-of-nourishment'],
    ['Bead of Refreshment', 'magic-items/27023-bead-of-refreshment'],
    ['Dust of Disappearance', 'magic-items/4623-dust-of-disappearance'],
    ['Dust of Sneezing and Choking', 'magic-items/4625-dust-of-sneezing-and-choking'],
    ['Elemental Gem, Blue Sapphire', 'magic-items/5374-elemental-gem'],
    ['Elemental Gem, Emerald', 'magic-items/5374-elemental-gem'],
    ['Elemental Gem, Red Corundum', 'magic-items/5374-elemental-gem'],
    ['Elemental Gem, Yellow Diamond', 'magic-items/5374-elemental-gem'],
    ['Elixir of Health', 'magic-items/5351-elixir-of-health'],
    ['Oil of Etherealness', 'magic-items/4687-oil-of-etherealness'],
    ['Oil of Sharpness', 'magic-items/4688-oil-of-sharpness'],
    ['Oil of Slipperiness', 'magic-items/4689-oil-of-slipperiness'],
    ['Perfume of Bewitching', 'magic-items/27079-perfume-of-bewitching'],
    ['Philter of Love', 'magic-items/4695-philter-of-love'],
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
    ['Quaal\'s Feather Token, Anchor', 'magic-items/13584-quaals-feather-token'],
    ['Quaal\'s Feather Token, Bird', 'magic-items/13584-quaals-feather-token'],
    ['Quaal\'s Feather Token, Fan', 'magic-items/13584-quaals-feather-token'],
    ['Quaal\'s Feather Token, Swan Boat', 'magic-items/13584-quaals-feather-token'],
    ['Quaal\'s Feather Token, Tree', 'magic-items/13584-quaals-feather-token'],
    ['Quaal\'s Feather Token, Whip', 'magic-items/13584-quaals-feather-token'],
    ['Sovereign Glue', 'magic-items/4756-sovereign-glue'],
    ['Spell Scroll, Cantrip', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 1st Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 2nd Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 3rd Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 4th Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 5th Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 6th Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 7th Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 8th Level', 'magic-items/5418-spell-scroll'],
    ['Spell Scroll, 9th Level', 'magic-items/5418-spell-scroll'],
    ['Universal Solvent', 'magic-items/4785-universal-solvent']
];

const uncommon = [
    ['Adamantine Armor', 'magic-items/5370-adamantine-armor'],
    ['Alchemy Jug', 'magic-items/5346-alchemy-jug'],
    ['Amulet of Proof Against Detection and Location', 'magic-items/4569-amulet-of-proof-against-detection-and-location'],
    ['Bag of Holding', 'magic-items/4581-bag-of-holding'],
    ['Boots of Elvenkind', 'magic-items/4587-boots-of-elvenkind'],
    ['Boots of Striding and Springing', 'magic-items/4590-boots-of-striding-and-springing'],
    ['Boots of the Winterlands', 'magic-items/4591-boots-of-the-winterlands'],
    ['Bracers of Archery', 'magic-items/4593-bracers-of-archery'],
    ['Brooch of Shielding', 'magic-items/4596-brooch-of-shielding'],
    ['Broom of Flying', 'magic-items/4597-broom-of-flying'],
    ['Cap of Water Breathing', 'magic-items/5345-cap-of-water-breathing'],
    ['Circlet of Blasting', 'magic-items/4603-circlet-of-blasting'],
    ['Cloak of Elvenkind', 'magic-items/4606-cloak-of-elvenkind'],
    ['Cloak of Protection', 'magic-items/4607-cloak-of-protection'],
    ['Cloak of the Manta Ray', 'magic-items/4609-cloak-of-the-manta-ray'],
    ['Decanter of Endless Water', 'magic-items/4615-decanter-of-endless-water'],
    ['Driftglobe', 'magic-items/5349-driftglobe'],
    ['Dust of Dryness', 'magic-items/4624-dust-of-dryness'],
    ['Eversmoking Bottle', 'magic-items/4632-eversmoking-bottle'],
    ['Eyes of Charming', 'magic-items/4633-eyes-of-charming'],
    ['Eyes of Minute Seeing', 'magic-items/4634-eyes-of-minute-seeing'],
    ['Eyes of the Eagle', 'magic-items/4635-eyes-of-the-eagle'],
    ['Figurine of Wondrous Power, Silver Raven', 'magic-items/5413-figurine-of-wondrous-power'],
    ['Gauntlets of Ogre Power', 'magic-items/4641-gauntlets-of-ogre-power'],
    ['Gem of Brightness', 'magic-items/4642-gem-of-brightness'],
    ['Gloves of Missile Snaring', 'magic-items/4646-gloves-of-missile-snaring'],
    ['Gloves of Swimming and Climbing', 'magic-items/4647-gloves-of-swimming-and-climbing'],
    ['Gloves of Thievery', 'magic-items/5352-gloves-of-thievery'],
    ['Goggles of Night', 'magic-items/4648-goggles-of-night'],
    ['Gray Bag of Tricks', 'magic-items/4582-bag-of-tricks'],
    ['Hat of Disguise', 'magic-items/4651-hat-of-disguise'],
    ['Headband of Intellect', 'magic-items/4652-headband-of-intellect'],
    ['Helm of Comprehending Languages', 'magic-items/4654-helm-of-comprehending-languages'],
    ['Helm of Telepathy', 'magic-items/4655-helm-of-telepathy'],
    ['Immovable Rod', 'magic-items/4662-immovable-rod'],
    ['Instrument of the Bards, Doss Lute', 'magic-items/5508-instrument-of-the-bards'],
    ['Instrument of the Bards, Fochlucan Bandore', 'magic-items/5508-instrument-of-the-bards'],
    ['Instrument of the Bards, Mac-Fuirmidh Cittern', 'magic-items/5508-instrument-of-the-bards'],
    ['Javelin of Lightning', 'magic-items/4667-javelin-of-lightning'],
    ['Keoghtom\'s Ointment', 'magic-items/5355-keoghtoms-ointment'],
    ['Lantern of Revealing', 'magic-items/4668-lantern-of-revealing'],
    ['Mariner\'s Armor', 'magic-items/5507-mariners-armor'],
    ['Medallion of Thoughts', 'magic-items/4679-medallion-of-thoughts'],
    ['Mithral Armor', 'magic-items/5381-mithral-armor'],
    ['Necklace of Adaptation', 'magic-items/4682-necklace-of-adaptation'],
    ['Pearl of Power', 'magic-items/4691-pearl-of-power'],
    ['Periapt of Health', 'magic-items/4692-periapt-of-health'],
    ['Periapt of Wound Closure', 'magic-items/4694-periapt-of-wound-closure'],
    ['Pipes of Haunting', 'magic-items/4696-pipes-of-haunting'],
    ['Pipes of the Sewers', 'magic-items/4697-pipes-of-the-sewers'],
    ['Quiver of Ehlonna', 'magic-items/5367-quiver-of-ehlonna'],
    ['Ring of Jumping', 'magic-items/4724-ring-of-jumping'],
    ['Ring of Mind Shielding', 'magic-items/4725-ring-of-mind-shielding'],
    ['Ring of Swimming', 'magic-items/4732-ring-of-swimming'],
    ['Ring of Warmth', 'magic-items/4736-ring-of-warmth'],
    ['Ring of Water Walking', 'magic-items/4737-ring-of-water-walking'],
    ['Robe of Useful Items', 'magic-items/4743-robe-of-useful-items'],
    ['Rod of the Pact Keeper, +1', 'magic-items/11214-rod-of-the-pact-keeper'],
    ['Rope of Climbing', 'magic-items/4749-rope-of-climbing'],
    ['Rust Bag of Tricks', 'magic-items/4582-bag-of-tricks'],
    ['Saddle of the Cavalier', 'magic-items/5396-saddle-of-the-cavalier'],
    ['Sending Stones', 'magic-items/5402-sending-stones'],
    ['Sentinel Shield', 'magic-items/5403-sentinel-shield'],
    ['Shield, +1', 'magic-items/4753-shield-1'],
    ['Slippers of Spider Climbing', 'magic-items/4755-slippers-of-spider-climbing'],
    ['Staff of the Adder', 'magic-items/5406-staff-of-the-adder'],
    ['Staff of the Python', 'magic-items/4768-staff-of-the-python'],
    ['Stone of Good Luck (Luckstone)', 'magic-items/4773-stone-of-good-luck-luckstone'],
    ['Tan Bag of Tricks', 'magic-items/4582-bag-of-tricks'],
    ['Trident of Fish Command', 'magic-items/4784-trident-of-fish-command'],
    ['Wand of Magic Detection', 'magic-items/4793-wand-of-magic-detection'],
    ['Wand of Magic Missiles', 'magic-items/4794-wand-of-magic-missiles'],
    ['Wand of Secrets', 'magic-items/4797-wand-of-secrets'],
    ['Wand of the War Mage, +1', 'magic-items/34712-wand-of-the-war-mage'],
    ['Wand of Web', 'magic-items/4799-wand-of-web'],
    ['Weapon, +1', 'magic-items/5400-weapon-1'],
    ['Weapon of Warning', 'magic-items/5504-weapon-of-warning'],
    ['Wind Fan', 'magic-items/4803-wind-fan'],
    ['Winged Boots', 'magic-items/4804-winged-boots']
];

const rare = [
    ['Amulet of Health', 'magic-items/4568-amulet-of-health'],
    ['Armor, +1', 'magic-items/5377-armor-1'],
    ['Armor of Acid Resistance', 'magic-items/5371-armor-of-resistance'],
    ['Armor of Cold Resistance', 'magic-items/5371-armor-of-resistance'],
    ['Armor of Fire Resistance', 'magic-items/5371-armor-of-resistance'],
    ['Armor of Force Resistance', 'magic-items/5371-armor-of-resistance'],
    ['Armor of Lightning Resistance', 'magic-items/5371-armor-of-resistance'],
    ['Armor of Necrotic Resistance', 'magic-items/5371-armor-of-resistance'],
    ['Armor of Poison Resistance', 'magic-items/5371-armor-of-resistance'],
    ['Armor of Psychic Resistance', 'magic-items/5371-armor-of-resistance'],
    ['Armor of Radiant Resistance', 'magic-items/5371-armor-of-resistance'],
    ['Armor of Thunder Resistance', 'magic-items/5371-armor-of-resistance'],
    ['Arrow-Catching Shield', 'magic-items/4577-arrow-catching-shield'],
    ['Bag of Beans', 'magic-items/4579-bag-of-beans'],
    ['Bead of Force', 'magic-items/4583-bead-of-force'],
    ['Belt of Dwarvenkind', 'magic-items/4584-belt-of-dwarvenkind'],
    ['Belt of Hill Giant Strength', 'magic-items/5372-belt-of-giant-strength'],
    ['Boots of Levitation', 'magic-items/4588-boots-of-levitation'],
    ['Boots of Speed', 'magic-items/4589-boots-of-speed'],
    ['Bowl of Commanding Water Elementals', 'magic-items/4592-bowl-of-commanding-water-elementals'],
    ['Bracers of Defense', 'magic-items/4594-bracers-of-defense'],
    ['Brazier of Commanding Fire Elementals', 'magic-items/4595-brazier-of-commanding-fire-elementals'],
    ['Cape of the Mountebank', 'magic-items/4599-cape-of-the-mountebank'],
    ['Censer of Commanding Air Elementals', 'magic-items/4601-censer-of-controlling-air-elementals'],
    ['Chime of Opening', 'magic-items/4602-chime-of-opening'],
    ['Cloak of Displacement', 'magic-items/4605-cloak-of-displacement'],
    ['Cloak of the Bat', 'magic-items/4608-cloak-of-the-bat'],
    ['Cube of Force', 'magic-items/4611-cube-of-force'],
    ['Daern\'s Instant Fortress', 'magic-items/4663-instant-fortress'],
    ['Dagger of Venom', 'magic-items/4613-dagger-of-venom'],
    ['Dimensional Shackles', 'magic-items/4620-dimensional-shackles'],
    ['Dragon Slayer', 'magic-items/5385-dragon-slayer'],
    ['Elven Chain', 'magic-items/4631-elven-chain'],
    ['Figurine of Wondrous Power, Bronze Griffon', 'magic-items/5413-figurine-of-wondrous-power'],
    ['Figurine of Wondrous Power, Ebony Fly', 'magic-items/5413-figurine-of-wondrous-power'],
    ['Figurine of Wondrous Power, Golden Lions', 'magic-items/5413-figurine-of-wondrous-power'],
    ['Figurine of Wondrous Power, Ivory Goats', 'magic-items/5413-figurine-of-wondrous-power'],
    ['Figurine of Wondrous Power, Marble Elephants', 'magic-items/5413-figurine-of-wondrous-power'],
    ['Figurine of Wondrous Power, Onyx Dog', 'magic-items/5413-figurine-of-wondrous-power'],
    ['Figurine of Wondrous Power, Serpentine Owl', 'magic-items/5413-figurine-of-wondrous-power'],
    ['Flame Tongue', 'magic-items/5386-flame-tongue'],
    ['Folding Boat', 'magic-items/4639-folding-boat'],
    ['Gem of Seeing', 'magic-items/4643-gem-of-seeing'],
    ['Giant Slayer', 'magic-items/5388-giant-slayer'],
    ['Glamoured Studded Leather', 'magic-items/4645-glamoured-studded-leather'],
    ['Helm of Teleportation', 'magic-items/4656-helm-of-teleportation'],
    ['Horn of Blasting', 'magic-items/4658-horn-of-blasting'],
    ['Horn of Valhalla, Brass', 'magic-items/5414-horn-of-valhalla'],
    ['Horn of Valhalla, Silver', 'magic-items/5414-horn-of-valhalla'],
    ['Horseshoes of Speed', 'magic-items/4661-horseshoes-of-speed'],
    ['Instrument of the Bards, Canaith Mandolin', 'magic-items/5508-instrument-of-the-bards'],
    ['Instrument of the Bards, Cli Lyre', 'magic-items/5508-instrument-of-the-bards'],
    ['Ioun Stone, Awareness', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Historical Knowledge', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Language Knowledge', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Natural Knowledge', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Protection', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Religious Knowledge', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Reserve', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Self Preservation', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Sustenance', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Supreme Intellect', 'magic-items/5415-ioun-stone'],
    ['Iron Bands of Bilarro', 'magic-items/5354-iron-bands-of-bilarro'],
    ['Mace of Disruption', 'magic-items/4670-mace-of-disruption'],
    ['Mace of Smiting', 'magic-items/4671-mace-of-smiting'],
    ['Mace of Terror', 'magic-items/4672-mace-of-terror'],
    ['Mantle of Spell Resistance', 'magic-items/4673-mantle-of-spell-resistance'],
    ['Necklace of Fireballs', 'magic-items/4683-necklace-of-fireballs'],
    ['Necklace of Prayer Beads', 'magic-items/4684-necklace-of-prayer-beads'],
    ['Periapt of Proof Against Poison', 'magic-items/4693-periapt-of-proof-against-poison'],
    ['Portable Hole', 'magic-items/4699-portable-hole'],
    ['Ring of Acid Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Animal Influence', 'magic-items/4717-ring-of-animal-influence'],
    ['Ring of Cold Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Evasion', 'magic-items/4720-ring-of-evasion'],
    ['Ring of Feather Falling', 'magic-items/4721-ring-of-feather-falling'],
    ['Ring of Fire Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Force Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Free Action', 'magic-items/4722-ring-of-free-action'],
    ['Ring of Lightning Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Necrotic Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Poison Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Protection', 'magic-items/4726-ring-of-protection'],
    ['Ring of Psychic Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Radiant Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of Spell Storing', 'magic-items/4730-ring-of-spell-storing'],
    ['Ring of the Ram', 'magic-items/4734-ring-of-the-ram'],
    ['Ring of Thunder Resistance', 'magic-items/5420-ring-of-resistance'],
    ['Ring of X-ray Vision', 'magic-items/4738-ring-of-x-ray-vision'],
    ['Robe of Eyes', 'magic-items/4739-robe-of-eyes'],
    ['Rod of Rulership', 'magic-items/4747-rod-of-rulership'],
    ['Rod of the Pact Keeper, +2', 'magic-items/11214-rod-of-the-pact-keeper'],
    ['Rope of Entanglement', 'magic-items/4750-rope-of-entanglement'],
    ['Scroll of Protection Against Aberrations', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Beasts', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Celestials', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Elementals', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Fey', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Fiends', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Plants', 'magic-items/5398-scroll-of-protection'],
    ['Scroll of Protection Against Undead', 'magic-items/5398-scroll-of-protection'],
    ['Shield, +2', 'magic-items/5157-shield-2'],
    ['Staff of Charming', 'magic-items/4760-staff-of-charming'],
    ['Staff of Healing', 'magic-items/4763-staff-of-healing'],
    ['Staff of Swarming Insects', 'magic-items/4766-staff-of-swarming-insects'],
    ['Staff of the Woodlands', 'magic-items/4769-staff-of-the-woodlands'],
    ['Staff of Withering', 'magic-items/4771-staff-of-withering'],
    ['Stone of Controlling Earth Elementals', 'magic-items/4772-stone-of-controlling-earth-elementals'],
    ['Sun Blade', 'magic-items/4774-sun-blade'],
    ['Sword of Life Stealing', 'magic-items/5390-sword-of-life-stealing'],
    ['Sword of Wounding', 'magic-items/5392-sword-of-wounding'],
    ['Tentacle Rod', 'magic-items/5408-tentacle-rod'],
    ['Vicious Weapon', 'magic-items/5399-vicious-weapon'],
    ['Wand of Binding', 'magic-items/4788-wand-of-binding'],
    ['Wand of Enemy Detection', 'magic-items/4789-wand-of-enemy-detection'],
    ['Wand of Fear', 'magic-items/4790-wand-of-fear'],
    ['Wand of Fireballs', 'magic-items/4791-wand-of-fireballs'],
    ['Wand of Lightning Bolts', 'magic-items/4792-wand-of-lightning-bolts'],
    ['Wand of Paralysis', 'magic-items/4795-wand-of-paralysis'],
    ['Wand of the War Mage, +2', 'magic-items/34712-wand-of-the-war-mage'],
    ['Wand of Wonder', 'magic-items/4800-wand-of-wonder'],
    ['Weapon, +2', 'magic-items/5401-weapon-2'],
    ['Wings of Flying', 'magic-items/4805-wings-of-flying']
];

const veryRare = [
    ['Armor, +2', 'magic-items/5378-armor-2'],
    ['Belt of Fire Giant Strength', 'magic-items/5372-belt-of-giant-strength'],
    ['Belt of Frost Giant Strength', 'magic-items/5372-belt-of-giant-strength'],
    ['Belt of Stone Giant Strength', 'magic-items/5372-belt-of-giant-strength'],
    ['Crystal Ball', 'magic-items/4610-crystal-ball'],
    ['Figurine of Wondrous Power, Obsidian Steed', 'magic-items/5413-figurine-of-wondrous-power'],
    ['Horn of Valhalla, Bronze', 'magic-items/5414-horn-of-valhalla'],
    ['Instrument of the Bards, Anstruth Harp', 'magic-items/5508-instrument-of-the-bards'],
    ['Ioun Stone, Absorption', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Agilty', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Fortitude', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Insight', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Intellect', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Leadership', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Strength', 'magic-items/5415-ioun-stone'],
    ['Rod of the Pact Keeper, +1', 'magic-items/11214-rod-of-the-pact-keeper'],
    ['Shield, +3', 'magic-items/5158-shield-3'],
    ['Tome of Understanding', 'magic-items/4783-tome-of-understanding'],
    ['Wand of the War Mage, +3', 'magic-items/34712-wand-of-the-war-mage'],
    ['Weapon, +3', 'magic-items/5404-weapon-3']
];

const legendary = [
    ['Armor, +3', 'magic-items/5379-armor-3'],
    ['Belt of Cloud Giant Strength', 'magic-items/5372-belt-of-giant-strength'],
    ['Belt of Storm Giant Strength', 'magic-items/5372-belt-of-giant-strength'],
    ['Crystal Ball of Mind Reading', 'magic-items/4610-crystal-ball'],
    ['Crystal Ball of Telepathy', 'magic-items/4610-crystal-ball'],
    ['Crystal Ball of True Seeing', 'magic-items/4610-crystal-ball'],
    ['Horn of Valhalla, Iron', 'magic-items/5414-horn-of-valhalla'],
    ['Instrument of the Bards, Ollamh Harp', 'magic-items/5508-instrument-of-the-bards'],
    ['Ioun Stone, Greater Absorption', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Mastery', 'magic-items/5415-ioun-stone'],
    ['Ioun Stone, Regeneration', 'magic-items/5415-ioun-stone'],
    ['Ring of Three Wishes', 'magic-items/4735-ring-of-three-wishes'],
    ['Well of Many Worlds', 'magic-items/4802-well-of-many-worlds']
];