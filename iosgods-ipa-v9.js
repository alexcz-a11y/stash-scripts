// iOSGods IPA 直链抓取 v9：抓 downloads.iosgods.com 的最终 .ipa 链接
var out = {};
try {
  var url = "";
  if (typeof $response !== "undefined" && $response && $response.headers) {
    var h = $response.headers;
    url = h["Location"] || h["location"] || "";
  }
  if (!url && typeof $request !== "undefined" && /downloads\.iosgods\.com/.test($request.url || "")) url = $request.url;
  if (/^https:\/\/downloads\.iosgods\.com\/.+\.ipa/i.test(url)) {
    console.log("[iosgods-v9] IPA=" + url);
    var page = "https://alexcz-a11y.github.io/stash-scripts/copy.html#" + "b=" + btoa(unescape(encodeURIComponent(url))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
    $notification.post("iOSGods IPA 直链已抓到", "点下面的链接打开复制页", page);
  } else {
    console.log("[iosgods-v9] no ipa url, status=" + (typeof $response !== "undefined" ? $response.status : "req") + " loc=" + url);
  }
} catch (e) {
  console.log("[iosgods-v9] error " + e);
}
$done(out);
