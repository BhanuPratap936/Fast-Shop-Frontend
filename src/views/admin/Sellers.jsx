import { useState } from "react"
import { Link } from "react-router-dom"
import { FaEye } from 'react-icons/fa'
import Pagination from "../Pagination"


const Sellers = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState('')
    const [perPage, setPerPage] = useState(5)
    const [show, setShow] = useState(false)
    return (
        <div className="px-2 lg:px-7 pt-5">
            <h1 className="text-[20px] font-bold mb-3">Seller</h1>
            <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
                <div className="flex justify-between items-center">
                    <select onChange={(e) => setPerPage(parseInt(
                        e.target.value
                    ))} className="px-4 py-2 hover:border-indigo-500 outline-none bg-[#6a5fdf]
                    border border-slate-700 rounded-md text-[#d0d2d6]">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <input className="px-4 py-2 focus:border-indigo-500 outline-none
                    bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]" type="text" placeholder="search" />
                </div>
                <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-[#d0d2d6]">
                                <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
                                    <tr>
                                        <th scope="col" className="py-3 px-4">No</th>
                                        <th scope="col" className="py-3 px-4">Image</th>
                                        <th scope="col" className="py-3 px-4">Name</th>
                                        <th scope="col" className="py-3 px-4">Shop Name</th>
                                        <th scope="col" className="py-3 px-4">Payment Status</th>
                                        <th scope="col" className="py-3 px-4">Email</th>
                                        <th scope="col" className="py-3 px-4">Division</th>
                                        <th scope="col" className="py-3 px-4">District</th>
                                        <th scope="col" className="py-3 px-4">Action</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        [1, 2, 3, 4, 5].map((item, i) => <tr key={i}>
                                            <td className="py-1 px-4 font-medium
                                whitespace-nowrap">{item}</td>
                                            <td className="py-1 px-4 font-medium
                                whitespace-nowrap"><img className="w-[45px] h-[45px]" src={`http://localhost:3000/images/category/${item}.jpg`} alt="category-images" /></td>
                                            <td className="py-1 px-4 font-medium
                                whitespace-nowrap">Dark Dragon</td>
                                            <td className="py-1 px-4 font-medium
                                whitespace-nowrap">Dragon Altair</td>
                                            <td className="py-1 px-4 font-medium
                                whitespace-nowrap"><span>Pending</span></td>
                                            <td className="py-1 px-4 font-medium
                                whitespace-nowrap">dark@gmail.com</td>
                                            <td className="py-1 px-4 font-medium
                                whitespace-nowrap">India</td>
                                            <td className="py-1 px-4 font-medium
                                whitespace-nowrap">Delhi</td>

                                            <td className="py-1 px-4 font-medium
                                whitespace-nowrap">
                                                <div className="flex justify-start items-center gap-4">
                                                    <Link className="p-[6px] bg-green-500 roudned hover:shadow-lg
                                        hover:shadow-green-500/50"><FaEye />
                                                    </Link>
                                                    
                                                </div>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
                            <Pagination
                                pageNumber={currentPage}
                                setPageNumber={setCurrentPage}
                                totalItem={50}
                                perPage={perPage}
                                showItem={3}
                            />
                        </div>
            </div>
        </div>
    )
}

export default Sellers
