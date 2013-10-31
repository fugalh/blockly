/**
 * Load Skin for Maze.
 */
// tiles: A 250x200 set of 20 map images.
// goal: A 20x34 goal image.
// background: Number of 400x400 background images. Randomly select one if
// specified, otherwise, use background.png.
// graph: Colour of optional grid lines, or false.
// look: Colour of sonar-like look icon.

var CONFIGS = {

  astro: {
    look: '#FFF'
  },

  pegman: {
    look: '#000'
  },

  farmer: {
    look: '#000',
    transparentTileEnding: true,
    nonDisappearingPegmanHittingObstacle: true,
    background: 4
  },

  farmer_night: {
    look: '#FFF',
    transparentTileEnding: true,
    nonDisappearingPegmanHittingObstacle: true,
    background: 4
  },

  pvz: {
    look: '#FFF',
    transparentTileEnding: true,
    obstacleScale: 1.4
  },

  birds: {
    look: '#FFF',
    largerObstacleAnimationArea: true,
    obstacleScale: 1.2
  },

  mouse: {
    look: '#FFF'
  },

  panda: {
    look: '#000'
  }

};

exports.load = function(skin) {
  var config = CONFIGS[skin.id];
  // Images
  skin.tiles = skin.root + 'tiles.png';
  skin.goal = skin.root + 'goal.png';
  skin.goalAnimation = skin.root + 'goal.gif';
  skin.obstacle = skin.root + 'obstacle.png';
  skin.obstacleAnimation = skin.root + 'obstacle.gif';
  skin.maze_forever = skin.root + 'maze_forever.png';
  if (config.largerObstacleAnimationArea) {
    skin.largerObstacleAnimationArea = true;
  } else {
    skin.largerObstacleAnimationArea = false;
  }
  if (config.transparentTileEnding) {
    skin.transparentTileEnding = true;
  } else {
    skin.transparentTileEnding = false;
  }
  if (config.nonDisappearingPegmanHittingObstacle) {
    skin.nonDisappearingPegmanHittingObstacle = true;
  } else {
    skin.nonDisappearingPegmanHittingObstacle = false;
  }
  skin.obstacleScale = config.obstacleScale || 1.0;
  // Sounds
  skin.obstacleSound =
      [skin.path + 'obstacle.mp3', skin.path + 'obstacle.ogg'];
  skin.wallSound = [skin.path + 'wall.mp3', skin.path + 'wall.ogg'];
  skin.fillSound = [skin.path + 'fill.mp3', skin.path + 'fill.ogg'];
  skin.digSound = [skin.path + 'dig.mp3', skin.path + 'dig.ogg'];
  // Settings
  skin.graph = config.graph;
  skin.look = config.look;
  skin.dirt = function(n) {
    var MAX = 10;
    var MIN = -MAX;
    var prefix;
    if (n < MIN) {
      prefix = '-';
    } else if (n > MAX) {
      prefix = '';
    } else {
      prefix = '' + n;
    }
    //TODO: This really should be a dirt sprite sheet.
    return skin.root + prefix + 'check.png';
  };
  if (config.background !== undefined) {
    var index = Math.floor(Math.random() * config.background);
    skin.background = skin.root + 'background' + index + '.png';
  } else {
    skin.background = skin.root + 'background.png';
  }
  return skin;
};
