import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Watch Live Cricket Matches Online | Free HD Streaming",
  description: "Stream live cricket matches in HD quality for free. Watch IPL, international cricket, and all major tournaments with no signup required.",
  keywords: ["live cricket", "cricket streaming", "watch cricket online", "free cricket", "IPL live stream"],
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4 min-h-screen container mx-auto">
      {/* Video Player */}
      <iframe
        // src="//stream.crichd.sc/update/star1hi.php"
        src="https://soplay.pro/embed2.php?id=starsp3"
        className="h-screen"
        allowFullScreen
        allow="encrypted-media"
      ></iframe>

      {/* Footer */}
      <footer className="border-t border-t-gray-200 container text-center py-2">
        <p className="text-sm text-gray-600">
          Made with ❤️ by <span className="font-semibold">Manish</span>
        </p>
      </footer >
    </div >
  )
}
