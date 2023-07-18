import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Pizza<span>Studio</span>
				</h1>
				<p>
					Developers for Otaku games{" "}
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://gi.pizzastudio.org"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Pizza Helper for Genshin</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://hsr.pizzastudio.org"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Pizza Helper for HSR</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://herta.pizzastudio.org"}
				>
					<div className={styles.button}>
						{/* <img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/> */}
						<p>Herta Terminal</p>
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
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://github.com/pizza-studio"
							target={"_blank"}
						>
							Follow us on Github
						</a>
					</div>
					<div>
						<a
							href="https://twitter.com/@Haku_Bill"
							target={"_blank"}
						>
							Follow us on Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
