import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";

function InstructionsComponent({userLanguage}) {
	const router = useRouter();
	var lang = router.locale;
	var studioIntro = "Tech Pizzas Save the World";
	var ophelperName = "Pizza Helper for Genshin";
	var hsrhelperName = "Pizza Helper for HSR";
	var hertaTerminalName = "Herta Terminal";
	var bahelperName = "Pizza Helper for Blue Archive";
	var hsrdictName = "Honkai: Star Rail Dictionary";
	var followGithub = "Follow us on Github";
	var followTwitter = "Follow Bill Haku on Twitter";
	switch (lang) {
		case "zh":
			studioIntro = "技术披萨拯救世界";
			ophelperName = "原神披萨小助手";
			hsrhelperName = "星铁披萨小助手";
			hertaTerminalName = "黑塔终端";
			bahelperName = "BA披萨小助手";
			hsrdictName = "星穹铁道词典";
			followGithub = "关注我们的Github";
			followTwitter = "关注Bill Haku的Twitter";
			break;
		case "ja":
			studioIntro = "TECH PIZZAS SAVE THE WORLD";
			ophelperName = "原神ピザ助手";
			hsrhelperName = "崩スタピザ助手";
			hertaTerminalName = "ヘルタ端末";
			bahelperName = "ブルアカピザ助手";
			hsrdictName = "崩壊：スターレイル辞書";
			followGithub = "Githubでフォローする";
			followTwitter = "TwitterでBill Hakuをフォローする";
			break;
	}

	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					一块 <span>拼图</span>
				</h1>
				<p>
					{studioIntro}
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://apps.apple.com/app/id1635319193"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>{ophelperName}</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://apps.apple.com/app/id6448894222"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>{hsrhelperName}</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://apps.apple.com/app/id6450712191"}
				>
					<div className={styles.button}>
						{/* <img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/> */}
						<p>{hertaTerminalName}</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://download.pizzastudio.org/ba"}
				>
					<div className={styles.button}>
						{/* <img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/> */}
						<p>{bahelperName}</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				{/* <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
						alt="Alchemy Supercharged"
					/>
				</a> */}
			</div>
			<div className={styles.copyright}>
				<a href="https://beian.miit.gov.cn/" target={"_blank"}>
				<p>桂ICP备2023009538号-1</p></a>
			</div>
		</div>
	);
}

export default InstructionsComponent;