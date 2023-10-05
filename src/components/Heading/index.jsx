export default function Heading({ children }) {
  return (
    <>
      <h1 className="text-6xl font-display text-center lg:mb-12 mb-8 ">
        {children}
      </h1>
      <hr className="lg:w-16 w-10 rotate-90 mx-auto border" />
    </>
  );
}
