import { Footer } from "./components/footer";
import { HeaderNav } from "./components/header-nav";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden ">
      <HeaderNav />
      {children}
      <Footer />
    </div>
  );
}
