// iOSGods IPA 链接提取 v3：通知 + 尝试多种复制方式
var out = {};
try {
  var data = "";
  try { data = (JSON.parse($response.body) || {}).data || ""; } catch (e) { console.log("[iosgods] parse fail"); }
  if (data) {
    var ipa = data, i = data.indexOf("&xs=");
    if (i >= 0) ipa = data.substring(i + 4);
    console.log("[iosgods] IPA=" + ipa);
    // 1) 直接写剪贴板（若运行环境提供）
    try { if (typeof $clipboard !== "undefined" && $clipboard.set) { $clipboard.set(ipa); console.log("[iosgods] $clipboard.set ok"); } } catch (e) { console.log("[iosgods] clipboard err " + e); }
    try { if (typeof $pasteboard !== "undefined" && $pasteboard.set) { $pasteboard.set(ipa); console.log("[iosgods] $pasteboard.set ok"); } } catch (e) {}
    // 2) 通知：兼容多种客户端的复制参数；点击通知即复制（若支持）
    $notification.post("iOSGods IPA 链接（点击复制）", "", ipa, {
      action: "clipboard", text: ipa,
      clipboard: ipa, "update-pasteboard": ipa, "copy": ipa
    });
  }
} catch (e) {
  console.log("[iosgods] error " + e);
}
$done(out);
