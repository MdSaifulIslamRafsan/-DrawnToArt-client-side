import { useLoaderData, useParams } from "react-router-dom";


const DetailsPage = () => {
    const { id } = useParams();
    const craftItems = useLoaderData();
    
    const isExist = craftItems.find(craftItem => craftItem?._id === id);
    const {customization , description , email , image , item_name , name, price , processing_time , rating ,  stockStatus , subcategory_Name} = isExist;

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 ">
	<div className="flex flex-col mx-auto overflow-hidden rounded">
		<img src={image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6  sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{subcategory_Name}</a>
				<p className="text-sm">{item_name}
				</p>
			</div>
			<div className="space-y-3">
				<p>{description}</p>
				<p> User Name :- {name}</p>
				<p> User Email :-  {email}</p>
				<p>Price :- {price}$</p>
				<p>Processing Time :- {processing_time}</p>
				<p>Rating :- {rating}</p>
				<p>Customization :- {customization}</p>
				<p>StockStatus :- {stockStatus}</p>
                
			</div>
		</div>
	</div>
</div>
    );
};

export default DetailsPage;