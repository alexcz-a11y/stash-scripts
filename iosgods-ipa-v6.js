// iOSGods IPA 链接提取 v6：通知正文不放可点击链接，点通知打开复制页
var out = {};
try {
  var data = "";
  try { data = (JSON.parse($response.body) || {}).data || ""; } catch (e) { console.log("[iosgods-v6] parse fail"); }
  if (data) {
    var ipa = data, i = data.indexOf("&xs=");
    if (i >= 0) ipa = data.substring(i + 4);
    var name = "";
    try { name = decodeURIComponent((data.match(/dn=([^&]*)/) || [])[1] || ""); } catch (e) {}
    console.log("[iosgods-v6] IPA=" + ipa);
    var page = "https://alexcz-a11y.github.io/stash-scripts/copy.html#" + encodeURIComponent(ipa);
    $notification.post("iOSGods IPA 链接已抓到", "点这条通知 → 打开复制页", name || "点击后复制链接", { url: page, "open-url": page, openUrl: page });
  }
} catch (e) {
  console.log("[iosgods-v6] error " + e);
}
$done(out);
