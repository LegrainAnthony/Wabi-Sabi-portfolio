import { Inter } from "next/font/google";
// import { GlobalStyle } from "../styles/";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<div
			//  className={GlobalStyle.background}
			>
				<img
					src="images/SVG/FOND.svg"
					//  className={GlobalStyle.background__image}
				/>
				<body className={inter.className}>{children}</body>
			</div>
		</html>
	);
}
