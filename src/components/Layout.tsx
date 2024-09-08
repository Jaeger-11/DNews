import Sidebar from "./Sidebar";
import Footer from "./Footer";
import HorizontalAds from "./HorizontalAds";
import Aside from "./Aside";

const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="font-secondary flex">
        <Sidebar/>
        <section className="flex-1 h-svh overflow-y-scroll">
          {/*Short Advertisement */}
          <HorizontalAds bg='primary'/>
          <main className="grid grid-cols-4">
            <div className="col-span-3">
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