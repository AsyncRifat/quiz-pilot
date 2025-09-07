"use client"

import * as React from "react"
import {
  BarChart2,
  Clipboard,
  FilePlus,
  History,

  LayoutDashboard,

  Trophy,
  User,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Separator } from "./ui/separator"

const navDetails = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard, // 📊 main dashboard
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User, // 👤 for personal profile
  },
  {
    title: "Quiz History",
    url: "/dashboard/quiz-history",
    icon: History, // 🕒 past attempts
  },
  {
    title: "Results",
    url: "/dashboard/results",
    icon: BarChart2, // 📊 performance summary
  },
  {
    title: "Leaderboard",
    url: "/dashboard/leaderboard",
    icon: Trophy, // 🏆 ranking
  },
]

const adminNavDetails = [
  {
    title: "Users",
    url: "/dashboard/users",
    icon: Users, // 👥 manage users
  },
  {
    title: "Questions",
    url: "/dashboard/questions",
    icon: Clipboard, // 📝 exam/tests
  },
  {
    title: "Create Quiz",
    url: "/dashboard/create-quiz",
    icon: FilePlus, // ➕ add new quiz
  },
]

const user = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
}

export function AppSidebar({...props}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="hover:cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Link href="/">
            <div className="flex items-center gap-2 mx-auto md:mx-0">
              <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <img src="https://res.cloudinary.com/dlrzwaoga/image/upload/v1757071182/vnixltocrqshrhu3l22t.png" className="size-8" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight ">
                <span className="truncate font-extrabold text-xl font-delius-regular">QuizPilot</span>
              </div>
            </div>
          </Link>

        </SidebarMenuButton>
      </SidebarHeader>

      <Separator />

      <SidebarContent>
        <NavMain navDetails={navDetails} adminNavDetails={adminNavDetails}/>
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
