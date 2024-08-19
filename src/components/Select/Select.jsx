const Select = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="text-start">Order Tax</th>
                        <th className="text-start">Shipping</th>
                        <th className="text-start">Discount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select className="mr-2 select select-bordered w-32 max-w-xs focus:outline-none">
                                <option>Shirt 10%</option>
                                <option>Shirt 12%</option>
                                <option>Shirt 15%</option>
                            </select>
                        </td>
                        <td className="">
                            <select className="mr-2 select select-bordered w-32 max-w-xs focus:outline-none">
                                <option>15</option>
                                <option>20</option>
                                <option>25</option>
                                <option>30</option>
                            </select>
                        </td>
                        <td className="">
                            <select className="select select-bordered w-32 max-w-xs focus:outline-none">
                                <option>10%</option>
                                <option>15%</option>
                                <option>20%</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Select;
