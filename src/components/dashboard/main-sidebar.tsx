'use client'

import {
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarFooter,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'
import { GlobeIcon, HomeIcon, MixerVerticalIcon, PersonIcon } from '@radix-ui/react-icons'
import { UserDropdown } from '@/components/dashboard/user-dropdown'
import { Logo } from '@/components/logo'
import { Session } from 'next-auth'

type MainSidebarProps = {
  user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <Logo class_name='text-xs' />
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink
              href="/dashboard"
              active={isActive('/dashboard')}
            >
              <GlobeIcon className="w-3 h-3 mr-3" />
              Principal
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/dashboard/users"
              active={isActive('/dashboard/users')}
            >
              <PersonIcon className="w-3 h-3 mr-3" />
              Médiuns
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/dashboard/tasks"
              active={isActive('/dashboard/tasks')}
            >
              <HomeIcon className="w-3 h-3 mr-3" />
              Tarefas
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/dashboard/settings"
              active={isActive('/dashboard/settings')}
            >
              <MixerVerticalIcon className="w-3 h-3 mr-3" />
              Configurações
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              Links extras
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <UserDropdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  )
}
