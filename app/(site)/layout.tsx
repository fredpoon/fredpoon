import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import Link from "next/link";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // get all of our pages
  const pages = await getPages();
  return (
    <html lang="en">
      <body>
        <header className=" bg-slate-800">
          <nav className="mx-auto max-w-screen-lg px-2 lg:px-4 relative">
            <div className="relative flex h-16 space-x-10 w-full">
              <div className="flex justify-start">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-gray-500 bg-clip-text text-transparent"
                >
                  frdpn_
                </Link>
              </div>
              <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end">
                {pages.map((page) => (
                  <Link
                    key={page._id}
                    href={`/${page.slug}`}
                    className="text-xl text-blue-400 hover:underline hover:text-gray-400"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-screen-md px-2 lg:px-4 py-4 relative">
          {children}
        </main>
      </body>
    </html>
  );
}
