import { Link } from "react-router-dom";
import home from "./images/home.jpg";

export default function Home() {
  return (
    <div className="h-full w-full">
      <header className="bg-cyan-700 h-[8vh] flex justify-between items-center px-10 text-white shadow-xl ">
        <h2 className="text-2xl font-bold">AgServices</h2>
        <ul className="flex gap-24 text-sm font-semibold">
          <li className="hover:opacity-20">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="hover:opacity-20">
            <Link to={`/signup`}>Sign Up</Link>
          </li>
          <li className="hover:opacity-20">
            <Link to={`/login`}>Login</Link>
          </li>
        </ul>
      </header>
      <main className="h-[92vh] w-screen flex">
        <div className="h-full w-[50vw] flex justify-center items-center">
          <div className="h-2/3 w-3/4 bg-slate-200">
          <img src={home} alt="cover" className="h-full w-full object-cover  " />
          </div>
        </div>
        <div className="h-full w-[50vw] flex flex-col justify-center gap-4">
          <h1 className="text-5xl font-bold tracking-[1vw]">AgServices</h1>
          <p className="font-semibold">Manage your customers, track interactions, and grow your business—all in one place. Our Customer Management System (CMS) gives you the tools to organize client information, streamline communication, and build stronger relationships with ease.</p>
        </div>
      </main>
    </div>
  );
}
