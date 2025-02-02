import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-[#1A1A1A] ">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-center gap-2 mt-10"
        >
          <Image src="/logo.png" alt="logo" width={92} height={92} />
          
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-NewWhite overflow-scroll flex flex-col border-t-[6px] border-b-[6px] border-r-[6px] border-[#1A1A1A]">

        <Navbar />
        {children}
      </div>
    </div>
  );
}
