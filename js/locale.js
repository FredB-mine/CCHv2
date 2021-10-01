var lang_en = {
	general: {
		title: "Codeforces Contest Helper v2.0",
		singleNav: "Single",
		multiNav: "Multi",
		contestNav: "Contest",
		questionNav: "Problem",
		infoNav: "Profile",
		settingNav: "Settings",
		singleTitle: "<i class='fas fa-calendar'></i> Select Contest Type",
		singleDivider: "OR",
		singleContestantPointer: "Contestant",
		singleVirtualPointer: "Virtual",
		singleContestantButton: "Fetch Information",
		singleVirtualButton: "Fetch Information",
		singleCheckExist: "Checking Existance...",
		singleHeadBack: "Back to select page",
		singleSmallWindow: "Open small window",
		singleSmallWindowClose: "Close small window",
		alertLoadSuccess: "Load Success!",
		Rank: "Rank",
		Problem: "Problem",
		contestRunning: "Contest Ends in {0}",
		contestPendingSystemTest: "Pending System Test",
		contestSystemTest: "System Testing",
		contestFinished: "Finished",
		settingsSingle: "<span class='fas fa-user'></span> Single Mode",
		settingsPreference: "<span class='fas fa-palette'></span> Preference",
		settingsAccount: "<span class='fas fa-user-circle'></span> Account",
		settingsProblemPage: "<span class='fas fa-book'></span> Problem Page",
		Ascending: "Ascending",
		Descending: "Descending",
		Disabled: "Disabled",
		Div1Only: "Div. 1 only",
		RatedOnly: "Rated Only",
		Enabled: "Enabled",
		tagContestant: "Contestant",
		tagUnrated: "Unrated",
		tagVirtual: "Virtual",
		Unrated: "Unrated",
		System: "System",
		Light: "Light",
		Dark: "Dark",
		setAsDefault: "Set As Default",
		Rank: "Rank",
		verdict: "Verdict",
		language: "Language",
		time: "Time",
		memory: "Memory",
		close: "Close",
		back: "Back",
		reloadLanguages: "<span class='fas fa-sync-alt'></span> Reload Language",
		reloadLanguagesSuccess: "<span class='fas fa-check green'></span> Reload Success!",
		currentUser: "<span class='fas fa-check green'></span> Current user: {0}",
		notLoggedIn: "<span class='fas fa-times red'></span> Not logged in",
		settingsLoginButton: "<i class='fas fa-sign-in-alt'></i> Click here to log in",
		settingsLoadingLoginType: "<span class='fas fa-pulse fa-spinner'></span> Loading Login Type...",
		loadLoginTypeError: "<span class='fas fa-unlink red'></span> Load login type error. Click here to retry.",
		loginLoading: "<span class='fas fa-pulse fa-spinner'></span> Loading...",
		loginSuccess: "<span class='fas fa-check green'></span> Login Success!",
		sendAnswer: "Send Answer",
		input: "Input",
		output: "Output",
		copy: "Copy",
		copied: "Copied",
		forceLoadStandings: "Force Load Standings",
		openProblems: "Open Problems",
		submitSuccess: "Submit Success!",
		unlimited: "Unlimited",
		flushContestList: "Flush contest list...",
		copyInfo: "Copy Info",
		success: "Success",
		failed: "Failed",
		loading: "Loading",
		noMatchedContest: "No Matched Contest",
		contestListStart: "Not started",
		contestListRun: "Running",
		contestListEnd: "Ended",
		ratedRank: "Rated",
		unratedRank: "Unrated",
		boxButton: "Box",
		listButton: "List",
		eventButton: "Event",
	},
	input: {
		singleContestantUsername: "Username",
		singleContestantContestId: "Contest ID",
		singleVirtualUsername: "Username",
		singleVirtualContestId: "Contest ID",
		singleVirtualTime: "Time (YYYY/M/D HH:MM)",
		search: "Search",
	},
	error: {
		errorUsernameError: "Username Error",
		errorContestIdError: "Contset Id Error",
		errorNetworkError: "Network Error",
		errorUserNotFound: "User Not Found",
		errorLoadTimeout: "Load Timeout",
		errorContestNotFound: "Contest Not Found",
		errorTimeFormatError: "Time Format Error",
		errorNotInTheContest: "Not in the contest",
		errorContestNotStarted: "Contest not started",
		errorVirtualInfoNotFound: "Virtual round not found",
		errorCannotGetCode: "Cannot Get Code",
		errorLoginFailed: "<span class='fas fa-exclamation-triangle red'></span> Login Failed",
		errorLoadFailed: "<span class='fas fa-exclamation-triangle red'></span> Load Failed",
		errorCsrfLoadFailed: "<span class='fas fa-exclamation-triangle red'></span> 'csrf_token' Load Failed",
		errorSubmitFailed: "Submit Failed",
		errorRegisterFailed: "Register contest failed!",
	},
	tip: {
		tipInitializing: "Initializing...",
		tipContestNotStarted: "Contest has not started.",
		tipHaveARest: "Take a deep breath and have a rest.",
		tipContestStartIn: "Contest starts in {0}",
		tipLoading: "Loading...",
		tipCalculatingRankGraph: "Loading rank graph...",
		tipNoSubmissionFound: "No submission found",
		tipFetchingStandings: "Fetching standings...",
		tipFetchingHacks: "Fetching hacks...",
		tipVirtualTime: "Insert 'auto' to get the latest virtual round <span class='red'>with at least one submission</span>.",
		tipClickToGoBack: "Click here to go back.",
		tipNotRegtered: "You are not registered. <span onclick='singleRegisterContest()' style='cursor: pointer; text-decoration: underline'>Click here to register</span>."
	},
	settings: {
		fontFamily: [
			"<span class='fas fa-font'></span> Font Family",
			"Use commas(,) to split font name. Monospace font can make a better view."
		],
		editorFontFamily: [
			"<span class='fas fa-code'></span> Code Block Font Family",
			"Set font family for code blocks."
		],
		editorFontSize: [
			"<span class='fas fa-text-width'></span> Code Block Font Size",
			"Set font size for code blocks."
		],
		statementFontFamily: [
			"<span class='fas fa-clipboard-list'></span> Statement Font Family",
			"Set font family for problem statements."
		],
		timeLimit: [
			"<span class='fas fa-stopwatch'></span> Load Time Limit",
			"Time limits while fetching information. Big time limit will be used to limit standings and rating changes loader."
		],
		reloadTime: [
			"<span class='fas fa-hourglass-half'></span> Information Load Time",
			"Load time between updates during the contest."
		],
		smallReloadTime: [
			"<span class='fas fa-sync-alt'></span> Small Reload Time",
			"Reload time when some of the informations are not be able to be loaded."
		],
		mainURL: [
			"<span class='fas fa-link'></span> Main URL",
			"URL used while opening Codeforces links."
		],
		predictorURL: [
			"<span class='fas fa-search'></span> Predictor URL",
			"Address to get predicted rating changes."
		],
		openStandings: [
			"<span class='fas fa-list-ol'></span> Open Standings",
			"Select when to load the standings and hacks of a contest. <span class='red'>The data can be really large, so think twice.</span>"
		],
		standingsLoadingGap: [
			"<span class='fas fa-stopwatch'></span> Standings Loading Gap",
			"Load time between standings updates."
		],
		openRankPredict: [
			"<span class='fas fa-calculator'></span> Open Rank Calculator",
			"Select when to enable history rank calculator. <span class='red'>Standings Required.</span>"
		],
		problemSubmissionDirection: [
			"<span class='fas fa-server'></span> Submission Order",
			"Order option of submissions for each problem."
		],
		problemEventDirection: [
			"<span class='fas fa-book'></span> Event Order",
			"Order option of events for the contest."
		],
		language: [
			"<span class='fas fa-language'></span> Language",
			"The language can be loaded without rebooting."
		],
		styleSelection: [
			"<span class='fas fa-paint-roller'></span> Style",
			"Select favourite style."
		],
		virtualFilter: [
			"<span class='fas fa-filter'></span> Open Virtual Filter",
			"Choose how history rank calculator deal with virtual information. Open this to remove them."
		],
		codeforcesApiUrl: [
			"<span class='fas fa-exchange-alt'></span> Codeforces API URL", 
			"Set the address of Codeforces APIs."
		],
		showProblemStatus: [
			"<span class='fas fa-question-circle'></span> Show Problem Status Bar",
			"View problem status percentage under Problem mode. <span class='red'>Standings Required.</span>"
		],
		accountHandleOrEmail: [
			"<span class='fas fa-user'></span> Handle or Email", ""
		],
		accountPassword: [
			"<span class='fas fa-key'></span> Password", ""
		],
		openProblems: [
			"<span class='fas fa-tasks'></span> Open Problems",
			`Open problems if the contest is not ended.`
		],
		transformPort: [
			"<span class='fas fa-location-arrow'></span> Transform Port",
			"Set the ports while communicating to editors. Use commas(,) to split each port."
		],
		statementFontSize: [
			"<span class='fas fa-text-width'></span> Statement Font Size",
			"Set font size for statements."
		],
		statementDefaultLanguage: [
			"<span class='fas fa-cloud-upload-alt'></span> Submit Default Language",
			"Set default language while submitting."
		],
	}
};
var lang_zh = {
	general: {
		title: "Codeforces Contest Helper v2.0",
		singleNav: "个人",
		multiNav: "多人",
		contestNav: "比赛",
		questionNav: "题目",
		infoNav: "简介",
		settingNav: "设置",
		singleTitle: "<i class='fas fa-calendar'></i> 选择比赛类型",
		singleDivider: "或",
		singleContestantPointer: "参赛者",
		singleVirtualPointer: "虚拟赛",
		singleContestantButton: "获取信息",
		singleVirtualButton: "获取信息",
		singleCheckExist: "检查合法性......",
		singleHeadBack: "返回选择界面",
		singleSmallWindow: "打开小窗口",
		singleSmallWindowClose: "关闭小窗口",
		alertLoadSuccess: "加载成功！",
		Rank: "排名",
		Problem: "题目",
		contestRunning: "在 {0} 后结束",
		contestPendingSystemTest: "等待系统测试",
		contestSystemTest: "系统测试中",
		contestFinished: "已结束",
		settingsSingle: "<span class='fas fa-user'></span> 个人模式",
		settingsPreference: "<span class='fas fa-palette'></span> 个性化",
		settingsAccount: "<span class='fas fa-user-circle'></span> 账号",
		settingsProblemPage: "<span class='fas fa-book'></span> 题目界面",
		Ascending: "递增",
		Descending: "递减",
		Disabled: "关闭",
		Div1Only: "仅 Div. 1",
		RatedOnly: "仅 Rated",
		Enabled: "开启",
		tagContestant: "参赛者",
		tagUnrated: "不计 Rating",
		tagVirtual: "虚拟赛",
		Unrated: "Unrated",
		System: "跟随系统",
		Light: "亮色",
		Dark: "暗色",
		setAsDefault: "设置为默认值",
		Rank: "排名",
		tipVirtualTime: "输入 'auto' 以获取最近的<span class='red'>提交至少一次的</span>虚拟赛时间。",
		verdict: "评测结果",
		language: "语言",
		time: "用时",
		memory: "内存",
		close: "关闭",
		back: "返回",
		reloadLanguages: "<span class='fas fa-sync-alt'></span> 重载代码语言",
		reloadLanguagesSuccess: "<span class='fas fa-check green'></span> 重载成功！",
		currentUser: "<span class='fas fa-check green'></span> 当前用户: {0}",
		notLoggedIn: "<span class='fas fa-times red'></span> 未登录",
		settingsLoginButton: "<i class='fas fa-sign-in-alt'></i> 点此以登录",
		settingsLoadingLoginType: "<span class='fas fa-pulse fa-spinner'></span> 加载登录状态......",
		loadLoginTypeError: "<span class='fas fa-unlink red'></span> 加载登陆状态失败。点此重试。",
		loginLoading: "<span class='fas fa-pulse fa-spinner'></span> 加载中......",
		loginSuccess: "<span class='fas fa-check green'></span> 登陆成功！",
		sendAnswer: "提交答案",
		input: "输入",
		output: "输出",
		copy: "复制",
		copied: "已复制",
		forceLoadStandings: "强制加载排行榜",
		openProblems: "打开问题界面",
		submitSuccess: "提交成功！",
		unlimited: "无限制",
		flushContestList: "刷新比赛列表中......",
		copyInfo: "复制信息",
		success: "成功",
		failed: "失败",
		loading: "加载中",
		noMatchedContest: "没有匹配的比赛",
		contestListStart: "未开始",
		contestListRun: "进行中",
		contestListEnd: "已结束",
		ratedRank: "Rated",
		unratedRank: "Unrated",
		boxButton: "方格",
		listButton: "列表",
		eventButton: "事件",
	},
	input: {
		singleContestantUsername: "用户名",
		singleContestantContestId: "比赛 ID",
		singleVirtualUsername: "用户名",
		singleVirtualContestId: "比赛 ID",
		singleVirtualTime: "时间 (YYYY/M/D HH:MM)",
		search: "搜索",
	},
	error: {
		errorUsernameError: "用户名错误",
		errorContestIdError: "比赛 ID 错误",
		errorNetworkError: "网络错误",
		errorUserNotFound: "用户未找到",
		errorLoadTimeout: "加载超时",
		errorContestNotFound: "比赛未找到",
		errorTimeFormatError: "时间格式错误",
		errorNotInTheContest: "不在比赛当中",
		errorContestNotStarted: "比赛没有开始",
		errorVirtualInfoNotFound: "未找到虚拟赛信息",
		errorCannotGetCode: "无法获取代码",
		errorLoginFailed: "<span class='fas fa-exclamation-triangle red'></span> 登录失败",
		errorLoadFailed: "<span class='fas fa-exclamation-triangle red'></span> 加载失败",
		errorCsrfLoadFailed: "<span class='fas fa-exclamation-triangle red'></span> 'csrf_token' 加载失败",
		sendAnswer: "提交答案",
		errorSubmitFailed: "提交失败",
		errorRegisterFailed: "报名比赛失败！"
	},
	tip: {
		tipInitializing: "初始化中......",
		tipContestNotStarted: "比赛仍未开始。",
		tipHaveARest: "深呼吸，放松一下。",
		tipContestStartIn: "比赛将在 {0} 后开始。",
		tipLoading: "加载中......",
		tipCalculatingRankGraph: "加载排名图像中",
		tipNoSubmissionFound: "未找到提交记录",
		tipFetchingStandings: "获取排行榜信息......",
		tipFetchingHacks: "获取 hack 记录......",
		tipVirtualTime: "输入 'auto' 以获取最近的<span class='red'>提交至少一次的</span>虚拟赛时间。",
		tipClickToGoBack: "点此以返回。",
		tipNotRegtered: "你还没有报名这场比赛。<span onclick='singleRegisterContest()' style='cursor: pointer; text-decoration: underline'>点此报名</span>。"
	},
	settings: {
		fontFamily: [
			"<span class='fas fa-font'></span> 字体",
			"使用逗号进行字体名字分割。使用等宽字体会打开更好的效果。"
		],
		editorFontFamily: [
			"<span class='fas fa-code'></span> 代码块字体",
			"为代码块设置字体。"
		],
		editorFontSize: [
			"<span class='fas fa-text-width'></span> 代码块字体大小",
			"为代码块设置字体大小。"
		],
		statementFontFamily: [
			"<span class='fas fa-clipboard-list'></span> 题目信息字体",
			"为题目信息设置字体。"
		],
		timeLimit: [
			"<span class='fas fa-stopwatch'></span> 加载时间限制",
			"加载信息时的时间限制。大时间限制将用于比赛排行榜和 Rating 变化量。"
		],
		reloadTime: [
			"<span class='fas fa-hourglass-half'></span> 信息获取间隔",
			"比赛时获取必要信息的时间间隔。"
		],
		smallReloadTime: [
			"<span class='fas fa-sync-alt'></span> 重新加载时间",
			"在重要信息没有加载成功后的等待时间。"
		],
		mainURL: [
			"<span class='fas fa-link'></span> 主页地址",
			"打开 Codeforces 链接使用的主页地址。"
		],
		predictorURL: [
			"<span class='fas fa-search'></span> 预测器地址",
			"获取比赛 Rating 变化的地址。"
		],
		openStandings: [
			"<span class='fas fa-list-ol'></span> 打开排行榜获取",
			"选择何时进行排行榜和 hack 的获取。<span class='red'>因为获取的信息量会很大，所以三思而后行。</span>"
		],
		standingsLoadingGap: [
			"<span class='fas fa-stopwatch'></span> 排行榜获取间隔",
			"比赛时获取排行榜的时间间隔。"
		],
		openRankPredict: [
			"<span class='fas fa-calculator'></span> 打开历史排名计算器",
			"选择何时打开历史排名计算器。<span class='red'>需要排行榜信息。</span>"
		],
		problemSubmissionDirection: [
			"<span class='fas fa-server'></span> 评测记录顺序",
			"每一道题目的评测记录显示顺序。"
		],
		problemEventDirection: [
			"<span class='fas fa-book'></span> 事件顺序",
			"比赛的时间显示顺序。"
		],
		language: [
			"<span class='fas fa-language'></span> 语言",
			"语言无需重启即可更换。"
		],
		styleSelection: [
			"<span class='fas fa-paint-roller'></span> 样式",
			"选择你喜欢的样式。"
		],
		virtualFilter: [
			"<span class='fas fa-filter'></span> 打开虚拟赛过滤",
			"选择历史排名计算器如何处理虚拟赛数据。打开此设置以去除它们。"
		],
		codeforcesApiUrl: [
			"<span class='fas fa-exchange-alt'></span> Codeforces API 地址", 
			"设置获取 Codeforces API 的地址。"
		],
		showProblemStatus: [
			"<span class='fas fa-question-circle'></span> 显示题目状态",
			"在题目状态中显示每道题的状态比例。<span class='red'>需要排行榜信息。</span>"
		],
		accountHandleOrEmail: [
			"<span class='fas fa-user'></span> 用户名或邮箱", ""
		],
		accountPassword: [
			"<span class='fas fa-key'></span> 密码", ""
		],
		openProblems: [
			"<span class='fas fa-tasks'></span> 打开 Problems",
			`在比赛没有结束的时候打开 Problems 页面。`
		],
		transformPort: [
			"<span class='fas fa-location-arrow'></span> 交流端口",
			"设置和代码编辑器交流的端口，用逗号分割。"
		],
		statementFontSize: [
			"<span class='fas fa-text-width'></span> 题面字体大小",
			"为题面设置字体大小。"
		],
		statementDefaultLanguage: [
			"<span class='fas fa-cloud-upload-alt'></span> 默认提交语言",
			"设置提交时的默认语言。"
		],
	}
};
var lang_list = ["English", "简体中文"];
var lang_attr = ["en", "zh_cn"];
function getLanguage(lang){
	if(lang == "en")	return lang_en;
	if(lang == "zh_cn")	return lang_zh;
	return lang_en;
}