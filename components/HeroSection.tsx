import Image from "next/image"
import Link from "next/link"
import { IOS_APP_STORE_URL } from "@/lib/constants"
import { AppStoreBadge } from "@/components/icons/AppStoreBadge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export function HeroSection() {
  return (
    <section id="hero" className="w-full flex justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative pt-4 md:pt-8">
      <div className="w-full max-w-[1000px] flex flex-col-reverse lg:flex-row items-center justify-center gap-16 lg:gap-24 px-4 md:px-6 py-2 md:py-4 lg:py-6 pb-8 md:pb-4 lg:pb-6">
        {/* Text Content */}
        <div className="w-full max-w-[500px] flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-2 px-4 py-1 rounded-2xl border bg-background/70 backdrop-blur">
            <div className="flex -space-x-2">
              <Avatar>
                <AvatarImage src="/images/nathan.jpg" alt="Nathan Covey" />
              </Avatar>
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" alt="woman User avatar" />
              </Avatar>
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/men/75.jpg" alt="man User avatar" />
              </Avatar>
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap">Loved by my mom with a ⭐ 5.0 rating</span>
          </div>
          <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text text-center lg:text-left mt-6 lg:mt-8">
            AI Email Voice Assistant
          </h1>
          <p className="text-muted-foreground md:text-xl mt-6 text-center lg:text-left">
            <strong>Reach Inbox Zero hands-free.</strong> Harmony reads your emails aloud and lets you manage them with your voice while you drive or exercise.
          </p>
          <div className="flex flex-row items-center gap-4 mt-8">
            <Link href={IOS_APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <AppStoreBadge className="h-14 shadow-lg" />
            </Link>
            <a href="https://www.tinystartups.com/launch/harmony-ai" target="_blank" rel="noopener noreferrer">
              <Image src="/images/tinystartups.png" alt="#1 Product of the Week on Tiny Startups" width={149} height={46} priority />
            </a>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="w-full max-w-[350px] flex items-center justify-center">
          <div className="relative w-full aspect-[9/16]">
            <Image
              src="/images/harmony_ai_app_mockup.png"
              alt="Harmony AI Email Assistant App - Voice-controlled Gmail management interface"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 