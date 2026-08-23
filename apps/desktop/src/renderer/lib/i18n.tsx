import { useAtomValue } from "jotai"
import { createContext, useCallback, useContext, useEffect, type ReactNode } from "react"
import { languageAtom, type AppLanguage } from "../atoms/preferences"

type TranslationMap = Record<string, string>

const zh: TranslationMap = {
	Palot: "Palot",
	General: "通用",
	Appearance: "外观",
	Language: "语言",
	Chinese: "中文",
	English: "English",
	Theme: "主题",
	Light: "浅色",
	Dark: "深色",
	System: "跟随系统",
	"Use light, dark, or match your system": "使用浅色、深色，或跟随系统设置",
	"Choose the language used by the BoatHarness interface": "选择 BoatHarness 界面使用的语言",
	"Default open destination": "默认打开位置",
	"Where files and folders open by default": "文件和文件夹默认打开的位置",
	"Select...": "请选择...",
	"Use opaque background": "使用不透明背景",
	"Make windows use a solid background rather than system translucency": "使用纯色背景，不使用系统半透明效果",
	"Display mode": "显示模式",
	"Adjust how much detail is shown in conversations": "调整对话中显示的详细程度",
	Default: "默认",
	Verbose: "详细",
	Servers: "服务器",
	Notifications: "通知",
	Providers: "提供商",
	Worktrees: "工作树",
	Setup: "设置",
	About: "关于",
	"Back to app": "返回应用",
	"New Session": "新建会话",
	"New session": "新建会话",
	"Automations": "自动化",
	"Active Now": "正在运行",
	Recent: "最近使用",
	Projects: "项目",
	Settings: "设置",
	"Server offline": "服务器离线",
	"No projects yet": "还没有项目",
	"Add a project to get started": "添加项目以开始使用",
	"No sessions yet": "还没有会话",
	"Add Project": "添加项目",
	"Add project": "添加项目",
	"Add Remote Project": "添加远程项目",
	"Directory Path": "目录路径",
	"Search projects": "搜索项目",
	"Command palette": "命令面板",
	"Toggle sidebar (⌘B)": "切换侧边栏（⌘B）",
	"New session (⌘N)": "新建会话（⌘N）",
	"Command palette (⌘K)": "命令面板（⌘K）",
	"No results found.": "没有找到结果。",
	"Undo Last Turn": "撤销上一轮",
	Redo: "重做",
	"Compact Conversation": "压缩对话",
	"Fork Session": "分叉会话",
	"Loading...": "加载中...",
	"Loading chat...": "正在加载对话...",
	"Load earlier messages": "加载更早的消息",
	"No messages yet": "还没有消息",
	Queued: "排队中",
	"Sending...": "发送中...",
	"Send now": "立即发送",
	"What would you like to do?": "你想做什么？",
	"Send a follow-up message...": "发送后续消息...",
	"Attach files": "附加文件",
	"Copy response": "复制回复",
	Copied: "已复制",
	"Fork from here": "从这里分叉",
	"Forking...": "正在分叉...",
	"Undo from here": "从这里撤销",
	"Jump to start of response": "跳转到回复开头",
	"Select model...": "选择模型...",
	"No models": "没有模型",
	"No models found": "没有找到模型",
	"Default variant": "默认变体",
	Local: "本地",
	Disconnected: "未连接",
	"Context Window": "上下文窗口",
	Usage: "使用量",
	Tokens: "令牌",
	Limit: "上限",
	Model: "模型",
	Compaction: "压缩",
	Remaining: "剩余",
	"Allow once": "允许一次",
	"Allow always": "始终允许",
	Deny: "拒绝",
	"Sub-agent requesting permission": "子代理请求权限",
	"Sub-agent asking a question": "子代理正在提问",
	Agent: "代理",
	Completed: "已完成",
	Planning: "规划中",
	"Reading files...": "正在读取文件...",
	"Searching codebase...": "正在搜索代码库...",
	"Fetching web content...": "正在获取网页内容...",
	"Making edits...": "正在修改文件...",
	"Running command...": "正在运行命令...",
	"Asking a question...": "正在提问...",
	"Thinking...": "思考中...",
	"Composing response...": "正在组织回复...",
	"Working...": "工作中...",
	"Changes": "变更",
	"Collapse all": "全部折叠",
	"Expand all": "全部展开",
	"Restore panel size": "恢复面板大小",
	"Expand to full width": "展开到全宽",
	"Loading changes...": "正在加载变更...",
	"All files": "所有文件",
	"No changes yet": "还没有变更",
	"Something went wrong": "出了点问题",
	"No session selected": "未选择会话",
	"Session not found": "找不到会话",
	"Page not found": "页面不存在",
	"Branch switch failed": "切换分支失败",
	current: "当前",
	"Stash & Switch": "暂存并切换",
	"Open in terminal": "在终端中打开",
	Open: "打开",
	"No editors found": "未找到编辑器",
	"Click to copy branch name": "点击复制分支名称",
	"Copied to clipboard": "已复制到剪贴板",
	"Update available": "有可用更新",
	"Ready to install": "可以安装",
	"Automation not found": "找不到自动化任务",
	Paused: "已暂停",
	"No runs yet": "还没有运行记录",
	"Run history": "运行记录",
	"No automations yet": "还没有自动化任务",
	"Automations run unattended": "自动化任务会在无人值守时运行",
	Filter: "筛选",
	"Filter automations": "筛选自动化任务",
	Edit: "编辑",
	"Run now": "立即运行",
	Schedule: "计划",
	Custom: "自定义",
	Type: "类型",
	Every: "每",
	at: "在",
	on: "于",
	minutes: "分钟",
	hours: "小时",
	Next: "下次：",
	Name: "名称",
	Prompt: "提示词",
	"Agent & model": "代理和模型",
	"No projects found": "没有找到项目",
	Cancel: "取消",
	Done: "完成",
	"Version": "版本",
	"Development build": "开发版本",
	"Not found": "未找到",
	"Checking...": "检查中...",
	"Migrated from": "迁移自",
	"Password set": "已设置密码",
	Optional: "可选",
	URL: "网址",
	Username: "用户名",
	Password: "密码",
	"API Key": "API 密钥",
	"Authorization Code": "授权码",
	"Starting authentication...": "正在开始身份验证...",
	"Enter this code in the browser": "请在浏览器中输入此代码",
	"Choose an authentication method:": "选择身份验证方式：",
	"Connected": "已连接",
	"Connected with an API key": "已通过 API 密钥连接",
	"Connected via OAuth": "已通过 OAuth 连接",
	"Configured in opencode.json": "已在 opencode.json 中配置",
	"All Providers": "所有提供商",
	"Full base URL of the OpenCode server": "OpenCode 服务器的完整基础网址",
	"Stored securely in your system keychain": "安全存储在系统钥匙串中",
	"No worktrees": "没有工作树",
	"Output": "输出",
	"Commit all changes and push to remote": "提交所有变更并推送到远程仓库",
	Branch: "分支",
	"Commit message": "提交信息",
	Action: "操作",
	"Work Time": "工作时间",
	Cost: "费用",
	"Token Breakdown": "令牌明细",
	Input: "输入",
	Reasoning: "推理",
	"Cache read": "缓存读取",
	"Cache write": "缓存写入",
	Exchanges: "交互次数",
	"User messages": "用户消息",
	"Agent responses": "代理回复",
	Models: "模型",
	"Avg cost / exchange": "平均每次交互费用",
	"Avg time / exchange": "平均每次交互时间",
	"You're all set.": "一切就绪。",
	"Backup saved": "备份已保存",
	"Your desktop companion for OpenCode.": "你的 OpenCode 桌面伴侣。",
	"This takes less than a minute.": "整个过程不到一分钟。",
	"Waiting for OpenCode server...": "正在等待 OpenCode 服务器...",
	"AI Providers": "AI 提供商",
	"Environment Check": "环境检查",
	"Or connect to a remote server": "或连接到远程服务器",
	"Connect manually by URL...": "通过网址手动连接...",
	Never: "从不",
	"Only when unfocused": "仅在窗口未聚焦时",
	Always: "始终",
	"Choose a skill to use in your prompt": "选择要在提示词中使用的技能",
	Search: "搜索",
	"Build what's next": "构建下一步",
}

const en: TranslationMap = Object.fromEntries(Object.entries(zh).map(([key, value]) => [value, key]))

const translations: Record<AppLanguage, TranslationMap> = { "zh-CN": zh, "en-US": en }

const sourceTextByNode = new WeakMap<Text, string>()
const lastTranslatedTextByNode = new WeakMap<Text, string>()
const sourceAttributeByElement = new WeakMap<Element, Map<string, string>>()
const lastTranslatedAttributeByElement = new WeakMap<Element, Map<string, string>>()

export function translate(value: string, language: AppLanguage): string {
	return translations[language][value] ?? value
}

interface I18nContextValue {
	language: AppLanguage
	t: (value: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function useI18n(): I18nContextValue {
	const context = useContext(I18nContext)
	if (!context) throw new Error("useI18n must be used inside I18nProvider")
	return context
}

export function I18nProvider({ children }: { children: ReactNode }) {
	const language = useAtomValue(languageAtom)
	const t = useCallback((value: string) => translate(value, language), [language])

	useEffect(() => {
		document.documentElement.lang = language
	}, [language])

	return <I18nContext.Provider value={{ language, t }}>{children}</I18nContext.Provider>
}

/**
 * Localizes static product chrome that is still rendered by legacy Palot
 * components. AI output, code, terminal output, and user content are skipped.
 */
export function StaticTextLocalizer() {
	const { language } = useI18n()

	useEffect(() => {
		const translateTree = () => {
			const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
			let node: Text | null = walker.nextNode() as Text | null
			while (node) {
				const parent = node.parentElement
				if (parent && !parent.closest("pre,code,textarea,[data-no-i18n]")) {
					const current = node.nodeValue ?? ""
					const source = lastTranslatedTextByNode.get(node) === current
						? sourceTextByNode.get(node) ?? current
						: current
					const visibleText = lastTranslatedTextByNode.get(node) === current ? current.trim() : source.trim()
					if (source !== current && lastTranslatedTextByNode.get(node) !== current) {
						sourceTextByNode.set(node, current)
					}
					const localized = translate(source.trim(), language)
					if (source.trim() && localized !== visibleText) {
						sourceTextByNode.set(node, source.trim())
						node.nodeValue = current.replace(visibleText, localized)
						lastTranslatedTextByNode.set(node, node.nodeValue ?? "")
					} else if (lastTranslatedTextByNode.get(node) === current && current !== localized) {
						node.nodeValue = localized
						lastTranslatedTextByNode.set(node, node.nodeValue ?? "")
					}
				}
				node = walker.nextNode() as Text | null
			}

			for (const element of document.body.querySelectorAll<HTMLElement>("[title], [aria-label], [placeholder]")) {
				if (element.closest("pre,code,textarea,[data-no-i18n]")) continue
				const sources = sourceAttributeByElement.get(element) ?? new Map<string, string>()
				const translated = lastTranslatedAttributeByElement.get(element) ?? new Map<string, string>()
				for (const name of ["title", "aria-label", "placeholder"]) {
					const current = element.getAttribute(name)
					if (!current) continue
					const source = translated.get(name) === current ? sources.get(name) ?? current : current
					if (translated.get(name) !== current) sources.set(name, current)
					const localized = translate(source, language)
					if (localized !== current) {
						element.setAttribute(name, localized)
						translated.set(name, localized)
					}
				}
				sourceAttributeByElement.set(element, sources)
				lastTranslatedAttributeByElement.set(element, translated)
			}
		}

		translateTree()
		const observer = new MutationObserver(translateTree)
		observer.observe(document.body, { childList: true, subtree: true, characterData: true })
		return () => observer.disconnect()
	}, [language])

	return null
}
