// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [
      { x: 0, width: 120, height: 300, speedX: -2 },
      { x: 240, width: 130, height: 330, speedX: -2 },
      { x: 500, width: 110, height: 280, speedX: -2 },
      { x: 760, width: 140, height: 320, speedX: -2 },
      { x: 1040, width: 120, height: 300, speedX: -2 },
      { x: 1320, width: 150, height: 340, speedX: -2 },
    ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [
      { x: 200, width: 50, height: 150, speedX: 0 },
      { x: 450, width: 50, height: 150, speedX: 0 },
      { x: 700, width: 50, height: 150, speedX: 0 },
      { x: 950, width: 50, height: 150, speedX: 0 },
      { x: 1200, width: 50, height: 150, speedX: 0 },
      { x: 1450, width: 50, height: 150, speedX: 0 },
    ],
  },
};
