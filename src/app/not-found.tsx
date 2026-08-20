import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <div className="bio">
        <p>this page doesn&apos;t exist.</p>
        <p>
          <Link href="/">back home</Link>
        </p>
      </div>
    </>
  );
}
