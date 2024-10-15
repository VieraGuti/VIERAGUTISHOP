const items = {
    ammo: [
        { id: 'ammo.shotgun', name: '12 Gauge Buckshot', image: 'images/ammo/ammo.shotgun.png' },
        { id: 'ammo.shotgun.fire', name: '12 Gauge Incendiary Shell', image: 'images/ammo/ammo.shotgun.fire.png' },
        { id: 'ammo.shotgun.slug', name: '12 Gauge Slug', image: 'images/ammo/ammo.shotgun.slug.png' },
        { id: 'ammo.grenadelauncher.he', name: '40mm HE Grenade', image: 'images/ammo/ammo.grenadelauncher.he.png' },
        { id: 'ammo.grenadelauncher.buckshot', name: '40mm Shotgun Round', image: 'images/ammo/ammo.grenadelauncher.buckshot.png' },
        { id: 'ammo.grenadelauncher.smoke', name: '40mm Smoke Grenade', image: 'images/ammo/ammo.grenadelauncher.smoke.png' },
        { id: 'ammo.rifle', name: '5.56 Rifle Ammo', image: 'images/ammo/ammo.rifle.png' },
        { id: 'ammo.rifle.explosive', name: 'Explosive 5.56 Rifle Ammo', image: 'images/ammo/ammo.rifle.explosive.png' },
        { id: 'ammo.handmade.shell', name: 'Handmade Shell', image: 'images/ammo/ammo.handmade.shell.png' },
        { id: 'ammo.rocket.hv', name: 'High Velocity Rocket', image: 'images/ammo/ammo.rocket.hv.png' },
        { id: 'ammo.rifle.hv', name: 'HV 5.56 Rifle Ammo', image: 'images/ammo/ammo.rifle.hv.png' },
        { id: 'ammo.pistol.hv', name: 'HV Pistol Ammo', image: 'images/ammo/ammo.pistol.hv.png' },
        { id: 'ammo.rifle.incendiary', name: 'Incendiary 5.56 Rifle Ammo', image: 'images/ammo/ammo.rifle.incendiary.png' },
        { id: 'ammo.pistol.fire', name: 'Incendiary Pistol Bullet', image: 'images/ammo/ammo.pistol.fire.png' },
        { id: 'ammo.rocket.fire', name: 'Incendiary Rocket', image: 'images/ammo/ammo.rocket.fire.png' },
        { id: 'ammo.nailgun.nails', name: 'Nailgun Nails', image: 'images/ammo/ammo.nailgun.nails.png' },
        { id: 'ammo.pistol', name: 'Pistol Bullet', image: 'images/ammo/ammo.pistol.png' },
        { id: 'ammo.rocket.basic', name: 'Rocket', image: 'images/ammo/ammo.rocket.basic.png' },
        { id: 'arrow.wooden', name: 'Arrow', image: 'images/ammo/arrow.wooden.png' },
        { id: 'arrow.hv', name: 'HV Arrow', image: 'images/ammo/arrow.hv.png' },
        { id: 'arrow.fire', name: 'Fire Arrow', image: 'images/ammo/arrow.fire.png' },
        { id: 'arrow.bone', name: 'Bone Arrow', image: 'images/ammo/arrow.bone.png' },
        { id: 'submarine.torpedo.straight', name: 'Torpedo', image: 'images/ammo/submarine.torpedo.straight.png' }
    ],
    weapons: [
        { id: 'weapon.mod.burstmodule', name: 'Burst Module', image: 'images/weapons/weapon.mod.burstmodule.png' },
        { id: 'weapon.mod.extendedmags', name: 'Extended Magazine', image: 'images/weapons/weapon.mod.extendedmags.png' },
        { id: 'weapon.mod.holosight', name: 'Holosight', image: 'images/weapons/weapon.mod.holosight.png' },
        { id: 'weapon.mod.muzzleboost', name: 'Muzzle Boost', image: 'images/weapons/weapon.mod.muzzleboost.png' },
        { id: 'weapon.mod.muzzlebrake', name: 'Muzzle Brake', image: 'images/weapons/weapon.mod.muzzlebrake.png' },
        { id: 'weapon.mod.simplesight', name: 'Simple Handmade Sight', image: 'images/weapons/weapon.mod.simplesight.png' },
        { id: 'weapon.mod.silencer', name: 'Silencer', image: 'images/weapons/weapon.mod.silencer.png' },
        { id: 'weapon.mod.flashlight', name: 'Weapon Flashlight', image: 'images/weapons/weapon.mod.flashlight.png' },
        { id: 'weapon.mod.lasersight', name: 'Weapon Lasersight', image: 'images/weapons/weapon.mod.lasersight.png' },
        { id: 'rifle.ak', name: 'Assault Rifle', image: 'images/weapons/rifle.ak.png' },
        { id: 'grenade.beancan', name: 'Beancan Grenade', image: 'images/weapons/grenade.beancan.png' },
        { id: 'rifle.bolt', name: 'Bolt Action Rifle', image: 'images/weapons/rifle.bolt.png' },
        { id: 'bone.club', name: 'Bone Club', image: 'images/weapons/bone.club.png' },
        { id: 'knife.bone', name: 'Bone Knife', image: 'images/weapons/knife.bone.png' },
        { id: 'knife.combat', name: 'Combat Knife', image: 'images/weapons/knife.combat.png' },
        { id: 'bow.compound', name: 'Compound Bow', image: 'images/weapons/bow.compound.png' },
        { id: 'crossbow', name: 'Crossbow', image: 'images/weapons/crossbow.png' },
        { id: 'smg.2', name: 'Custom SMG', image: 'images/weapons/smg.2.png' },
        { id: 'shotgun.double', name: 'Double Barrel Shotgun', image: 'images/weapons/shotgun.double.png' },
        { id: 'pistol.eoka', name: 'Eoka Pistol', image: 'images/weapons/pistol.eoka.png' },
        { id: 'grenade.f1', name: 'F1 Grenade', image: 'images/weapons/grenade.f1.png' },
        { id: 'flamethrower', name: 'Flame Thrower', image: 'images/weapons/flamethrower.png' },
        { id: 'grenade.flashbang', name: 'Flashbang', image: 'images/weapons/grenade.flashbang.png' },
        { id: 'hmlmg', name: 'HMLMG', image: 'images/weapons/hmlmg.png' },
        { id: 'bow.hunting', name: 'Hunting Bow', image: 'images/weapons/bow.hunting.png' },
        { id: 'rifle.l96', name: 'L96 Rifle', image: 'images/weapons/rifle.l96.png' },
        { id: 'longsword', name: 'Longsword', image: 'images/weapons/longsword.png' },
        { id: 'rifle.lr300', name: 'LR-300 Assault Rifle', image: 'images/weapons/rifle.lr300.png' },
        { id: 'lmg.m249', name: 'M249', image: 'images/weapons/lmg.m249.png' },
        { id: 'rifle.m39', name: 'M39 Rifle', image: 'images/weapons/rifle.m39.png' },
        { id: 'pistol.m92', name: 'M92 Pistol', image: 'images/weapons/pistol.m92.png' },
        { id: 'mace', name: 'Mace', image: 'images/weapons/mace.png' },
        { id: 'machete', name: 'Machete', image: 'images/weapons/machete.png' },
        { id: 'grenade.molotov', name: 'Molotov Cocktail', image: 'images/weapons/grenade.molotov.png' },
        { id: 'smg.mp5', name: 'MP5A4', image: 'images/weapons/smg.mp5.png' },
        { id: 'multiplegrenadelauncher', name: 'Multiple Grenade Launcher', image: 'images/weapons/multiplegrenadelauncher.png' },
        { id: 'pistol.nailgun', name: 'Nailgun', image: 'images/weapons/pistol.nailgun.png' },
        { id: 'paddle', name: 'Paddle', image: 'images/weapons/paddle.png' },
        { id: 'pistol.prototype17', name: 'Prototype 17', image: 'images/weapons/pistol.prototype17.png' },
        { id: 'shotgun.pump', name: 'Pump Shotgun', image: 'images/weapons/shotgun.pump.png' },
        { id: 'pistol.python', name: 'Python Revolver', image: 'images/weapons/pistol.python.png' },
        { id: 'pistol.revolver', name: 'Revolver', image: 'images/weapons/pistol.revolver.png' },
        { id: 'rocket.launcher', name: 'Rocket Launcher', image: 'images/weapons/rocket.launcher.png' },
        { id: 'salvaged.cleaver', name: 'Salvaged Cleaver', image: 'images/weapons/salvaged.cleaver.png' },
        { id: 'salvaged.sword', name: 'Salvaged Sword', image: 'images/weapons/salvaged.sword.png' },
        { id: 'pistol.semiauto', name: 'Semi-Automatic Pistol', image: 'images/weapons/pistol.semiauto.png' },
        { id: 'rifle.semiauto', name: 'Semi-Automatic Rifle', image: 'images/weapons/rifle.semiauto.png' },
        { id: 'shotgun.spas12', name: 'Spas-12 Shotgun', image: 'images/weapons/shotgun.spas12.png' },
        { id: 'speargun', name: 'Speargun', image: 'images/weapons/speargun.png' },
        { id: 'spear.stone', name: 'Stone Spear', image: 'images/weapons/spear.stone.png' },
        { id: 'smg.thompson', name: 'Thompson', image: 'images/weapons/smg.thompson.png' },
        { id: 'shotgun.waterpipe', name: 'Waterpipe Shotgun', image: 'images/weapons/shotgun.waterpipe.png' },
        { id: 'spear.wooden', name: 'Wooden Spear', image: 'images/weapons/spear.wooden.png' }
    ],
    construction: [
        { id: 'door.hinged.toptier', name: 'Armored Door', image: 'images/construction/door.hinged.toptier.png' },
        { id: 'door.double.hinged.toptier', name: 'Armored Double Door', image: 'images/construction/door.double.hinged.toptier.png' },
        { id: 'barricade.woodwire', name: 'Barbed Wooden Barricade', image: 'images/construction/barricade.woodwire.png' },
        { id: 'building.planner', name: 'Building Plan', image: 'images/construction/building.planner.png' },
        { id: 'wall.frame.fence', name: 'Chainlink Fence', image: 'images/construction/wall.frame.fence.png' },
        { id: 'wall.frame.fence.gate', name: 'Chainlink Fence Gate', image: 'images/construction/wall.frame.fence.gate.png' },
        { id: 'lock.code', name: 'Code Lock', image: 'images/construction/lock.code.png' },
        { id: 'barricade.concrete', name: 'Concrete Barricade', image: 'images/construction/barricade.concrete.png' },
        { id: 'floor.grill', name: 'Floor Grill', image: 'images/construction/floor.grill.png' },
        { id: 'floor.triangle.grill', name: 'Floor Triangle Grill', image: 'images/construction/floor.triangle.grill.png' },
        { id: 'wall.frame.garagedoor', name: 'Garage Door', image: 'images/construction/wall.frame.garagedoor.png' },
        { id: 'gates.external.high.stone', name: 'High External Stone Gate', image: 'images/construction/gates.external.high.stone.png' },
        { id: 'gates.external.high.wood', name: 'High External Wooden Gate', image: 'images/construction/gates.external.high.wood.png' },
        { id: 'wall.external.high.stone', name: 'High External Stone Wall', image: 'images/construction/wall.external.high.stone.png' },
        { id: 'wall.external.high', name: 'High External Wooden Wall', image: 'images/construction/wall.external.high.png' },
        { id: 'lock.key', name: 'Key Lock', image: 'images/construction/lock.key.png' },
        { id: 'floor.ladder.hatch', name: 'Ladder Hatch', image: 'images/construction/floor.ladder.hatch.png' },
        { id: 'water.catcher.large', name: 'Large Water Catcher', image: 'images/construction/water.catcher.large.png' },
        { id: 'barricade.metal', name: 'Metal Barricade', image: 'images/construction/barricade.metal.png' },
        { id: 'shutter.metal.embrasure.a', name: 'Metal Horizontal Embrasure', image: 'images/construction/shutter.metal.embrasure.a.png' },
        { id: 'wall.frame.shopfront.metal', name: 'Metal Shop Front', image: 'images/construction/wall.frame.shopfront.metal.png' },
        { id: 'shutter.metal.embrasure.b', name: 'Metal Vertical Embrasure', image: 'images/construction/shutter.metal.embrasure.b.png' },
        { id: 'wall.window.bars.metal', name: 'Metal Window Bars', image: 'images/construction/wall.window.bars.metal.png' },
        { id: 'wall.frame.netting', name: 'Netting', image: 'images/construction/wall.frame.netting.png' },
        { id: 'wall.frame.cell.gate', name: 'Prison Cell Gate', image: 'images/construction/wall.frame.cell.gate.png' },
        { id: 'wall.frame.cell', name: 'Prison Cell Wall', image: 'images/construction/wall.frame.cell.png' },
        { id: 'wall.window.bars.toptier', name: 'Reinforced Glass Window', image: 'images/construction/wall.window.bars.toptier.png' },
        { id: 'barricade.sandbags', name: 'Sandbag Barricade', image: 'images/construction/barricade.sandbags.png' },
        { id: 'door.hinged.metal', name: 'Sheet Metal Door', image: 'images/construction/door.hinged.metal.png' },
        { id: 'door.double.hinged.metal', name: 'Sheet Metal Double Door', image: 'images/construction/door.double.hinged.metal.png' },
        { id: 'wall.frame.shopfront', name: 'Shop Front', image: 'images/construction/wall.frame.shopfront.png' },
        { id: 'water.catcher.small', name: 'Small Water Catcher', image: 'images/construction/water.catcher.small.png' },
        { id: 'barricade.stone', name: 'Stone Barricade', image: 'images/construction/barricade.stone.png' },
        { id: 'wall.window.glass.reinforced', name: 'Strengthened Glass Window', image: 'images/construction/wall.window.glass.reinforced.png' },
        { id: 'cupboard.tool', name: 'Tool Cupboard', image: 'images/construction/cupboard.tool.png' },
        { id: 'floor.triangle.ladder.hatch', name: 'Triangle Ladder Hatch', image: 'images/construction/floor.triangle.ladder.hatch.png' },
        { id: 'watchtower.wood', name: 'Watch Tower', image: 'images/construction/watchtower.wood.png' },
        { id: 'door.double.hinged.wood', name: 'Wood Double Door', image: 'images/construction/door.double.hinged.wood.png' },
        { id: 'shutter.wood.a', name: 'Wood Shutters', image: 'images/construction/shutter.wood.a.png' },
        { id: 'barricade.wood', name: 'Wooden Barricade', image: 'images/construction/barricade.wood.png' },
        { id: 'barricade.wood.cover', name: 'Wooden Barricade Cover', image: 'images/construction/barricade.wood.cover.png' },
        { id: 'door.hinged.wood', name: 'Wooden Door', image: 'images/construction/door.hinged.wood.png' },
        { id: 'ladder.wooden.wall', name: 'Wooden Ladder', image: 'images/construction/ladder.wooden.wall.png' },
        { id: 'wall.window.bars.wood', name: 'Wooden Window Bars', image: 'images/construction/wall.window.bars.wood.png' }
    ],
attire: [
    { id: 'mask.bandana', name: 'Bandana Mask', image: 'images/attire/mask.bandana.png' },
    { id: 'barrelcostume', name: 'Barrel Costume', image: 'images/attire/barrelcostume.png' },
    { id: 'hat.cap', name: 'Baseball Cap', image: 'images/attire/hat.cap.png' },
    { id: 'hat.beenie', name: 'Beanie Hat', image: 'images/attire/hat.beenie.png' },
    { id: 'bone.armor.suit', name: 'Bone Armor', image: 'images/attire/bone.armor.suit.png' },
    { id: 'deer.skull.mask', name: 'Bone Helmet', image: 'images/attire/deer.skull.mask.png' },
    { id: 'hat.boonie', name: 'Boonie Hat', image: 'images/attire/hat.boonie.png' },
    { id: 'shoes.boots', name: 'Boots', image: 'images/attire/shoes.boots.png' },
    { id: 'bucket.helmet', name: 'Bucket Helmet', image: 'images/attire/bucket.helmet.png' },
    { id: 'burlap.gloves.new', name: 'Burlap Gloves', image: 'images/attire/burlap.gloves.new.png' },
    { id: 'burlap.headwrap', name: 'Burlap Headwrap', image: 'images/attire/burlap.headwrap.png' },
    { id: 'burlap.shirt', name: 'Burlap Shirt', image: 'images/attire/burlap.shirt.png' },
    { id: 'burlap.shoes', name: 'Burlap Shoes', image: 'images/attire/burlap.shoes.png' },
    { id: 'burlap.trousers', name: 'Burlap Trousers', image: 'images/attire/burlap.trousers.png' },
    { id: 'hat.candle', name: 'Candle Hat', image: 'images/attire/hat.candle.png' },
    { id: 'coffeecan.helmet', name: 'Coffee Can Helmet', image: 'images/attire/coffeecan.helmet.png' },
    { id: 'cratecostume', name: 'Crate Costume', image: 'images/attire/cratecostume.png' },
    { id: 'diving.fins', name: 'Diving Fins', image: 'images/attire/diving.fins.png' },
    { id: 'diving.mask', name: 'Diving Mask', image: 'images/attire/diving.mask.png' },
    { id: 'diving.tank', name: 'Diving Tank', image: 'images/attire/diving.tank.png' },
    { id: 'boots.frog', name: 'Frog Boots', image: 'images/attire/boots.frog.png' },
    { id: 'hazmatsuit', name: 'Hazmat Suit', image: 'images/attire/hazmatsuit.png' },
    { id: 'heavy.plate.helmet', name: 'Heavy Plate Helmet', image: 'images/attire/heavy.plate.helmet.png' },
    { id: 'heavy.plate.jacket', name: 'Heavy Plate Jacket', image: 'images/attire/heavy.plate.jacket.png' },
    { id: 'heavy.plate.pants', name: 'Heavy Plate Pants', image: 'images/attire/heavy.plate.pants.png' },
    { id: 'attire.hide.boots', name: 'Hide Boots', image: 'images/attire/attire.hide.boots.png' },
    { id: 'attire.hide.helterneck', name: 'Hide Halterneck', image: 'images/attire/attire.hide.helterneck.png' },
    { id: 'attire.hide.pants', name: 'Hide Pants', image: 'images/attire/attire.hide.pants.png' },
    { id: 'attire.hide.poncho', name: 'Hide Poncho', image: 'images/attire/attire.hide.poncho.png' },
    { id: 'attire.hide.skirt', name: 'Hide Skirt', image: 'images/attire/attire.hide.skirt.png' },
    { id: 'attire.hide.vest', name: 'Hide Vest', image: 'images/attire/attire.hide.vest.png' },
    { id: 'hoodie', name: 'Hoodie', image: 'images/attire/hoodie.png' },
    { id: 'mask.balaclava', name: 'Improvised Balaclava', image: 'images/attire/mask.balaclava.png' },
    { id: 'jacket', name: 'Jacket', image: 'images/attire/jacket.png' },
    { id: 'largebackpack', name: 'Large Backpack', image: 'images/attire/largebackpack.png' },
    { id: 'burlap.gloves', name: 'Leather Gloves', image: 'images/attire/burlap.gloves.png' },
    { id: 'tshirt.long', name: 'Longsleeve T-Shirt', image: 'images/attire/tshirt.long.png' },
    { id: 'lumberjack hoodie', name: 'Lumberjack Hoodie', image: 'images/attire/lumberjack hoodie.png' },
    { id: 'metal.plate.torso', name: 'Metal Chest Plate', image: 'images/attire/metal.plate.torso.png' },
    { id: 'metal.facemask', name: 'Metal Facemask', image: 'images/attire/metal.facemask.png' },
    { id: 'hat.miner', name: 'Miners Hat', image: 'images/attire/hat.miner.png' },
    { id: 'nightvisiongoggles', name: 'Night Vision Goggles', image: 'images/attire/nightvisiongoggles.png' },
    { id: 'pants', name: 'Pants', image: 'images/attire/pants.png' },
    { id: 'partyhat', name: 'Party Hat', image: 'images/attire/partyhat.png' },
    { id: 'riot.helmet', name: 'Riot Helmet', image: 'images/attire/riot.helmet.png' },
    { id: 'roadsign.gloves', name: 'Roadsign Gloves', image: 'images/attire/roadsign.gloves.png' },
    { id: 'roadsign.jacket', name: 'Road Sign Jacket', image: 'images/attire/roadsign.jacket.png' },
    { id: 'roadsign.kilt', name: 'Road Sign Kilt', image: 'images/attire/roadsign.kilt.png' },
    { id: 'shirt.collared', name: 'Shirt', image: 'images/attire/shirt.collared.png' },
    { id: 'pants.shorts', name: 'Shorts', image: 'images/attire/pants.shorts.png' },
    { id: 'smallbackpack', name: 'Small Backpack', image: 'images/attire/smallbackpack.png' },
    { id: 'jacket.snow', name: 'Snow Jacket', image: 'images/attire/jacket.snow.png' },
    { id: 'tactical.gloves', name: 'Tactical Gloves', image: 'images/attire/tactical.gloves.png' },
    { id: 'shirt.tanktop', name: 'Tank Top', image: 'images/attire/shirt.tanktop.png' },
    { id: 'tshirt', name: 'T-Shirt', image: 'images/attire/tshirt.png' },
    { id: 'diving.wetsuit', name: 'Wetsuit', image: 'images/attire/diving.wetsuit.png' },
    { id: 'hat.wolf', name: 'Wolf Headdress', image: 'images/attire/hat.wolf.png' },
    { id: 'wood.armor.helmet', name: 'Wood Armor Helmet', image: 'images/attire/wood.armor.helmet.png' },
    { id: 'wood.armor.pants', name: 'Wood Armor Pants', image: 'images/attire/wood.armor.pants.png' },
    { id: 'wood.armor.jacket', name: 'Wood Chestplate', image: 'images/attire/wood.armor.jacket.png' }
],
tools: [
    { id: 'tool.binoculars', name: 'Binoculars', image: 'images/tools/tool.binoculars.png' },
    { id: 'cakefiveyear', name: 'Birthday Cake', image: 'images/tools/cakefiveyear.png' },
    { id: 'chainsaw', name: 'Chainsaw', image: 'images/tools/chainsaw.png' },
    { id: 'flare', name: 'Flare', image: 'images/tools/flare.png' },
    { id: 'flashlight.held', name: 'Flashlight', image: 'images/tools/flashlight.held.png' },
    { id: 'hatchet', name: 'Hatchet', image: 'images/tools/hatchet.png' },
    { id: 'metal.detector', name: 'Metal Detector', image: 'images/tools/metal.detector.png' },
    { id: 'pickaxe', name: 'Pickaxe', image: 'images/tools/pickaxe.png' },
    { id: 'shovel', name: 'Shovel', image: 'images/tools/shovel.png' },
    { id: 'tarp', name: 'Tarp', image: 'images/tools/tarp.png' },
],
electrical: [
    { id: 'electric.andswitch', name: 'AND Switch', image: 'images/electrical/electric.andswitch.png' },
    { id: 'electric.audioalarm', name: 'Audio Alarm', image: 'images/electrical/electric.audioalarm.png' },
    { id: 'autoturret', name: 'Auto Turret', image: 'images/electrical/autoturret.png' },
    { id: 'electric.blocker', name: 'Blocker', image: 'images/electrical/electric.blocker.png' },
    { id: 'electric.button', name: 'Button', image: 'images/electrical/electric.button.png' },
    { id: 'ceilinglight', name: 'Ceiling Light', image: 'images/electrical/ceilinglight.png' },
    { id: 'computerstation', name: 'Computer Station', image: 'images/electrical/computerstation.png' },
    { id: 'electric.counter', name: 'Counter', image: 'images/electrical/electric.counter.png' },
    { id: 'electric.doorcontroller', name: 'Door Controller', image: 'images/electrical/electric.doorcontroller.png' },
    { id: 'electrical.branch', name: 'Electrical Branch', image: 'images/electrical/electrical.branch.png' },
    { id: 'electric.furnace', name: 'Electric Furnace', image: 'images/electrical/electric.furnace.png' },
    { id: 'electric.heater', name: 'Electric Heater', image: 'images/electrical/electric.heater.png' },
    { id: 'elevator', name: 'Elevator', image: 'images/electrical/elevator.png' },
    { id: 'electric.flasherlight', name: 'Flasher Light', image: 'images/electrical/electric.flasherlight.png' },
    { id: 'fluid.combiner', name: 'Fluid Combiner', image: 'images/electrical/fluid.combiner.png' },
    { id: 'fluid.splitter', name: 'Fluid Splitter', image: 'images/electrical/fluid.splitter.png' },
    { id: 'fluid.switch', name: 'Fluid Switch & Pump', image: 'images/electrical/fluid.switch.png' },
    { id: 'electric.hbhfsensor', name: 'HBHF Sensor', image: 'images/electrical/electric.hbhfsensor.png' },
    { id: 'hosetool', name: 'Hose Tool', image: 'images/electrical/hosetool.png' },
    { id: 'electric.igniter', name: 'Igniter', image: 'images/electrical/electric.igniter.png' },
    { id: 'industrial.combiner', name: 'Industrial Combiner', image: 'images/electrical/industrial.combiner.png' },
    { id: 'industrial.conveyor', name: 'Industrial Conveyor', image: 'images/electrical/industrial.conveyor.png' },
    { id: 'industrial.crafter', name: 'Industrial Crafter', image: 'images/electrical/industrial.crafter.png' },
    { id: 'industrial.splitter', name: 'Industrial Splitter', image: 'images/electrical/industrial.splitter.png' },
    { id: 'electric.battery.rechargable.large', name: 'Large Rechargeable Battery', image: 'images/electrical/electric.battery.rechargable.large.png' },
    { id: 'electric.solarpanel.large', name: 'Large Solar Panel', image: 'images/electrical/electric.solarpanel.large.png' },
    { id: 'electric.laserdetector', name: 'Laser Detector', image: 'images/electrical/electric.laserdetector.png' },
    { id: 'electric.battery.rechargable.medium', name: 'Medium Rechargeable Battery', image: 'images/electrical/electric.battery.rechargable.medium.png' },
    { id: 'electrical.memorycell', name: 'Memory Cell', image: 'images/electrical/electrical.memorycell.png' },
    { id: 'electric.orswitch', name: 'OR Switch', image: 'images/electrical/electric.orswitch.png' },
    { id: 'powered.water.purifier', name: 'Powered Water Purifier', image: 'images/electrical/powered.water.purifier.png' },
    { id: 'electric.pressurepad', name: 'Pressure Pad', image: 'images/electrical/electric.pressurepad.png' },
    { id: 'electric.random.switch', name: 'RAND Switch', image: 'images/electrical/electric.random.switch.png' },
    { id: 'target.reactive', name: 'Reactive Target', image: 'images/electrical/target.reactive.png' },
    { id: 'electric.rf.broadcaster', name: 'RF Broadcaster', image: 'images/electrical/electric.rf.broadcaster.png' },
    { id: 'rf_pager', name: 'RF Pager', image: 'images/electrical/rf_pager.png' },
    { id: 'electric.rf.receiver', name: 'RF Receiver', image: 'images/electrical/electric.rf.receiver.png' },
    { id: 'electrical.combiner', name: 'Root Combiner', image: 'images/electrical/electrical.combiner.png' },
    { id: 'searchlight', name: 'Search Light', image: 'images/electrical/searchlight.png' },
    { id: 'electric.seismicsensor', name: 'Seismic Sensor', image: 'images/electrical/electric.seismicsensor.png' },
    { id: 'electric.sirenlight', name: 'Siren Light', image: 'images/electrical/electric.sirenlight.png' },
    { id: 'electric.battery.rechargable.small', name: 'Small Rechargeable Battery', image: 'images/electrical/electric.battery.rechargable.small.png' },
    { id: 'electric.fuelgenerator.small', name: 'Small Generator', image: 'images/electrical/electric.fuelgenerator.small.png' },
    { id: 'electric.splitter', name: 'Splitter', image: 'images/electrical/electric.splitter.png' },
    { id: 'electric.sprinkler', name: 'Sprinkler', image: 'images/electrical/electric.sprinkler.png' },
    { id: 'storageadapter', name: 'Storage Adapter', image: 'images/electrical/storageadapter.png' },
    { id: 'storage.monitor', name: 'Storage Monitor', image: 'images/electrical/storage.monitor.png' },
    { id: 'electric.switch', name: 'Switch', image: 'images/electrical/electric.switch.png' },
    { id: 'electric.teslacoil', name: 'Tesla Coil', image: 'images/electrical/electric.teslacoil.png' },
    { id: 'electric.generator.small', name: 'Test Generator', image: 'images/electrical/electric.generator.small.png' },
    { id: 'electric.timer', name: 'Timer', image: 'images/electrical/electric.timer.png' },
    { id: 'waterpump', name: 'Water Pump', image: 'images/electrical/waterpump.png' },
    { id: 'generator.wind.scrap', name: 'Wind Turbine', image: 'images/electrical/generator.wind.scrap.png' }
    // No coma al final
]
}; // Cerrar correctamente el objeto 'items'
window.items = items;

