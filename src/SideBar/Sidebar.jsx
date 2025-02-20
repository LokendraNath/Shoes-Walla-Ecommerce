import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="w-[20%] fixed h-full border-r-2 z-[3] flex flex-col top-[76px] py-[2rem] border-[#f3f3f3] ml-5">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
