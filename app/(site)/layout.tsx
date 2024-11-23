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
        <header className="flex items-center justify-between">
          <Link href="/">fredpoon</Link>
          <div className="flex items-center gap-3">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
