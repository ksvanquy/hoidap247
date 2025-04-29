import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full">
        {/* Left Sidebar - Hidden on mobile, shown on md+ */}
        <aside className="hidden md:block md:w-60 lg:w-64 shrink-0">
          <LeftSidebar />
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 px-2 py-2 md:px-2 lg:px-2 mx-1 md:mx-2">
          {children}
        </main>
        
        {/* Right Sidebar - Hidden on mobile, shown on lg+ */}
        <aside className="hidden lg:block lg:w-72 shrink-0">
          <RightSidebar />
        </aside>
      </div>
      
      <Footer />
    </div>
  );
}
