const Buttons = ({ onClickHandler, title, isSelected }) => {
  return (
    <button
      onClick={onClickHandler}
      className={`recommended-btn transition-all duration-300 transform active:scale-95 ${
        isSelected ? "bg-black text-white" : ""
      }`}
    >
      {title}
    </button>
  );
};

export default Buttons;
