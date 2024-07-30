"use client"

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { TypographyH1 } from '@/components/ui/typography'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<main className="flex flex-col justify-center items-center h-[calc(100vh-4rem)]">
			<section className="m-4 p-2">
				<TypographyH1>whoopsie daisies 😕</TypographyH1>
			</section>
			<p className='m-2 p-2'>
				something wrong happened with the website. please approach <a href="https://x.com/_softbubble" className="hover:underline font-bold" >@shravan</a> or <a href="https://x.com/ni3rav" className="hover:underline font-bold">@nirav</a> with a screenshot.
			</p>
			<Button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
				className="m-4"
			>
				try again
			</Button>
		</main>
	)
}