import { Anchor, CircleQuestionMark, ContactIcon, Home, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import exploreLogo from '../assets/explore-logo.svg';
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, } from './ui/sidebar'



const menu = [
  {
    title: 'Home',
    url: '#Home',
    icon: Home
  },
  {
    title: 'About us',
    url: '#about-us',
    icon: CircleQuestionMark
  },
  {
    title: 'Process',
    url: '#process',
    icon: Anchor
  },
  {
    title: 'Contact',
    url: '#contact',
    icon: ContactIcon
  }
]

export default function MobileSidebar() {
  const { toggleSidebar } = useSidebar()
  return (
    <Sidebar className='z-50'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='flex justify-between my-5'>
            <img src={exploreLogo} className='w-25 ' alt="explore logo" />
            <Button
              variant="default"
              size="icon"
              onClick={toggleSidebar}
              className='hover:bg-transparent hover:text-inherit focus-visible:ring-0 active:bg-transparent bg-trannsparent'
            >
              <X className="h-5 w-5 text-black" />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => (
                <SidebarMenuItem key={item.title} onClick={toggleSidebar}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
