import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddCraftItem = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className=" border-4 rounded-lg shadow relative m-4">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-2xl mx-auto font-semibold">Add Craft Item Page</h3>
      </div>
      <div className="p-6 space-y-6">
        <form action="#">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="name" className="text-sm font-medium block mb-2">
                User Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="user name"
                required=""
                defaultValue={user?.displayName}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="email" className="text-sm font-medium block mb-2">
                User Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                defaultValue={user?.email}
                className="shadow-sm text-gray-900 bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="user email"
                required=""
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="image" className="text-sm font-medium block mb-2">
                Image
              </label>
              <input
                type="text"
                name="image"
                id="image"
                className="shadow-sm text-gray-900 bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="image URL"
                required=""
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="item_name"
                className="text-sm font-medium block mb-2"
              >
                Item Name
              </label>
              <input
                type="text"
                name="item_name"
                id="item_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="item name"
                required=""
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="subcategory_Name"
                className="text-sm font-medium block mb-2"
              >
                Subcategory Name
              </label>
              <input
                type="text"
                name="subcategory_Name"
                id="subcategory_Name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="subcategory name"
                required=""
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="price" className="text-sm font-medium block mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="shadow-sm text-gray-900 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="price"
                required=""
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="processing_time"
                className="text-sm font-medium block mb-2"
              >
               Processing Time
              </label>
              <input
                type="text"
                name="processing_time"
                id="processing_time"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="processing_time"
                required=""
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="rating" className="text-sm font-medium block mb-2">
                Rating
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                className="shadow-sm text-gray-900 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="rating"
                required=""
              />
            </div>
            <div className="mb-4 col-span-6 sm:col-span-3">
              <label htmlFor="customization" className="block font-medium mb-2">
                Customization
              </label>
              <select
                id="customization"
                name="customization"
                className="border  border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required=""
              >
                <option disabled selected value="">
                  Select Customization
                </option>
                <option value="female">Yes</option>
                <option value="other">No</option>
              </select>
            </div>
            <div className="mb-4 col-span-6 sm:col-span-3">
              <label htmlFor="stockStatus" className="block font-medium mb-2">
                StockStatus
              </label>
              <select
                id="stockStatus"
                name="stockStatus"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required=""
              >
                <option disabled selected value="">
                  Select StockStatus
                </option>
                <option value="stock">In stock</option>
                <option value="order">Made to Order</option>
              </select>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="text-sm font-medium block mb-2"
              >
                Short description
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                className="bg-gray-50 border text-gray-900 border-gray-300 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder=" short description"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="p-6 border-t border-gray-200 rounded-b">
        <button
          className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-20 mx-auto block py-2.5 text-center"
          type="submit"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddCraftItem;
