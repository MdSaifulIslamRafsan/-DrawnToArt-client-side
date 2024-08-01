import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import Swal from "sweetalert2";
import loading from "../assets/loading.json";
import Lottie from "lottie-react";

const MyArtAndCarftList = () => {

  const { user } = useContext(AuthContext);
  const loadedCraftItems = useLoaderData();
  let isExist = loadedCraftItems.filter((item) => item?.email === user?.email);
  
  const [craftItems, setCraftItems] = useState(isExist);
  const [customization, setCustomization] = useState(craftItems);

  const sortedYesOrNo = craftItems.filter((sorted) => sorted?.customization ===  customization );
 
  const datas = sortedYesOrNo.length === 0 ? craftItems : sortedYesOrNo;
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Lottie className="h-72" animationData={loading} loop={true} />;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-side-teal.vercel.app/craftItems/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = craftItems.filter((item) => item?._id !== id);
              setCraftItems(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mx-5">
      <h1 className="text-2xl font-bold text-center">My Art & Craft List</h1>

      <div className="flex justify-center my-10 ">
        <details className="dropdown">
          <summary className="btn m-1">customization</summary>
          <ul  className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={()=>setCustomization('All')}>
              <a>All</a>
            </li>
            <li onClick={()=>setCustomization('Yes')}>
              <a>Yes</a>
            </li>
            <li onClick={()=>setCustomization('No')}>
              <a>No</a>
            </li>
          </ul>
        </details>
      </div>
      {datas.map((item) => (
        <div
          key={item?._id}
          className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden my-5"
        >
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:w-96"
                src={item?.image}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {item?.item_name}
              </div>
              <p className="flex mt-1 text-lg leading-tight font-medium text-black">
                Price:- {item?.price}
                <TbCurrencyTaka className="text-xl" />
              </p>
              <p className="mt-2 items-center text-slate-500">
                Rating :- {item?.rating}
              </p>
              <p className="mt-2 items-center text-slate-500">
                Customization :- {item?.customization}
              </p>
              <p className="mt-2 items-center text-slate-500">
                stockStatus :- {item?.stockStatus}
              </p>
              <div className="mt-4">
                <Link
                  to={`/update/${item?._id}`}
                  className="btn bg-green-500 text-white"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(item?._id)}
                  className="btn ml-4 bg-green-500 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyArtAndCarftList;
