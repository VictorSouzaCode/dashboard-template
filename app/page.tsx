'use client'
import Image from "next/image";
import { useRouter } from "next/navigation"
import { useEffect } from "react"

// the chart is ready
// i am gonna need a table of content with fake data
// a table of content, adjust the chart and kpi cards

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    router.push('/dashboard')
  }, [router])

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Hello</h1>
      </main>
    </div>
  );
}
