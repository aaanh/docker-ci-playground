/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

// create a two player game of guess the number
export default function GuessTheNumber(props: PageProps) {
	return <div>Hello {props.params.name}</div>;
}
