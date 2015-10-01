var latlon = require('../src/latlon-distance');

var latlon_test = {
  test1: function(test) {
    var dist = 0;
    var errcheck;
    test.expect(6);

    // 35.632493, 139.438246 > 35.634376, 139.449318 (1.01km)
    dist = latlon(35.632493, 139.438246 ,0, 35.634376, 139.449318, 0);
    test.ok(checkPer(dist, 1010, 5), "OK:"+dist+"/"+1010);
    // 35.634376, 139.449318 > 35.652303, 139.448031 (2km)
    dist = latlon(35.634376, 139.449318, 0, 35.652303, 139.448031, 0);
    test.ok(checkPer(dist, 2000, 5), "OK:"+dist+"/"+2000);
    // 35.652303, 139.448031 > 35.620075, 139.409493 (5km)
    dist = latlon(35.652303, 139.448031, 0, 35.620075, 139.409493, 0);
    test.ok(checkPer(dist, 5000, 5), "OK:"+dist+"/"+5000);
    // 35.620124, 139.409352 > 35.620124, 139.409331 (1.97m)
    dist = latlon(35.620124, 139.409352, 0, 35.620124, 139.409331, 0);
    test.ok(checkPer(dist, 1.97, 5), "OK:"+dist+"/"+1.97);
    // 35.620125, 139.409331 > 35.620134, 139.409328 (1.06m)
    dist = latlon(35.620125, 139.409331, 0, 35.620134, 139.409328, 0);
    test.ok(checkPer(dist, 1.06, 5), "OK:"+dist+"/"+1.06);

    // 非数値
    errcheck = latlon("a", 10, 0, null, 139.409328, 0);
    test.ok(!errcheck, "Error check ok.");

    // 終了
    test.done();
  }
};

/**
 * 両数値が誤差のパーセンテージ内かをチェックしてtrue / falseで返す
 * @param double check チェックする値
 * @param double targ 目的の値
 * @param double gosa 誤差のパーセンテージ
 */
function checkPer(check, targ, gosa) {
  var rate = (check/targ)*100;
  return (rate >= 100-gosa) && (rate <= 100+gosa);
}

module.exports = latlon_test;
