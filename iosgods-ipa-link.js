// iOSGods IPA 链接提取 v2
var out = {};
try {
  console.log("[iosgods] start " + $request.url);
  var data = "";
  try { data = (JSON.parse($response.body) || {}).data || ""; } catch (e) { console.log("[iosgods] parse fail"); }
  console.log("[iosgods] data=" + String(data).slice(0, 500));
  if (data) {
    var ipa = data, i = data.indexOf("&xs=");
    if (i >= 0) ipa = data.substring(i + 4);
    console.log("[iosgods] IPA=" + ipa);
    $notification.post("iOSGods IPA 链接", "", ipa);
  }
} catch (e) {
  console.log("[iosgods] error " + e);
}
$done(out);
