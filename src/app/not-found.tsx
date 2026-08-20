import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <div className="bio">
        <p>This page doesn&apos;t exist.</p>
        <p>
          <Link href="/">Back home</Link>
        </p>
      </div>
    </>
  );
}
