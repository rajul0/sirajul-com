import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center  px-4">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl mb-2">Oops! Page Not Found</h2>
      <p className="text-center text-gray-300 max-w-md mb-6">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-slate-300 text-black rounded-lg hover:bg-slate-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
