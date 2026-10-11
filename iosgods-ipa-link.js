// iOSGods IPA 链接提取 v4：点通知打开复制页
var out = {};
try {
  var data = "";
  try { data = (JSON.parse($response.body) || {}).data || ""; } catch (e) { console.log("[iosgods] parse fail"); }
  if (data) {
    var ipa = data, i = data.indexOf("&xs=");
    if (i >= 0) ipa = data.substring(i + 4);
    console.log("[iosgods] IPA=" + ipa);
    var page = "https://alexcz-a11y.github.io/stash-scripts/copy.html#" + encodeURIComponent(ipa);
    $notification.post("iOSGods IPA 链接已抓到", "点击这里打开复制页", ipa, { url: page, "open-url": page, openUrl: page });
  }
} catch (e) {
  console.log("[iosgods] error " + e);
}
$done(out);
