import {  CircleQuestionMark, ContactIcon, Home, X } from 'lucide-react'
import process from '../assets/processIcon.svg';
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


  type MenuItem =
  | {
      title: string
      url: string
      icon: React.ComponentType
      type: "component"
    }
  | {
      title: string
      url: string
      icon: string
      type: "image"
    }



const menu: MenuItem[] = [
  {
    title: 'Home',
    url: '#Home',
    icon: Home,
    type: 'component'
  },
  {
    title: 'About us',
    url: '#about-us',
    icon: CircleQuestionMark,
    type: 'component'
  },
  {
    title: 'Process',
    url: '#process',
    icon: process,
    type: 'image'
  },
  {
    title: 'Contact',
    url: '#contact',
    icon: ContactIcon,
    type: 'component'
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
                      {item.type === 'component' ? (
                        <item.icon />
                      ) : (
                        <img src={item.icon}  alt={item.title} />
                      )}
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
