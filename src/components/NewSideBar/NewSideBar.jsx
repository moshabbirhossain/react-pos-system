import { GiCash } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa";
import { LuScanLine } from "react-icons/lu";

const NewSideBar = () => {
    return (
        <div className="text-lg">
            <div className="  pb-3 pt-8 rounded w-32 text-center">Point Of Sale</div>
            <div className="flex flex-col justify-center items-center  py-3 rounded w-32">
                <GiCash className="w-10 h-10"/>
                <h4 className="pt-2">Cash</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 rounded w-32">
                <FaRegCreditCard className="w-10 h-10"/>
                <h4 className="pt-2">Debit Card</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-3 rounded w-32">
                <LuScanLine className="w-10 h-10"/>
                <h4 className="pt-2">Scan</h4>
            </div>
        </div>
    );
};

export default NewSideBar;
