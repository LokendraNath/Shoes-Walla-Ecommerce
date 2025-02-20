import Input from "../../components/Input.jsx";
import PropTypes from "prop-types";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-normal mb-3">Category</h2>
      <div className="grid grid-cols-2">
        <label className="sidebar-label-container">
          <input
            className="sidebar-label-container-input"
            type="radio"
            onChange={handleChange}
            value=""
            name="category"
          />
          <span className="checkmark sidebar-label-container-span"></span>
          <span>ALL</span>
        </label>

        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Snekers"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="category"
        />
      </div>
    </div>
  );
};
Category.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Category;
