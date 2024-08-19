import { GiCash } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa";
import { LuScanLine } from "react-icons/lu";
const Payment = () => {
    return (
        <div>
            <h1 className="my-4 text-lg font-semibold">Payment Method</h1>
            <div className="flex justify-between items-center  gap-2 w-full">
                <div className="flex flex-col justify-center items-center bg-gray-100  py-3 rounded w-32">
                    <GiCash  className=""/>
                    <h4 className="pt-2">Cash</h4>
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-100 py-3 rounded w-32">
                    <FaRegCreditCard />
                    <h4 className="pt-2">Debit Card</h4>
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-100 py-3 rounded w-32">
                    <LuScanLine />
                    <h4 className="pt-2">Scan</h4>
                </div>
            </div>
        </div>
    );
};

export default Payment;
