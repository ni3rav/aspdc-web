import { notFound } from "next/navigation";

export default function Page({params}: {params: {id: string}}) {
	console.log(params.id);
	notFound();
}