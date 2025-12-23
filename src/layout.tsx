import { SidebarProvider} from "./components/ui/sidebar"
import MobileSidebar  from "./components/MobileSidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen= {false}>
      
      <main className="w-full min-h-screen "> {/* Added min-h-screen for better main content height */}
        <MobileSidebar />
        {children}
      </main>
    </SidebarProvider>
  )
}