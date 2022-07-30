import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <div className="flex flex-col justify-start justify-items-start gap-14 bg-very-light-gray dark:bg-very-dark-blue min-h-screen text-very-dark-blue2 dark:text-white mb-5">
        <Header />
        {children}
      </div>
    </>
  );
}
