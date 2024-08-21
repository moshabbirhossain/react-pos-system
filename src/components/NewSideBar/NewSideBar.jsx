import { GiCash } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa";
import { LuScanLine } from "react-icons/lu";

const NewSideBar = () => {
    return (
        <div className="text-xs font-medium overflow-x-hidden ml-4">
            <div className=" py-8 hover:rounded-lg w-24 text-center text-xs font-bold">
                Point Of Sale
            </div>
            <div className="flex flex-col justify-center items-center  py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <GiCash className="w-6 h-6" />
                <h4 className="pt-2">POS</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <FaRegCreditCard className="w-6 h-6" />
                <h4 className="pt-2">Dashboard</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <LuScanLine className="w-6 h-6" />
                <h4 className="pt-2">Orders</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <LuScanLine className="w-6 h-6" />
                <h4 className="pt-2">Products</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <LuScanLine className="w-6 h-6" />
                <h4 className="pt-2">Barcode</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <LuScanLine className="w-6 h-6" />
                <h4 className="pt-2">Customers</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <LuScanLine className="w-6 h-6" />
                <h4 className="pt-2">Stock</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <LuScanLine className="w-6 h-6" />
                <h4 className="pt-2">Purchase</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <LuScanLine className="w-6 h-6" />
                <h4 className="pt-2">Purchase</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <LuScanLine className="w-6 h-6" />
                <h4 className="pt-2">Vendor</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <LuScanLine className="w-6 h-6" />
                <h4 className="pt-2">User</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <LuScanLine className="w-6 h-6" />
                <h4 className="pt-2">Drawer Log</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 hover:rounded-lg w-24 hover:bg-gray-200 cursor-pointer">
                <LuScanLine className="w-6 h-6" />
                <h4 className="pt-2">Addons</h4>
            </div>
        </div>
    );
};

export default NewSideBar;
