// iOSGods IPA 直链抓取 v8：抓 downloads.iosgods.com 的最终 .ipa 链接
var out = {};
try {
  var url = "";
  if (typeof $response !== "undefined" && $response && $response.headers) {
    var h = $response.headers;
    url = h["Location"] || h["location"] || "";
  }
  if (!url && typeof $request !== "undefined" && /downloads\.iosgods\.com/.test($request.url || "")) url = $request.url;
  if (/^https:\/\/downloads\.iosgods\.com\/.+\.ipa/i.test(url)) {
    console.log("[iosgods-v8] IPA=" + url);
    var page = "https://alexcz-a11y.github.io/stash-scripts/copy.html#" + encodeURIComponent(url);
    $notification.post("iOSGods IPA 直链已抓到", "点下面的链接打开复制页", page);
  } else {
    console.log("[iosgods-v8] no ipa url, status=" + (typeof $response !== "undefined" ? $response.status : "req") + " loc=" + url);
  }
} catch (e) {
  console.log("[iosgods-v8] error " + e);
}
$done(out);
