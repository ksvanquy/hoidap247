import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />

      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <main className="flex flex-col md:flex-row">
          <LeftSidebar />
          <section className="flex-1">{children}</section>
          <RightSidebar />
        </main>
      </div>

      <Footer />
    </div>
  );
}
