// serve/web/i18n.js - Chinese / English for the web app's own text. app.js keeps writing English; this file swaps the
// page's text nodes and title / placeholder / aria-label attributes as they appear, and puts them back for English.
// Chat content (answers, thinking, code, file names, tool output) is never translated.
"use strict";

(function () {
  const ZH = {
    // header and tabs
    "Views": "视图", "Chat": "聊天", "Images": "图片", "Monitor": "监控", "About": "关于",
    "Connecting…": "连接中…", "Light / dark": "亮色 / 暗色", "Switch between light and dark": "切换亮色和暗色",
    "Update": "更新", "Download the latest code and restart": "拉取最新代码并重启",
    "Idle": "空闲", "Server not reachable": "无法连接服务器", "API key needed": "需要 API 密钥",
    "Reading prompt": "读取提示词",

    // chat
    "Ask anything": "随便问点什么", "Ask anything…": "随便问点什么…", "Message": "消息",
    "The model runs on this PC. Nothing leaves it.": "模型在这台电脑上运行，数据不会离开本机。",
    "Attach a text file (or drop it here)": "附加文本文件（或拖到这里）",
    "Attach a text file or a picture (or drop it here)": "附加文本文件或图片（或拖到这里）",
    "Attach a file": "附加文件", "New chat": "新对话", "Chats": "对话", "Skills": "技能",
    "Add a skill": "添加技能", "GitHub skill URL": "GitHub 技能地址",
    "https://github.com/owner/repo": "https://github.com/用户/仓库",
    "Add skill": "添加技能", "Reading the skill…": "正在读取技能…",
    "Added": "已添加", "Skill on": "已使用技能", "Skill off": "已取消技能",
    "Not a GitHub address": "这不是 GitHub 地址",
    "Paste a link like https://github.com/owner/repo.": "贴一个类似 https://github.com/owner/repo 的链接。",
    "No SKILL.md in that repo": "这个仓库里没有 SKILL.md",
    "GitHub could not find that.": "GitHub 上找不到这个地址。",
    "GitHub is limiting requests. Wait a minute and try again.": "GitHub 限制了请求次数，等一分钟再试。",
    "Could not read that skill": "读不到这个技能",
    "Could not save the skill": "技能没保存上",
    "This browser ran out of space for it.": "这个浏览器的本地空间不够了。",
    "Save this chat as Markdown": "把这段对话保存为 Markdown",
    "Save this chat": "保存对话", "Sampling and thinking": "采样与思考", "Stop": "停止", "Send": "发送",
    "Shift+Enter: new line": "Shift+Enter 换行", "You": "你", "Copy": "复制", "Copy the answer": "复制回答",
    "Copy code": "复制代码", "Remove": "移除", "Thinking…": "思考中…", "Thoughts": "思考过程", "Writing": "输出中",
    "Running": "运行中", "Not run": "未运行", "Arguments": "参数", "Result": "结果", "(being written)": "（生成中）",
    "stopped": "已停止", "projection on": "投影开", "projection off": "投影关",

    // images
    "Make an image": "生成图片", "Describe the image…": "描述你想要的图片…", "Prompt": "提示词", "Size": "尺寸",
    "Seed": "种子", "random": "随机", "Random": "随机", "Generate": "生成",
    "One image at a time; a chat request waits for it (and the other way round).": "一次生成一张；聊天请求会等它完成（反之亦然）。",
    "Generating… (a minute or more on a small GPU)": "生成中…（小显卡上要一分钟或更久）",
    "Done. Right-click an image to save it.": "完成。右键图片即可保存。",

    // monitor
    "Model state": "模型状态", "Reading": "读取中", "Generating": "生成中", "Queued": "排队中", "Error": "错误",
    "Waiting for a request": "等待请求", "Thinking": "思考", "Answering": "回答中",
    "Speed": "速度", "GPU load": "GPU 负载", "GPU temp": "GPU 温度", "Power": "功耗", "Disk read": "磁盘读取",
    "Decode": "生成", "Prefill": "预填充", "Decode now": "当前生成速度", "Decode last request": "上次请求的生成速度",
    "Prefill now": "当前预填充速度", "Prefill this request": "本次请求的预填充速度",
    "Prefill last request": "上次请求的预填充速度", "not available": "不可用",
    "not available on Windows AMD yet": "Windows AMD 暂不支持", "needs psutil (setup installs it)": "需要 psutil（安装程序会装）",
    "Context fill": "上下文占用", "Experts in VRAM": "显存中的专家", "System RAM": "系统内存", "GPU temperature": "GPU 温度",
    "Recent requests": "最近请求", "Show all": "显示全部", "Show fewer": "收起", "Time": "时间", "Status": "状态",
    "Reused": "复用", "Output": "输出", "Prefill t/s": "预填充 t/s", "Decode t/s": "生成 t/s", "VRAM hit rate": "显存命中率",
    "Duration": "耗时", "No requests yet": "还没有请求", "Done": "完成", "Max tokens": "最大 token 数", "Stopped": "已停止",
    "Closed": "已断开",
    "New prompt tokens per second, excluding reused cache tokens (engine prompt time)":
      "每秒处理的新提示词 token，不含复用的缓存 token（按引擎的提示词耗时计）",
    "While writing the answer: the share of the experts looked up that were already in VRAM. Experts the GPU read over PCIe (--pcie-frac) are not counted in it; their share of all routed experts is shown after it (+N% PCIe)":
      "生成回答时，查找的专家中已经在显存里的比例。GPU 通过 PCIe 读取的专家（--pcie-frac）不计入，它们占全部路由专家的比例显示在后面（+N% PCIe）",
    "routed experts the GPU read over PCIe (--pcie-frac) or another GPU computed": "GPU 通过 PCIe 读取（--pcie-frac）或由另一张 GPU 计算的路由专家",
    "experimental speed projection on": "实验性速度投影：开", "experimental speed projection off": "实验性速度投影：关",
    "stock": "原版",
    "Conversation cache": "对话缓存", "Parked conversations": "暂存的对话", "Their memory (RAM)": "占用内存（RAM）",
    "Last request": "上次请求", "Reused since start": "启动以来复用", "Parked / restored": "暂存 / 恢复", "Last switch": "上次切换",
    "just now": "刚刚",
    "A request that continues a parked conversation gets its state back instead of reading it again; the oldest goes when the slots or the memory are full.":
      "继续一段已暂存的对话时，会直接恢复它的状态，不用重新读取；槽位或内存满了时，最早的会被移除。",
    "The engine keeps the last conversation's state, so a follow-up reads only what is new. To keep several conversations (agents taking turns), add \"--conversation-cache-mib\", \"8192\" to the run config's args (docs/DETAILS.md).":
      "引擎会保留上一段对话的状态，追问时只读取新内容。想同时保留多段对话（多个智能体轮流使用），在运行配置的 args 里加上 \"--conversation-cache-mib\", \"8192\"（见 docs/DETAILS.md）。",
    "MCP servers": "MCP 服务器", "Connected": "已连接", "Starting": "启动中", "Failed": "失败", "Waiting": "等待中",
    "Their tools run on this PC with your rights, when the model decides to call them (in this page's chat only; switch it off in Sampling).":
      "模型决定调用时，这些工具会以你的权限在这台电脑上运行（仅限本页聊天；可在采样设置里关闭）。",
    "no server is connected yet (see the Monitor)": "还没有连接任何服务器（见监控页）",

    // about
    "Model and engine": "模型与引擎", "This PC": "本机", "Connect your tools": "连接你的工具",
    "Any OpenAI- or Anthropic-compatible client works with these addresses.": "任何兼容 OpenAI 或 Anthropic 接口的客户端都可以用下面的地址。",
    "Settings": "设置", "API key": "API 密钥", "only if the server was started with one": "仅当服务器启动时设置了密钥才需要",
    "Not needed": "不需要", "Dark theme": "暗色主题", "Chats, settings and the key are kept in this browser only.": "对话、设置和密钥只保存在这个浏览器里。",
    "Strata on GitHub": "Strata 的 GitHub", "Model settings": "模型设置", "Save": "保存", "Nothing changed.": "没有改动。",
    "Default temperature for requests that send none (0 = greedy, the default without a sampling block)":
      "没单独指定温度时用这个值（0 = 每次都选最可能的字，也是不写采样参数时的默认）",
    "Default top_p for requests that send none": "没单独指定 top_p 时用这个值",
    "Default top_k for requests that send none (1-64)": "没单独指定 top_k 时用这个值（1 到 64）",
    "Default min_p for requests that send none": "没单独指定 min_p 时用这个值",
    "Cap the thinking of every request at this many tokens (0 or empty: no cap)":
      "每次思考最多用这么多个 token（0 或留空：不限制）",
    "Shorten a max_tokens that does not fit the context instead of answering 400":
      "要求的长度超过上下文时，自动缩短，而不是直接返回 400 错误",
    "Anthropic requests that do not ask for thinking: think as the model does (model) or not (on_request)":
      "Anthropic 接口没要求思考时：按模型自己的方式思考（跟随模型），或只有请求里写了才思考（仅在请求里要求时）",
    "Where a non-default reasoning effort goes: start (the default) or end (keeps the cache when it changes)":
      "非默认的思考强度写在提示词的哪里：开头（默认），或末尾（改强度时还能用上缓存）",
    "Other model names the server lists and answers to (comma-separated)":
      "服务器另外承认的模型名，用逗号隔开",
    "Unload the model after this many seconds without requests (0 or empty: never)":
      "这么多秒没有请求就卸掉模型（0 或留空：一直留在内存里）",
    "Start without loading the model; the first request loads it (text only)":
      "启动时先不加载模型，第一次请求再加载（仅文本）",
    "End a request when the engine says nothing for this long (default 300 s, 0 = wait)":
      "引擎这么长时间没有任何输出就结束这次请求（默认 300 秒，0 = 一直等）",
    "Keep the last 100 requests' prompts and answers in memory for /api-monitor":
      "在内存里保留最近 100 次请求的问题和回答，供 /api-monitor 查看",
    "Open the chat page in the browser when the model is ready": "模型准备好后，在浏览器里打开聊天页",
    "VRAM in MiB the engine leaves free for other programs (engine default 700)":
      "留给其他程序的显存，单位 MB（引擎默认 700）",
    "model": "跟随模型", "on_request": "仅在请求里要求时", "start": "开头", "end": "末尾",
    "Kept in the model's run config for every client. An empty field is the default. They take effect the next time the model starts (close Strata's window and start it again).":
      "保存在模型的运行配置里，对所有客户端生效。留空就是默认值。下次启动模型时生效（关闭 Strata 窗口后重新启动）。",
    "default": "默认", "on": "开", "off": "关", "Model": "模型", "Engine": "引擎", "built from source": "源码编译",
    "Context": "上下文", "KV cache": "KV 缓存", "Speculation": "投机解码", "Experimental speed projection": "实验性速度投影",
    "not readable (NVML)": "无法读取（NVML）", "OpenAI base URL": "OpenAI 接口地址", "Anthropic base URL": "Anthropic 接口地址",
    "Model name": "模型名称",

    // sampling drawer
    "Sampling": "采样", "Close": "关闭", "Off": "关闭", "Low": "低", "Medium": "中", "High": "高", "Temperature": "温度",
    "0 = always the most likely word (exact, repeatable)": "0 = 总是选最可能的词（结果确定、可复现）",
    "empty = until done": "留空 = 直到写完", "Until done": "直到写完", "empty = random": "留空 = 随机",
    "Show thinking": "显示思考过程", "expanded while it streams": "生成时展开",
    "Use tools from MCP servers": "使用 MCP 服务器的工具", "the model may call them while it answers": "模型回答时可能会调用它们",
    "the engine's control vector; off = the stock model. Switching reads the chat again once": "引擎的控制向量；关闭 = 原版模型。切换后会重新读取一次对话",
    "Use for other apps too": "也用于其他应用", "omp and other API clients get these settings for anything they don't set themselves":
      "omp 和其他 API 客户端没有自己设置的参数，都会用这里的设置",
    "Reset": "重置", "Apply": "应用", "greedy": "贪心", "answers right away": "直接回答", "short": "简短", "medium": "中等",
    "thorough (default)": "充分（默认）",

    // toasts
    "Copied to clipboard": "已复制到剪贴板", "API key saved": "API 密钥已保存", "Kept in this browser only.": "只保存在这个浏览器里。",
    "This server needs a key: add it under About > Settings.": "这个服务器需要密钥：请在「关于 > 设置」里填写。",
    "This server needs an API key: add it under About > Settings.": "这个服务器需要 API 密钥：请在「关于 > 设置」里填写。",
    "Not saved": "未保存", "The request failed": "请求失败", "Still writing": "还在输出", "Stop the answer first.": "请先停止当前回答。",
    "The last one was cleared.": "上一段对话已清空。", "Undo": "撤销", "Nothing to save yet": "还没有可保存的内容",
    "Pictures are off": "图片输入已关闭", "This model was set up for text only.": "这个模型安装时只启用了文本。",
    "This model was set up for text only: the picture stays in the chat, but the model gets only the text.":
      "当前模型没有开启图片输入：图片会留在对话里，但只有文字会发给模型。",
    "Picture too large": "图片太大", "Not a text file": "不是文本文件", "File too large": "文件太大", "Sampling saved": "采样设置已保存",
    "Other apps (omp, API clients) use these settings from their next request.": "其他应用（omp、API 客户端）从下一次请求开始使用这些设置。",
    "Other apps use their own settings again.": "其他应用恢复使用各自的设置。",
    "Saved here, but not for other apps": "已在本页保存，但没能应用到其他应用",
    "Greedy: the same question gives the same answer.": "贪心模式：同样的问题会得到同样的回答。", "No image": "没有生成图片",
    "the engine reported an error": "引擎报告了错误",
  };

  const KV = {"8-bit": "8 位", "4-bit (Hadamard-rotated)": "4 位（Hadamard 旋转）", "16-bit": "16 位"};
  const kv = (s) => KV[s] || s;
  // dynamic text app.js builds; each rule gets the whole (whitespace-normalised) string
  const PATTERNS = [
    [/^(.+) runs on this PC\. Nothing leaves it\.$/, (m) => `${m[1]} 在这台电脑上运行，数据不会离开本机。`],
    [/^Reading prompt · (\d+)%$/, (m) => `读取提示词 · ${m[1]}%`],
    [/^Generating · (.+) tok\/s$/, (m) => `生成中 · ${m[1]} tok/s`],
    [/^(\d+) queued$/, (m) => `${m[1]} 个排队中`],
    [/^last: (.+) tokens at (.+) tok\/s$/, (m) => `上次：${m[1]} token，${m[2]} tok/s`],
    [/^last: (.+) tokens$/, (m) => `上次：${m[1]} token`],
    [/^(.+) tokens$/, (m) => `${m[1]} token`],
    [/^(.+) experts cached$/, (m) => `已缓存 ${m[1]} 个专家`],
    [/^of (.+) W limit$/, (m) => `上限 ${m[1]} W`],
    [/^to GPU (.+)$/, (m) => `到 GPU ${m[1]}`],
    [/^idle (Gen\d+)$/, (m) => `空闲 ${m[1]}`],
    [/^(\d+) cores$/, (m) => `${m[1]} 核`],
    [/^(\d+) threads$/, (m) => `${m[1]} 线程`],
    [/^write (.+)$/, (m) => `写入 ${m[1]}`],
    [/^Show all \((\d+)\)$/, (m) => `显示全部（${m[1]}）`],
    [/^(.+) of (.+) requests reused part of their prompt$/, (m) => `${m[2]} 个请求中有 ${m[1]} 个复用了部分提示词`],
    [/^(.+) of (.+) prompt tokens reused$/, (m) => `复用了 ${m[2]} 个提示词 token 中的 ${m[1]} 个`],
    [/^(.+) tokens \((.+)% of all prompt tokens\)$/, (m) => `${m[1]} token（占全部提示词 token 的 ${m[2]}%）`],
    [/^(.+) evicted$/, (m) => `已移除 ${m[1]}`],
    [/^(.+) min ago$/, (m) => `${m[1]} 分钟前`],
    [/^(.+) h ago$/, (m) => `${m[1]} 小时前`],
    [/^(Parked|Restored) (.+) tokens, (.+)$/, (m) => `${m[1] === "Parked" ? "暂存了" : "恢复了"} ${m[2]} token，${tr(m[3]) || m[3]}`],
    [/^Since (.+?): (.+) requests$/, (m) => `自 ${m[1]} 起：${m[2]} 个请求`],
    [/^(.+) prompt tokens read(?: at (.+) tok\/s)? \((.+) reused\)$/,
      (m) => `读取了 ${m[1]} 个提示词 token${m[2] ? `，${m[2]} tok/s` : ""}（复用 ${m[3]}）`],
    [/^(.+) written(?: at (.+) tok\/s)?$/, (m) => `输出了 ${m[1]} token${m[2] ? `，${m[2]} tok/s` : ""}`],
    [/^Thought for (.+) s$/, (m) => `思考了 ${m[1]} 秒`],
    [/^MTP drafts up to (.+) tokens(, prompt lookup on)?$/, (m) => `MTP 每次最多预测 ${m[1]} 个 token${m[2] ? "，开启提示词查找" : ""}`],
    [/^(.+), all in VRAM$/, (m) => `${kv(m[1])}，全部在显存`],
    [/^(.+), streamed: (.+) positions per layer in VRAM, the rest in RAM$/,
      (m) => `${kv(m[1])}，流式：每层 ${m[2]} 个位置在显存，其余在内存`],
    [/^(.+), (\d+) threads$/, (m) => `${m[1]}，${m[2]} 线程`],
    [/^(.+) tools from (.+); the model calls them when it decides to$/, (m) => `来自 ${m[2]} 的 ${m[1]} 个工具；模型需要时会调用`],
    [/^(.+) of (.+) servers connected$/, (m) => `已连接 ${m[2]} 个服务器中的 ${m[1]} 个`],
    [/^(.+) tools$/, (m) => `${m[1]} 个工具`],
    [/^(.+) tool calls?$/, (m) => `${m[1]} 次工具调用`],
    [/^stopped at the limit of (.+) tool rounds \(mcp\.max_rounds\)$/, (m) => `达到 ${m[1]} 轮工具调用上限后停止（mcp.max_rounds）`],
    [/^(.+) characters, cut for the model$/, (m) => `${m[1]} 字符，已为模型截断`],
    [/^(.+) characters$/, (m) => `${m[1]} 字符`],
    [/^Saved \((.+)\); the earlier file is (.+)\. Start the model again to use it\.$/,
      (m) => `已保存（${m[1]}）；原文件备份为 ${m[2]}。重新启动模型后生效。`],
    [/^(.+) is over 20 MB\.$/, (m) => `${m[1]} 超过 20 MB。`],
    [/^(.+) is over 512 KB\.$/, (m) => `${m[1]} 超过 512 KB。`],
    [/^(.+) looks like a binary file\.$/, (m) => `${m[1]} 看起来是二进制文件。`],
    [/^(.+): attach text files \(code, notes, logs, data\)( or pictures)?\.$/,
      (m) => `${m[1]}：请附加文本文件（代码、笔记、日志、数据）${m[2] ? "或图片" : ""}。`],
  ];

  function translate(s) {
    if (Object.prototype.hasOwnProperty.call(ZH, s)) return ZH[s];
    for (const [re, f] of PATTERNS) {
      const m = s.match(re);
      if (m) return f(m);
    }
    return null;
  }
  // a whole string, else its " · "-separated parts one by one (the pill, the metric lines, a message's meta line)
  function tr(raw) {
    const s = raw.replace(/\s+/g, " ").trim();
    if (!s || !/[A-Za-z]/.test(s)) return null;
    const whole = translate(s);
    if (whole != null) return whole;
    if (!s.includes(" · ")) return null;
    let any = false;
    const parts = s.split(" · ").map((p) => { const t = translate(p); if (t != null) any = true; return t != null ? t : p; });
    return any ? parts.join(" · ") : null;
  }

  // chat content stays as it is; inside an answer only the tool blocks' labels and the "Writing" cursor are the app's
  const HARD_SKIP = "pre, code, textarea, script, style, .thinking, .chip, .tool-call__name, .tool-call__preview, " +
                    ".msg-error, figcaption, [data-i18n-skip]";
  function skipped(el) {
    if (el.closest(HARD_SKIP)) return true;
    const b = el.closest(".st-bubble");
    if (!b) return false;
    return !(el.closest(".tool-call") || (el.classList.contains("cursor") && el.parentElement === b));
  }

  const ATTRS = ["title", "placeholder", "aria-label"];
  const texts = new WeakMap();   // text node -> {en, zh}
  const attrs = new WeakMap();   // element -> {attr: {en, zh}}
  let lang = "en";

  function doText(n) {
    const p = n.parentElement;
    if (!p || skipped(p)) return;
    const rec = texts.get(n), cur = n.data;
    if (rec && cur === rec.zh) return;
    const zh = tr(cur);
    if (zh == null) { texts.delete(n); return; }
    const m = cur.match(/^(\s*)[\s\S]*?(\s*)$/);
    const out = m[1] + zh + m[2];
    texts.set(n, {en: cur, zh: out});
    n.data = out;
  }
  function doAttrs(el) {
    if (el.closest("[data-i18n-skip]")) return;
    let recs = attrs.get(el);
    for (const a of ATTRS) {
      const v = el.getAttribute(a);
      if (v == null) continue;
      if (recs && recs[a] && v === recs[a].zh) continue;
      const zh = tr(v);
      if (zh == null) { if (recs) delete recs[a]; continue; }
      if (!recs) { recs = {}; attrs.set(el, recs); }
      recs[a] = {en: v, zh};
      el.setAttribute(a, zh);
    }
  }
  function each(root, onText, onEl) {
    if (root.nodeType === Node.TEXT_NODE) { onText(root); return; }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    onEl(root);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    for (let n = w.nextNode(); n; n = w.nextNode()) (n.nodeType === Node.TEXT_NODE ? onText : onEl)(n);
  }
  function undoText(n) {
    const rec = texts.get(n);
    if (rec && n.data === rec.zh) n.data = rec.en;
    texts.delete(n);
  }
  function undoAttrs(el) {
    const recs = attrs.get(el);
    if (!recs) return;
    for (const a of Object.keys(recs)) if (el.getAttribute(a) === recs[a].zh) el.setAttribute(a, recs[a].en);
    attrs.delete(el);
  }

  const observer = new MutationObserver((list) => {
    if (lang !== "zh") return;
    for (const r of list) {
      if (r.type === "childList") for (const n of r.addedNodes) each(n, doText, doAttrs);
      else if (r.type === "characterData") doText(r.target);
      else if (r.type === "attributes") doAttrs(r.target);
    }
  });
  observer.observe(document.documentElement, {subtree: true, childList: true, characterData: true,
                                              attributes: true, attributeFilter: ATTRS});

  function paintButton() {
    const b = document.getElementById("lang-btn");
    if (!b) return;
    b.textContent = lang === "zh" ? "EN" : "中";
    const label = lang === "zh" ? "Switch to English" : "切换到中文";
    b.title = label;
    b.setAttribute("aria-label", label);
  }
  function setLang(l, save) {
    lang = l === "zh" ? "zh" : "en";
    if (save) try { localStorage.setItem("strata.lang", lang); } catch (e) { /* private mode */ }
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    if (lang === "zh") each(document.body, doText, doAttrs);
    else each(document.body, undoText, undoAttrs);
    paintButton();
  }

  let saved = null;
  try { saved = localStorage.getItem("strata.lang"); } catch (e) { /* ignore */ }
  setLang(saved || ((navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en"), false);
  document.documentElement.removeAttribute("data-i18n-pending");
  document.getElementById("lang-btn").addEventListener("click", () => setLang(lang === "zh" ? "en" : "zh", true));
})();
