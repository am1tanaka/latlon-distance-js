var latlon = require('../src/latlon-distance');

var latlon_test = {
  test1: function(test) {
    test.expect(5);

    // 35.632493, 139.438246 > 35.634376, 139.449318 (1.01km)
    test.equal(latlon(35.632493, 139.438246 ,0, 35.634376, 139.449318, 0), 1010);
    // 35.634376, 139.449318 > 35.652303, 139.448031 (2km)
    test.equal(latlon(35.634376, 139.449318, 0, 35.652303, 139.448031, 0), 2000);
    // 35.652303, 139.448031 > 35.620075, 139.409493 (5km)
    test.equal(latlon(35.652303, 139.448031, 0, 35.620075, 139.409493, 0), 5000);
    // 35.620124, 139.409352 > 35.620124, 139.409331 (1.97m)
    test.equal(latlon(35.620124, 139.409352, 0, 35.620124, 139.409331, 0), 1.97);
    // 35.620125, 139.409331 > 35.620134, 139.409328 (1.06m)
    test.equal(latlon(35.620125, 139.409331, 0, 35.620134, 139.409328, 0), 1.06);

    // 終了
    test.done();
  }
};

module.exports = latlon_test;