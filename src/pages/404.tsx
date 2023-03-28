import Link from "next/link";

function PageNotFound() {
  return (
    <>
      <div className="prose">
        <h1 className="text-center uppercase">Page Not Found</h1>
        <div className="px-3 text-center">
          <p>
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="rounder-lg btn-primary btn">
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
