#!/usr/bin/env node

/**
 * A clock using blessed
 * Copyright (c) 2013, Christopher Jeffrey (MIT License).
 * https://github.com/chjj/blessed
 */

var blessed = require('blessed');

var screen = blessed.screen({
  autoPadding: true
});

var positions = {};

var container = blessed.box({
  parent: screen,
  top: 'center',
  left: 'center',
  width: 'shrink',
  height: 'shrink',
  //padding: 2,
  //border: {
  //  type: 'line',
  //  fg: 'black'
  //}
});

var date = blessed.box({
  parent: screen,
  top: 1,
  left: 1,
  width: 'shrink',
  height: 'shrink',
  border: {
    type: 'line',
    fg: 'black'
  }
});

for (var i = 0; i < 10; i++) {
  var symbols = positions[i] = {};

  /**
   * Zero
   */

  symbols[0] = blessed.box({
    parent: container,
    top: 0,
    left: 0,
    width: 10,
    height: 8
  });

  blessed.box({
    parent: symbols[0],
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[0],
    top: 0,
    left: 0,
    bottom: 0,
    width: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[0],
    top: 0,
    right: 0,
    bottom: 0,
    width: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[0],
    top: 7,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  symbols[0].hide();

  /**
   * One
   */

  symbols[1] = blessed.box({
    parent: container,
    top: 0,
    width: 10,
    height: 8
  });

  blessed.box({
    parent: symbols[1],
    top: 0,
    left: 'center',
    width: 2,
    style: {
      inverse: true
    }
  });

  symbols[1].hide();

  /**
   * Two
   */

  symbols[2] = blessed.box({
    parent: container,
    top: 0,
    left: 0,
    width: 10,
    height: 8
  });

  blessed.box({
    parent: symbols[2],
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[2],
    top: 0,
    right: 0,
    height: 4,
    width: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[2],
    top: 3,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[2],
    top: 4,
    left: 0,
    height: 4,
    width: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[2],
    top: 7,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  symbols[2].hide();

  /**
   * Three
   */

  symbols[3] = blessed.box({
    parent: container,
    top: 0,
    left: 0,
    width: 10,
    height: 8
  });

  blessed.box({
    parent: symbols[3],
    top: 0,
    bottom: 0,
    right: 0,
    width: 1,
    height: 8,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[3],
    top: 0,
    right: 0,
    left: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[3],
    top: 3,
    right: 0,
    left: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[3],
    top: 7,
    right: 0,
    left: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  symbols[3].hide();

  /**
   * Four
   */

  symbols[4] = blessed.box({
    parent: container,
    top: 0,
    left: 0,
    width: 10,
    height: 8
  });

  blessed.box({
    parent: symbols[4],
    top: 0,
    bottom: 0,
    right: 0,
    width: 1,
    height: 8,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[4],
    top: 3,
    right: 0,
    left: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[4],
    top: 0,
    left: 0,
    width: 1,
    height: 4,
    style: {
      inverse: true
    }
  });

  symbols[4].hide();

  /**
   * Five
   */

  symbols[5] = blessed.box({
    parent: container,
    top: 0,
    left: 0,
    width: 10,
    height: 8
  });

  blessed.box({
    parent: symbols[5],
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[5],
    top: 0,
    left: 0,
    height: 4,
    width: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[5],
    top: 3,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[5],
    top: 4,
    right: 0,
    height: 4,
    width: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[5],
    top: 7,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  symbols[5].hide();

  /**
   * Six
   */

  symbols[6] = blessed.box({
    parent: container,
    top: 0,
    left: 0,
    width: 10,
    height: 8
  });

  blessed.box({
    parent: symbols[6],
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[6],
    top: 0,
    left: 0,
    bottom: 0,
    width: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[6],
    top: 3,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[6],
    top: 4,
    right: 0,
    height: 4,
    width: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[6],
    top: 7,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  symbols[6].hide();

  /**
   * Seven
   */

  symbols[7] = blessed.box({
    parent: container,
    top: 0,
    left: 0,
    width: 10,
    height: 8
  });

  blessed.box({
    parent: symbols[7],
    top: 0,
    bottom: 0,
    right: 0,
    width: 1,
    height: 8,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[7],
    top: 0,
    right: 0,
    left: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  symbols[7].hide();

  /**
   * Eight
   */

  symbols[8] = blessed.box({
    parent: container,
    top: 0,
    left: 0,
    width: 10,
    height: 8
  });

  blessed.box({
    parent: symbols[8],
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[8],
    top: 0,
    left: 0,
    bottom: 0,
    width: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[8],
    top: 3,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[8],
    top: 0,
    right: 0,
    bottom: 0,
    width: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[8],
    top: 7,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  symbols[8].hide();

  /**
   * Nine
   */

  symbols[9] = blessed.box({
    parent: container,
    top: 0,
    left: 0,
    width: 10,
    height: 8
  });

  blessed.box({
    parent: symbols[9],
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[9],
    top: 0,
    left: 0,
    height: 4,
    width: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[9],
    top: 3,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[9],
    top: 0,
    right: 0,
    bottom: 0,
    width: 1,
    style: {
      inverse: true
    }
  });

  blessed.box({
    parent: symbols[9],
    top: 7,
    left: 0,
    right: 0,
    height: 1,
    style: {
      inverse: true
    }
  });

  symbols[9].hide();

  /**
   * Colon
   */

  symbols[':'] = blessed.box({
    parent: container,
    top: 0,
    left: 0,
    width: 5,
    height: 8
  });

  blessed.box({
    parent: symbols[':'],
    top: 2,
    left: 'center',
    width: 2,
    height: 1,
    style: {
      bg: 'black'
    }
  });

  blessed.box({
    parent: symbols[':'],
    top: 5,
    left: 'center',
    width: 2,
    height: 1,
    style: {
      bg: 'black'
    }
  });

  symbols[':'].hide();

  /**
   * A
   */

  symbols['a'] = blessed.box({
    parent: container,
    top: 1,
    left: 0,
    width: 10,
    height: 7
  });

  blessed.box({
    parent: symbols['a'],
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    style: {
      bg: 'blue'
    }
  });

  blessed.box({
    parent: symbols['a'],
    top: 0,
    left: 0,
    bottom: 0,
    width: 1,
    style: {
      bg: 'blue'
    }
  });

  blessed.box({
    parent: symbols['a'],
    top: 3,
    left: 0,
    right: 0,
    height: 1,
    style: {
      bg: 'blue'
    }
  });

  blessed.box({
    parent: symbols['a'],
    top: 0,
    right: 0,
    bottom: 0,
    width: 1,
    style: {
      bg: 'blue'
    }
  });

  symbols['a'].hide();

  /**
   * P
   */

  symbols['p'] = blessed.box({
    parent: container,
    top: 1,
    left: 0,
    width: 10,
    height: 7
  });

  blessed.box({
    parent: symbols['p'],
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    style: {
      bg: 'blue'
    }
  });

  blessed.box({
    parent: symbols['p'],
    top: 0,
    right: 0,
    height: 4,
    width: 1,
    style: {
      bg: 'blue'
    }
  });

  blessed.box({
    parent: symbols['p'],
    top: 0,
    left: 0,
    bottom: 0,
    width: 1,
    style: {
      bg: 'blue'
    }
  });

  blessed.box({
    parent: symbols['p'],
    top: 3,
    left: 0,
    right: 0,
    height: 1,
    style: {
      bg: 'blue'
    }
  });

  symbols['p'].hide();

  /**
   * M
   */

  symbols['m'] = blessed.box({
    parent: container,
    top: 1,
    left: 0,
    width: 10,
    height: 7
  });

  blessed.box({
    parent: symbols['m'],
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    style: {
      bg: 'black'
    }
  });

  blessed.box({
    parent: symbols['m'],
    top: 0,
    left: 0,
    bottom: 0,
    width: 1,
    style: {
      bg: 'black'
    }
  });

  blessed.box({
    parent: symbols['m'],
    top: 0,
    right: 0,
    bottom: 0,
    width: 1,
    style: {
      bg: 'black'
    }
  });

  blessed.box({
    parent: symbols['m'],
    top: 0,
    bottom: 0,
    left: 'center',
    width: 1,
    style: {
      bg: 'black'
    }
  });

  symbols['m'].hide();
}

function updateTime() {
  var pos = 0
    , d = new Date
    , im = 'am'
    , time
    , h
    , m
    , s;

  h = d.getHours();
  if (h >= 12) {
    im = 'pm';
  }
  if (h > 12) {
    h -= 12;
  }
  if (h < 10) {
    h = '0' + h;
  }

  m = d.getMinutes();
  if (m < 10) {
    m = '0' + m;
  }

  s = d.getSeconds();
  if (s < 10) {
    s = '0' + s;
  }

  time = process.argv[2] === '-s'
    ? h + ':' + m + ':' + s + im
    : h + ':' + m + im;

  time = time.split('');

  Object.keys(positions).forEach(function(key) {
    var symbols = positions[key];
    Object.keys(symbols).forEach(function(key) {
      symbols[key].hide();
    });
  });

  time.forEach(function(ch, i) {
    var symbols = positions[i]
      , symbol = symbols[ch];

    symbol.rleft = pos;
    pos += symbol.width + 2;

    symbol.show();
  });

  date.setContent(d.toISOString());

  screen.render();
}

screen.render();

setInterval(updateTime, 1000);

updateTime();

screen.key('q', function() {
  process.exit(0);
});
