import { Link, useLoaderData, useNavigation } from "react-router-dom";
import loading from "../assets/loading.json";
import Lottie from "lottie-react";
const AllArtAndCraft = () => {
  const craftItems = useLoaderData();
  const navigation = useNavigation();
  if(navigation.state === "loading"){
    return <Lottie className="h-72" animationData={loading} loop={true} />
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Subcategory Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {craftItems.map((item, index) => (
            <tr key={item?._id}>
              <th>{index + 1}</th>
              <td>{item?.item_name}</td>
              <td>{item?.subcategory_Name}</td>
              <td>{item?.price}</td>
              <td>{item?.rating}</td>
              <td>
                <Link className="btn px-2 bg-green-500 text-white" to={`/craftDetails/${item?._id}`}>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllArtAndCraft;
