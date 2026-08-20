import { Redactor } from "@/components/Redactor";

export default function Home() {
  return (
    <>
      <Redactor />
      <h1>pranay yalamanchali</h1>

      <div className="bio">
        <p>
          i&apos;m the ceo of{" "}
          <a
            href="https://netralabs.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="accent">netra</span>
          </a>
          , where we build distributed counter-uas technology.
        </p>
        <p>
          i live in the intersection of go-to-market and engineering. i went
          from software engineering intern at{" "}
          <a
            href="https://pedestal.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            pedestal ai
          </a>
          , to gtm engineering intern at{" "}
          <a
            href="https://gmicloud.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            gmi cloud
          </a>
          , to leading sales and marketing at my own company. along the way
          i&apos;m finishing a math and computer science degree at{" "}
          <a href="https://ucsd.edu" target="_blank" rel="noopener noreferrer">
            uc san diego
          </a>
          .
        </p>
        <p>
          the fastest way to reach me is email:{" "}
          <a href="mailto:pranay.yalaman@gmail.com">
            pranay.yalaman@gmail.com
          </a>
          . i&apos;m also on{" "}
          <a
            href="https://github.com/pynay"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          ,{" "}
          <a
            href="https://x.com/pruhnay"
            target="_blank"
            rel="noopener noreferrer"
          >
            x
          </a>
          , and{" "}
          <a
            href="https://linkedin.com/in/pranay-yalamanchali"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          .
        </p>
      </div>

      <footer>san diego, ca</footer>
    </>
  );
}
