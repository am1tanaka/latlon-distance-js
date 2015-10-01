// GSR80による赤道半径(m)
// 国土地理院 日本の測地系 http://www.gsi.go.jp/sokuchikijun/datum-main.html
var EARTH_R = 6378137;

/** 2点間の直線距離を返す
 * @param double lat0 緯度
 * @param double lon0 経度
 * @param double ele0 標高
 * @param double lat1 緯度2
 * @param double lon1 経度2
 * @param double ele1 標高2
 * @return double ２点間の距離をメートル単位で返す。引数が異常な場合はfalseを返す
 */
module.exports = function(lat0, lon0, ele0, lat1, lon1, ele1) {
  // Math.sin() / cos()
  // Math.PI
  var pos0 = calcPos(lat0, lon0, ele0);
  var pos1 = calcPos(lat1, lon1, ele1);
  if (!pos0 || !pos1) {
    return false;
  }
  var dx = pos0.x-pos1.x;
  var dy = pos0.y-pos1.y;
  var dz = pos0.z-pos1.z;
  return Math.sqrt(dx*dx+dy*dy+dz*dz);
};

/**
 * 指定の緯度経度と標高を3D座標に変換して、オブジェクトで返す
 * @param double lat 緯度
 * @param double lon 経度
 * @param double ele 標高(m)
 * @return x:X座標 / y:Y座標 / z:Z座標。エラーの時はfalse
 */
function calcPos(lat, lon, ele) {
  var ret = {};
  var r = (EARTH_R+(ele-0));
  lat = (lat-0)*Math.PI/180;
  lon = (lon-0)*Math.PI/180;
  ele = ele-0;
  if (isNaN(lat) || isNaN(lon) || isNaN(ele)) {
    return false;
  }
  ret.x = r*Math.cos(lon)*Math.cos(lat);
  ret.y = r*Math.sin(lat);
  ret.z = r*Math.sin(lon)*Math.cos(lat);
  return ret;
}
