import Input from "../../components/input";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="text-2xl font-normal mb-3 mt-5">Price</h2>
      <div className="grid grid-cols-2">
        <label className="sidebar-label-container">
          <input
            className="sidebar-label-container-input"
            type="radio"
            onChange={handleChange}
            value=""
            name="price"
          />
          <span className="checkmark sidebar-label-container-span"></span>
          <span>ALL</span>
        </label>
        <Input
          handleChange={handleChange}
          value={500}
          title="₹0 - ₹500"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={1000}
          title="₹500 - ₹1k"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={5000}
          title="₹1k - ₹5k"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={15000}
          title="Over ₹5k"
          name="price"
        />
      </div>
    </div>
  );
};

export default Price;
