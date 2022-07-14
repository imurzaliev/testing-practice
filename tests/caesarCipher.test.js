const caesarCipher = require('../scripts/caesarCipher');

test('"abc",1 to be "bcd"', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('"defend the east wall of the castle",1 to be "efgfoe uif fbtu xbmm pg uif dbtumf"', () => {
  expect(caesarCipher('defend the east wall of the castle', 1)).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});

test('"defend the east wall of the castle",-1 to be "cdedmc sgd dzrs vzkk ne sgd bzrskd"', () => {
  expect(caesarCipher('defend the east wall of the castle', -1)).toBe(
    'cdedmc sgd dzrs vzkk ne sgd bzrskd'
  );
});

test('"DefEND the castle",1 to be "EfgFOE uif dbtumf"', () => {
  expect(caesarCipher('DefEND the castle', 1)).toBe('EfgFOE uif dbtumf');
});

test('"!change this text!",5 to be "!hmfslj ymnx yjcy!"', () => {
  expect(caesarCipher('!change this text!', 5)).toBe('!hmfslj ymnx yjcy!');
});
