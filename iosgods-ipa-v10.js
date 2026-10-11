// iOSGods IPA 直链抓取 v10：只把 路径+签名 放进复制页网址（更短），由页面还原完整链接
var out = {};
try {
  var url = "";
  if (typeof $response !== "undefined" && $response && $response.headers) {
    var h = $response.headers;
    url = h["Location"] || h["location"] || "";
  }
  if (!url && typeof $request !== "undefined" && /downloads\.iosgods\.com/.test($request.url || "")) url = $request.url;
  var m = url.match(/^https:\/\/downloads\.iosgods\.com(\/[^?]+\.ipa)\?hmacmessage=[^&]*?%3Fverify%3D([^&]+?)(?:&|$)/i);
  if (m) {
    console.log("[iosgods-v10] FULL=" + url);
    var page = "https://alexcz-a11y.github.io/stash-scripts/copy.html#p=" + m[1] + "&v=" + m[2];
    $notification.post("iOSGods IPA 直链已抓到", "点下面的链接打开复制页", page);
  } else {
    console.log("[iosgods-v10] no ipa url, loc=" + url);
  }
} catch (e) {
  console.log("[iosgods-v10] error " + e);
}
$done(out);
