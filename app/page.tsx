import { LiveMatch } from "@/components/live-match"

export default function Home() {
  return (
    <div className="flex flex-col gap-4 min-h-screen container mx-auto">
      {/* Video Player */}
      <LiveMatch />

      {/* Footer */}
      <footer className=" border-t border container text-center py-2">
        <p className="text-sm text-muted-foreground">
          Made with ❤️ by Manish
        </p>
      </footer >
    </div >
  )
}
