import { FaRegHeart } from "react-icons/fa";

const Card = ({ img, title, prevPrice, newPrice, discountPrice }) => {
  return (
    <section className="m-[5px] border-2 border-[#ededed] relative py-3 rounded-xl">
      <div className="absolute top-4 flex justify-between px-4 w-full">
        <div>
          <p className="bg-red-600 px-2 font-bold rounded-sm text-white">
            {discountPrice}% off
          </p>
        </div>
        <div>
          <FaRegHeart size={20} className="" />
        </div>
      </div>
      <div className="relative mb-4 px-2 group h-[17rem] flex items-center justify-center">
        <img src={img} alt={title} className="max-h-full" />
        <div className="absolute left-1/2 bottom-0 text-[15px] px-3 transform -translate-x-1/2 font-josefin opacity-0 tracking-wider border border-gray-700 text-gray-700 pt-[5px] rounded-3xl hover:text-white hover:bg-black transition duration-400 group-hover:opacity-100 active:-scale-[0.8] font-montserrat ">
          Add To Cart
        </div>
      </div>

      <div className="pl-4">
        <h3 className="font-josefin text-[#858585] text-[18px] tracking-wide">
          {title}
        </h3>
      </div>
      <div className="card-price ml-4">
        <p className="price font-josefin text-[19px]  font-montserrat tracking-wide">
          ₹{newPrice} <del className="text-gray-400 ml-2 ">₹{prevPrice}</del>
        </p>
      </div>
    </section>
  );
};

export default Card;
