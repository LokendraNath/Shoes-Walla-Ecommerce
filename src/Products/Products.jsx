import PropTypes from "prop-types";

const Products = ({ result }) => {
  return (
    <section className="absolute top-[8rem] flex-wrap ml-[19rem] mt-[2rem] z-[-2] grid grid-cols-4">
      {result}
    </section>
  );
};
Products.propTypes = {
  result: PropTypes.node.isRequired,
};

export default Products;
