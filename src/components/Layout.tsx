import Sidebar from "./Sidebar";
import Footer from "./Footer";
import HorizontalAds from "./HorizontalAds";
import Aside from "./Aside";
import MobileHeader from "./MobileHeader";

const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="font-secondary flex flex-col md:flex-row">
        <MobileHeader/>
        <Sidebar/>
        <section className="md:flex-1 h-svh overflow-y-scroll">
          <HorizontalAds bg='primary'/>
          <main className="grid md:grid-cols-4 overflow-x-hidden">
            <div className="md:col-span-3">
            <main className="p-2">
                {children}
            </main>
            </div>
            <Aside/>
          </main>
          <Footer/>
        </section>
      </div>
  )
}

export default Layout