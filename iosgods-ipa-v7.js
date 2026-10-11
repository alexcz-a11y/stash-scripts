// iOSGods IPA 链接提取 v7：通知正文不放可点击链接，点通知打开复制页
var out = {};
try {
  var data = "";
  try { data = (JSON.parse($response.body) || {}).data || ""; } catch (e) { console.log("[iosgods-v7] parse fail"); }
  if (data) {
    var ipa = data, i = data.indexOf("&xs=");
    if (i >= 0) ipa = data.substring(i + 4);
    var name = "";
    try { name = decodeURIComponent((data.match(/dn=([^&]*)/) || [])[1] || ""); } catch (e) {}
    console.log("[iosgods-v7] IPA=" + ipa);
    var page = "https://alexcz-a11y.github.io/stash-scripts/copy.html#" + encodeURIComponent(ipa);
    $notification.post("iOSGods IPA 链接已抓到 · " + (name || ""), "点下面的链接打开复制页", page);
  }
} catch (e) {
  console.log("[iosgods-v7] error " + e);
}
$done(out);
