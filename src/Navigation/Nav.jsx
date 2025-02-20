import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Nav = ({ setUser, handleInputChange, query }) => {
  const logout = () => {
    localStorage.setItem("shoesWallaLogged", JSON.stringify("admin"));
    setUser("");
  };
  return (
    <nav className="flex fixed justify-between border-b-2 border-[#f3f3f3] items-center py-4 px-10 z-50 bg-white w-full">
      <div>
        <h1 className="font-montserrat text-2xl font-bold tracking-widest ">
          <span className="text-4xl font-normal">S</span>HOES{" "}
          <span className="text-4xl font-normal ml-3">W</span>ALLA
        </h1>
      </div>
      <div className="flex place-items-center">
        <div className="nav-container bg-[#f7f6f6] flex items-center rounded-2xl mr-10">
          <CiSearch className="ml-3 " size={23} />
          <input
            type="text"
            className="py-3 px-3  outline-none mr-5 rounded-lg w-64 text-sm"
            placeholder="Enter Your Desire Shoes"
            onChange={handleInputChange}
            value={query}
          />
        </div>
        <div className="profile-container flex space-x-6">
          <a href="#">
            <FiHeart className="nav-icons text-[#333333] hover:text-red-500" />
          </a>
          <a href="#">
            <AiOutlineShoppingCart className="nav-icons text-[#333333] hover:text-blue-700" />
          </a>
          <a href="#">
            <AiOutlineUserAdd className="nav-icons text-[#333333] hover:text-green-700" />
          </a>
          <button className="nav-icons" onClick={logout}>
            <IoIosLogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
