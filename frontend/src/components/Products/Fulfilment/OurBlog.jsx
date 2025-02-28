import React from "react";
import Blog1 from "../../../assets/images/products/5th-Dec-SRF-1-768x432.png";
import Blog2 from "../../../assets/images/products/Understanding-distribution-logistics-768x432.jpg";
import Blog3 from "../../../assets/images/products/8th-March-SRF-Blog--768x432.jpg";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const blogData = [
  {
    image: Blog1,
    category: ["E-Commerce"],
    title: "10 Best Logistics Companies in Gurgaon & Here’s Why",
  },
  {
    image: Blog2,
    category: ["Fulfillment Operations"],
    title: "A-Z of Distribution Logistics [Infrographic]",
  },
  {
    image: Blog3,
    category: ["E-Commerce", "eCommerce Fulfillment"],
    title: "5 Reasons Why Web-Based Order Management Systems",
  },
];

function OurBlog() {
  return (
    <div className="max-w-6xl mx-auto my-20 px-2">
      <h2 className="text-5xl font-bold my-8 text-primes leading-0">
        Read more on our blog
      </h2>
      <p className="mb-8">
        Learn everything about order fulfillment and keep up with the trends.
      </p>
      <div className="flex w-full flex-col lg:flex-row gap-2 md:gap-4 lg:gap-6">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 md:mx-3 w-full lg:mx-0 lg:w-1/3 rounded-xl my-6 shadow-xl"
          >
            <img src={blog.image} alt="" className="w-full rounded-t-xl" />
            <div className="w-full mx-6 flex flex-col gap-4 my-6">
              <div className="flex flex-wrap gap-4">
                {blog.category.map((cat, i) => (
                  <p
                    key={i}
                    className="bg-green-100 px-2 gap-2 py-3 text-xs text-center"
                  >
                    {cat.toUpperCase()}
                  </p>
                ))}
              </div>
              <h4 className="font-semibold text-primes text-xl">
                {blog.title}
              </h4>
              <Link
                to=""
                className="group text-burgundy font-semibold flex items-center gap-2 hover:text-blue-500"
              >
                Know More{" "}
                <MdArrowOutward className="inline-block relative -top-1 left-1 transition-all group-hover:rotate-45 group-hover:top-0 group-hover:left-0" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurBlog;
