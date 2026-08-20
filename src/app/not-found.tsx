import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2>404</h2>
      <p>page not found.</p>
      <p>
        <Link href="/">back to home</Link>
      </p>
    </>
  );
}
