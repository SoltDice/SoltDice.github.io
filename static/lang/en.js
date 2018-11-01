module.exports = {
	message: {
		//nav
		Slot: 'Slot', //水果机：Slot
		Dice: 'Dice', //猜数字：Dice
		Fairness: "Fairness", //公平：Fairness
		Community: 'Community', //社区：Community
		joinCommunity:"Join Community",
		Dividend: "Dividend", //分红：Dividend
		playInfo: 'Rules', //玩法介绍：Rules
		Invitation: 'Invitation', //邀请奖励：Invitation
		luckDraw: 'Lucky Draw', //Lucky Draw
		luckNum: "Lucky Number",
		luckNumber: "Lucky Number",
		win: "Win",
		draw: 'Draw',
		fairnessTitle: "Provably Fair Betting",
		randomSeed: 'Enter Your Custom Seed:',
		update: "Update",
		sure:'sure',
		fairnessContent: {
			content: [
				"Since all bets are placed through our smart contracts on the EOS blockchain, it's impossible for you to play an unfair game. ",
				'Every bet you place with us is secured by our novel randomness generation technique. You may submit your own seed, or leave it blank. Your bet will receive a unique ID in a smart contract, which will be signed by our server with a predetermined secret key.',
				"This signature will be passed back to the smart contract before being verified that the correct secret signing key was used. The contract will then derive a deterministic random number from the signature, which will be used to resolve your bet.",
				"You can join our Telegram（https://t.me/eoshappy） or WeChat（eoshappy） group to know more information about Eos Happy."
			],
			link: 'more information about Eos Happy.>>'
		},
		dividendTitle: "EosHappy—Gambling on the EOS blockchain",
		dividendInfo: 'HPY token holders can get 100% dividends',
		dividendContent: [
			"The HPY tokens would be officially distributed when the gaming entertainment platform Eos Happy based on the smart contract of Eos main network goes online. Holders of HPY tokens are the shareholders of the Eos Happy platform. All of the profits will go to the holders of HPY tokens.",
			"The “gaming is mining” mode enables the platform to distribute the token HPY among players for free. The distribution ratios of Happy Slot and Happy Dice are EOS:HPY=1:200 and EOS:HPY=1:100 respectively.",
			"All of the profits will go to the holders of HPY tokens, making players the shareholders of the platform permanently.",
			"We will adjust the ratio of tokens distributed in future. The earlier you join the platform, the more tokens you will get. Join us now! With more HPY tokens, you will get more benefits in future.",
			"We will continue to develop more blockchain games to bring more benefits to the HPY token holders."
		],
		InvitationTitle: "Invite friends for Rewards!",
		copy: 'copy',
		InvitationContent: "Don't miss out the chance! Refer a friend to earn 0.5% of their bets! All tokens are applied!",
		luckInfo: [
			"Press the Draw button to draw a lucky number and get the prize.",
			"Free Lucky Draw for Once Everyday! For each bet larger than 1EOS, you get 1 extra Lucky Draw, capped at 10!"
		],
		createTime: 'CreateTime', //
		validationResult: 'Validation Result',
		checkDetail: "Random number can be verified using a third party script",
		Login: 'Login', //登录：Login
		LoginOut: 'LoginOut',
		BetAmount: "BET AMOUNT", //投注总额：Bet Amount
		PayoutOnWin: 'PAYOUT ON WIN', //赢取奖金：PAYOUT ON WIN
		RollUnderToWin: "ROLL UNDER TO WIN", //	小于该数获胜：ROLL UNDER TO WIN
		PayOut: 'PAYOUT', //赔率：PAYOUT
		payOut: 'PAYOUT', //收益：PAYOUT
		payOUT: "PAYOUT", //奖励
		getMoney: "YOU GOT", //获得奖励
		Win_Chance: 'WIN CHANCE', //概率：WIN CHANCE
		WinChance: 'WIN CHANCE', //概率：WIN CHANCE
		Roll: 'ROLL', //掷骰子：ROLL
		BetToGet: 'Bet To Get', //下注可获得：Bet to get
		BetNowForFreeTokens: 'Bet now for free tokens', //现在投注可获得：Bet now for free tokens
		AllBets: 'ALL BETS', //所有记录：ALL BETS
		HugeWins: 'HUGE WINS', //大额奖金：HUGE WINS
		myBets: "MY BETS", //我的记录：MY BETS
		SingleAmount: "Single Amount", //单注金额：Single Amount
		Reset: 'RESET', //重置：RESET
		start: "START", //开始：START
		time: "Time", //时间：Time
		Bettor: 'Bettor', //投注者：Bettor
		Bet: 'Bet', //投注内容(slot)：Bet
		Amount: 'Amount', //投注金额(slot)：Amount
		Result: 'Result', //结果(slot)：Result
		check: 'Check', //验证：Check
		RollUnder: "Roll Under", //小于该数获胜(dice)：Roll Under
		diceResult: 'Roll', //结果(dice)：Roll
		ruleMenuList: [{
				title: 'About Eos Happy'
			},
			{
				title: 'How to play Happy Slot？'

			},
			{
				title: "How to play Happy Dice"

			},
			{
				title: 'How to generate the random number？'

			},
			{
				title: "What’s HPY token?"

			}
		],
		Rules: [{
				title: 'About Eos Happy',
				content: [
					"Eos Happy is a gambling platform developed based on the smart contract of Eos mainnet. All betting games on the platform are developed with the independent random number generation technology, the codes of which are open source for result validation. Moreover, the “gaming is mining” mode enables the platform to distribute the token HPY among players for free. All of the profits will go to the holders of HPY tokens, making players the shareholders of the platform."
				]
			},
			{
				title: 'How to play Happy Slot？',
				content: [
					'Happy Slot is a betting game running based on the smart contract of Eos mainnet. The players could bet any amount and click on Start to invoke the Eos smart contract, which will generate a random number corresponding to a lucky option (below is the correspondence between the random numbers and the options). It the lucky option matches the bet put by the player, then the player wins and gets the profits, which equals the amount of the bet times the odds. The more frequently the option happens, the more likely the player would win, and the smaller the profits would be.'
				],
				imgUrl:'../../static/images/fruit/eos_solt_en.png'
			},
			{
				title: "How to play Happy Dice",
				content: [
					"Happy Dice is a betting game based on the random numbers generated by the smart contract. The player can decide the betting range (smaller than a number) by sliding the block. For instance, if you slide the block to 70, the betting range would be 1 to 69. After deciding the range and the bet, click on Start to invoke the Eos smart contract, which will generate a random number, i.e. the lucky number. If the lucky number is within the betting range set by the player, then the player wins and gets the profits, which equals the amount of the bet times the odds."
				]
			},
			{
				title: 'How to generate the random number？',
				content: [
					"All betting games on Eos Happy platform are based on the random number generation technology of the smart contract. The algorithm runs independently in the Eos smart contract. Below is the random number algorithm. Users are free to validate the authenticity of the results.",
					"*******************",
					"postfix6: last six digits of the number (hexadecimal) in the brackets",
					"Mod: remainder of a constant (convert the hexadecimal to decimal beforehand)",
					"betid: order number on the Eos Happy platform",
					"playerseed: seed amount randomly set by the user",
					"timestamp: time when the transaction is made (since 1970-01-01 00:00, in ms)",
					"Sign with the private key corresponding to the public key in the smart contract and then validate with the public key"

				]
			},
			{
				title: "What’s HPY token?",
				content: [
					"The HPY tokens would be officially distributed when the gaming entertainment platform Eos Happy based on the smart contract of Eos main network goes online. Holders of HPY tokens are the shareholders of the Eos Happy platform. All of the profits will go to the holders of HPY tokens.",
					"The “gaming is mining” mode enables the platform to distribute the token HPY among players for free. The distribution ratios of Happy Slot and Happy Dice are EOS:HPY=1:xx and EOS:HPY=1:xx respectively.",
					"All of the profits will go to the holders of HPY tokens, making players the shareholders of the platform permanently.",
					"We will adjust the ratio of tokens distributed in future. The earlier you join the platform, the more tokens you will get. Join us now! With more HPY tokens, you will get more benefits in future.",
					"We will continue to develop more blockchain games to bring more benefits to the HPY token holders."
				]
			}
		],
		indexPageData: {
			balanceData: ['Smart Contract Invested', 'Total Dividends', 'Token released'],
			titleInfo: 'Trade-driven Mining',
			playerData: ['Player', 'Play Games', 'Get Tokens', 'Earn Dividends or Sell'],
			blockData: [
				{name: 'SLOT', info: ' '},
				{name: 'DICE', info: ' '},
				{name: 'CRASH', info: 'COMING SOON'},
				{name: 'MONOPOLY', info: 'COMING SOON'},
				{name: 'SUPER BALL', info: 'COMING SOON'},
				{name: 'BLACK JACK', info: 'COMING SOON'},
				{name: 'BINARY OPTIONS', info: 'COMING SOON'},
				{name: 'TEXAS POKER', info: 'COMING SOON'},
				{name: 'CRYPTO NBA', info: 'COMING SOON'},
				{name: 'CRYPTO SPACEX', info: 'COMING SOON'},
				{name: 'CLASH OF CLANS', info: 'COMING SOON'},
				{name: 'MINECRAFT', info: 'COMING SOON'},
			]
		},
		//自定义
	info:{
		seedInfo:{
			title:'Update Success',
			content:'The seeds have been updated.'
		},
		invite:{
			title:'Replicating success',
			content:'The invitation link has been copied.'
		},
		betMore:{
			title:'Excess Amount',
			content:'A single bet should not exceed '
		},
		HpybetMore:{
			title:'Excess Amount',
			content:'A single bet should not exceed 10000HPY'
		},
		betLess:{
			title:'The amount is lower than the minimum limit',
			content:'A single bet must not be lower than '
		},
		HpybetLess:{
			title:'The amount is lower than the minimum limit',
			content:'A single bet must not be lower than 100HPY'
		},
		NoLogged:{
			title:'NO Login',
			content:'Plese Login'
		},
		loginoutMsg:{
			title:'Logout',
			content:'Account has been logged out.'
		}
		
	},
	Congratulations:"Congratulations!",
	youBet:'you bet',
	throw:'throw'
	}
}