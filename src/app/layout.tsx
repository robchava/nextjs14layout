import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-blue-400 p-4`}>
        <h1>I am the layout in /src/layout.tsx</h1>
        <br />
        <div className="border p-6 m-6">{children}</div>
        <br />
        <Link href="/hello">Go to /(haslayout)/hello</Link>
        <br />
        <Link href="/goodbye">Go to /(haslayout)/goodbye</Link>
        <br />
        <Link href="/clientcomponent">Go to /(nolayout)/clientcomponent</Link>
        <br />
        <Link href="/servercomponent">Go to /(nolayout)/servercomponent</Link>
      </body>
    </html>
  );
}
