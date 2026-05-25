import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container size="prose">
      <div className="py-32 text-center">
        <p className="label">404</p>
        <h1 className="mt-3 text-5xl">This shelf is empty.</h1>
        <p className="mt-6 text-meta">
          The page you&rsquo;re looking for didn&rsquo;t make the cut. Or it
          moved. Or it never existed.
        </p>
        <Link
          href="/"
          className="inline-block mt-10 text-[14px] font-semibold text-ink underline decoration-emerald decoration-2 underline-offset-4 hover:decoration-ink transition-colors duration-200 ease-apple"
        >
          Take me home
        </Link>
      </div>
    </Container>
  );
}
