import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwind.png";
import typeScript from "../assets/typeScript.png";

function Header() {
  return (
    <header className="font-extrabold text-indigo-400 text-5xl flex flex-col items-center gap-6">
      <h1>TODO APP</h1>
      <div className="flex gap-4">
        <img
          src={reactLogo}
          alt="react logo"
          className="bg-gray-900 rounded-lg p-2 w-[72px] h-[72px]"
        />
        <img
          src={tailwindLogo}
          alt="tailwind logo"
          className="bg-white border-2 border-[#1AAEBA] rounded-lg p-2 w-18 h-18"
        />
        <img
          src={typeScript}
          alt="react logo"
          className="rounded-lg w-[72px] h-[72px]"
        />
      </div>
    </header>
  );
}

export default Header
