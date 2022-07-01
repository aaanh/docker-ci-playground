/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Author from "../islands/Author.tsx";
import Introduction from "../islands/Introduction.tsx";
import About from "../islands/About.tsx";

export default function Home() {
	return (
		<div class={tw`flex flex-col w-screen`}>
			<head>
				<title>Anh: deno.Fresh</title>
			</head>
			<div class={tw`w-screen p-4 bg-purple-400 text-center text-lg`}>
				<p>
					Disclaimer: This page is 70-80% (approximately) created with Github Copilot
					(including the Dockerfile 🐋).
				</p>
				<p>
					Except for this banner and the crosssed-out information, I let Copilot run loose
					and even in its own suggestion, saying: "I am not responsible for any damage
					caused by this site."
				</p>
				<p>Although, I did provide my SNS user ID's.</p>
			</div>
			<div class={tw`w-screen p-4 bg-green-400 text-center text-lg`}>
				<p>
					On a lighter note: this site is created with{" "}
					<a href="https://fresh.deno.dev">Fresh Deno 🍋</a>.
				</p>
			</div>
			<div class={tw`p-4 mx-auto max-w-screen-md flex flex-col space-y-4`}>
				<Author></Author>
				<Introduction></Introduction>
				<About></About>
			</div>
		</div>
	);
}
