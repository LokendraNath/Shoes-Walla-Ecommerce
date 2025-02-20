import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-normal mb-3 mt-5">Colors</h2>
      <div className="grid grid-cols-2">
        <label className="sidebar-label-container">
          <input
            className="sidebar-label-container-input"
            type="radio"
            onChange={handleChange}
            value=""
            name="colors"
          />
          <span
            className="checkmark sidebar-label-container-span"
            style={{
              background:
                "conic-gradient( blue, black, green, white, red)",
            }}
          ></span>

          <span>ALL</span>
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="colors"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="colors"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="colors"
          color="green"
        />
        <label className="sidebar-label-container">
          <input
            className="sidebar-label-container-input"
            type="radio"
            onChange={handleChange}
            value="white"
            name="colors"
          />
          <span
            className="checkmark sidebar-label-container-span"
            style={{ background: "white", border: "2px solid black" }}
          ></span>White
        </label>
        <Input
          handleChange={handleChange}
          value="yellow"
          title="Yellow"
          name="colors"
          color="yellow"
        />
      </div>
    </div>
  );
};

export default Colors;
