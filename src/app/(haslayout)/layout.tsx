import Link from "next/link";

const Page = ({ children }: any) => {
  return (
    <div className="border p-6 m-6 bg-red-100">
      <h2>
        I am in the /src/app/<b>(haslayout)</b>/layout.tsx, and I am a ROOT layout (I have my own html & body tags)!
      </h2>
      <br />
      <div className="border p-6 m-6">{children}</div>
      <br />
      <Link href="/">Go to /</Link>
      <br />
      <Link href="/hello">Go to /(haslayout)/hello</Link>
      <br />
      <Link href="/goodbye">Go to /(haslayout)/goodbye</Link>
      <br />
      <Link href="/clientcomponent">Go to /(nolayout)/clientcomponent</Link>
      <br />
      <Link href="/servercomponent">Go to /(nolayout)/servercomponent</Link>
    </div>
  );
};

export default Page;
