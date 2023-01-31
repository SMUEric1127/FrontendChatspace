import logo from "../assets/logo.svg";

import ThemeSwitcher from "./ThemeSwitcher";

const testLog = "{...}"
function Navbar() {
  console.log("test")
  return (
    <>
      <span></span>
      <nav className="flex items-center justify-between py-5">
        <h1 className="text-xl md:text-4xl dark:text-white"> {testLog} Chatspace</h1>
        <ThemeSwitcher />
      </nav>
    </>
  );
}

export default Navbar;
