import { MdOutlineCategory } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
const Category = () => {
    return (
        <div className="grid grid-cols-6 w-full mt-2 lg:gap-2 px-2 lg:ml-1">
            <div className="flex flex-col justify-center items-center rounded-lg lg:bg-gray-100 hover:bg-gray-200 w-16 lg:w-24 cursor-pointer py-2 ">
                <MdOutlineCategory />
                <h4 className="pt-1 text-xs font-normal">All</h4>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg lg:bg-gray-100 hover:bg-gray-200 w-16 lg:w-24 cursor-pointer py-2">
                <BiCategory />
                <h4 className="pt-1 text-xs font-normal">Beauty</h4>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg lg:bg-gray-100 hover:bg-gray-200 w-16 lg:w-24 cursor-pointer py-2">
                <BiCategory />
                <h4 className="pt-1 text-sm font-normal">Gadget</h4>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg lg:bg-gray-100 hover:bg-gray-200 w-16 lg:w-24 cursor-pointer py-2">
                <BiCategory />
                <h4 className="pt-1 text-xs font-normal">Groceries</h4>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg lg:bg-gray-100 hover:bg-gray-200 w-16 lg:w-24 cursor-pointer py-2">
                <BiCategory />
                <h4 className="pt-1 text-xs font-normal">Heath</h4>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg lg:bg-gray-100 hover:bg-gray-200 w-16 lg:w-24 cursor-pointer py-2">
                <BiCategory />
                <h4 className="pt-1 text-xs font-normal">Juice</h4>
            </div>
        </div>
    );
};

export default Category;
