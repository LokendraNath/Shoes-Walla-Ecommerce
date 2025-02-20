import Buttons from "../components/Buttons";

const Reccomended = ({ handleClick, selectedCategory }) => {
  return (
    <div className="flex fixed top-[4.5rem] ml-[19rem] py-4 flex-col bg-white w-full">
      <h1 className="pb-3 tracking-widest">Recommended</h1>
      <div className="space-x-3 flex">
        <button
          onClick={() => handleClick(null)}
          className={`recommended-btn ${
            selectedCategory === null ? "bg-black text-white scale-95" : ""
          }`}
        >
          All Shoes
        </button>
        {["Nike", "Adidas", "Vans", "Puma"].map((brand) => (
          <Buttons
            key={brand}
            onClickHandler={() => handleClick(brand)}
            title={brand}
            isSelected={selectedCategory === brand}
          />
        ))}
      </div>
    </div>
  );
};

export default Reccomended;
