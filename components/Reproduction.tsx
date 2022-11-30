import Link from "next/link";

function Links() {
  return (
    <>
      <Link className="link" href="/">
        Navigate to /
      </Link>
      <Link className="link" href="/other">
        Navigate to /other
      </Link>
    </>
  );
}

export function Reproduction() {
  return (
    <>
      <section id="section1">
        <h2>Section 1</h2>
        <a href="#section2">Jump to next section</a>
        <Links />
      </section>

      <section id="section2">
        <h2>Section 2</h2>
        <a href="#section1">Jump to previous section</a>
        <Links />
      </section>
    </>
  );
}
