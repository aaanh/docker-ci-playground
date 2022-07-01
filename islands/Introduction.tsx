/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Introduction() {
	return (
		<div>
			<h1 class={tw`text-2xl`}>Introduction</h1>
			<p>
				Hi, I'm Anh. I'm a software engineer. I'm currently working at{" "}
				<a class={tw`line-through`} href="https://www.facebook.com/">
					Facebook
				</a>
				. I'm a{" "}
				<a class={tw`line-through`} href="https://www.facebook.com/">
					Facebook engineer.
				</a>{" "}
			</p>
			<p>
				This is a simple preact app that uses the <a href="https://twind.js.org">twind</a>{" "}
				library to create a responsive grid.
			</p>
			<p>
				The grid is responsive to the screen size and the following breakpoints:
				<ul>
					<li>
						xs: <code>max-width: 576px</code>
					</li>
					<li>
						sm: <code>min-width: 576px</code>
					</li>
					<li>
						md: <code>min-width: 768px</code>
					</li>
					<li>
						lg: <code>min-width: 992px</code>
					</li>
					<li>
						xl: <code>min-width: 1200px</code>
					</li>
				</ul>
			</p>
			<p>
				I am using the <a href="https://twind.js.org">twind</a> library to create the grid.
			</p>
		</div>
	);
}
