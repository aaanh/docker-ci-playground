/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function About() {
	return (
		<div>
			<h1 class={tw`text-2xl`}>About</h1>
			<blockquote class={tw`border-l-2 m-2 ml-0 p-2 italic text-gray-500`}>
				I wrote this one...
			</blockquote>
			<p>This site is dockerized and deployed to Google Cloud Run.</p>
			<p>
				Checkout the{" "}
				<a class={tw`underline`} href="https://github.com/aaanh/fresh-copilot">
					git repo here
				</a>
			</p>
			<p>
				Checkout{" "}
				<a class={tw`underline`} href="https://aaanh.com">
					my other works
				</a>{" "}
				that are not written by Copilot 😂
			</p>
		</div>
	);
}
