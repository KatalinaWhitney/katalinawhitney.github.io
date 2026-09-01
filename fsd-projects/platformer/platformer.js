$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(248, 183, 183)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(400, 0, 20, 290, "black");
    createPlatform(200, 700, 60, 10, "white");
    createPlatform(400, 600, 60, 10, "white");
    createPlatform(650, 500, 60, 10, "white");
    createPlatform(920, 410, 60, 10, "white");
    createPlatform(650, 310, 60, 10, "white");
    createPlatform(920, 220, 60, 10, "white");
    createPlatform(1160, 130, 60, 10, "white");

    // TODO 3 - Create Collectables
    createCollectable("database", 400, 565, 0.5, 0);
    createCollectable("database", 200, 175, 0.5, 0);
    createCollectable("database", 655, 465, 0.5, 0);
    createCollectable("database", 930, 375, 0.5, 0);
    createCollectable("database", 660, 275, 0.5, 0);
    createCollectable("database", 930, 175, 0.5, 0);
    createCollectable("database", 1170, 75, 0.5, 0);

    // TODO 4 - Create Cannons
    createCannon("top", 370, 1000);
    createCannon("top", 590, 950);
    createCannon("top", 850, 990);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
