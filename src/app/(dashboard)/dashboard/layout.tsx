import "@/app/auth/globals.css"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { PropsWithChildren } from 'react'
import { MainSidebar } from "@/components/dashboard/main-sidebar"
import { auth } from '@/services/auth'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: 'Dashboard',
  description: 'Criado HFerraz',
}

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth()
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="grid grid-cols-[17rem_1fr]">
          <MainSidebar user={session?.user} />
          <main>{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  )
}