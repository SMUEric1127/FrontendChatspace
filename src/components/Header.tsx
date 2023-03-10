import image from "../assets/illustration-dashboard.png";
import Form from "./Form";

function Header() {
  return (
    <header className="text-center py-5 md:py-14">
      <h1 className="text-xl md:text-4xl dark:text-white">
        Đợi vài ngày nữa rồi launch nha <span className="font-extrabold">baby!</span>
      </h1>
      <p className="text-sm md:text-lg py-5 text-gray-500 dark:text-white">
        Subscribe tui nha!
      </p>

      <Form />

      <img
        src={image}
        alt="the dashboard image"
        className="w-[90%] md:w-[80%] mx-auto mt-10"
      />
    </header>
  );
}

export default Header;
