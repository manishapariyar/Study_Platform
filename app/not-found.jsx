import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 ">
      <h1 className="  text-9xl font-extrabold tracking-widest">404</h1>
      <div className="bg-indigo-500 px-2 text-sm rounded rotate-12 absolute ">
        Page Not Found
      </div>
      <p className="mt-6 text-lg text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
