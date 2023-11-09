const Page = ({ children }: any) => {
  return (
    <div className="border p-6 m-6 bg-red-100">
      <h2>
        I am in the /src/app/<b>(haslayout)</b>/layout.tsx
      </h2>
      <br />
      <div className="border p-6 m-6">{children}</div>
    </div>
  );
};

export default Page;
