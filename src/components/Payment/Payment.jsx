import { GiCash } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa";
import { LuScanLine } from "react-icons/lu";
const Payment = () => {
    return (
        <div className="mx-4">
            <h1 className="my-1 text-base font-medium">Payment Method</h1>
            <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col justify-center items-center bg-gray-100  py-2 rounded-lg w-32 hover:bg-gray-200 cursor-pointer">
                    <GiCash/>
                    <h4 className="pt-2 text-sm">Cash</h4>
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-100 py-2 rounded-lg w-32 hover:bg-gray-200 cursor-pointer">
                    <FaRegCreditCard />
                    <h4 className="pt-2 text-sm">Debit Card</h4>
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-100 py-2 rounded-lg w-32 hover:bg-gray-200 cursor-pointer">
                    <LuScanLine />
                    <h4 className="pt-2 text-sm">Scan</h4>
                </div>
            </div>
        </div>
    );
};

export default Payment;
