import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { IoMdCloseCircle, IoMdImages } from 'react-icons/io'
import { useDispatch, useSelector } from "react-redux"
import { get_category } from "../../store/Reducers/categoryReducer"
import { get_single_product, update_product, messageClear, product_image_update } from "../../store/Reducers/productReducer"
import { PropagateLoader } from 'react-spinners'
import { overrideStyle } from "../../utils/utils"
import toast from "react-hot-toast"

const EditProduct = () => {

    const { productId } = useParams()

    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.category)
    const { product, loader, successMessage, errorMessage } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(get_category({
            searchValue: '',
            perPage: '',
            page: ''
        }))
    }, [])

    useEffect(() => {
        dispatch(get_single_product(productId))
    }, [productId])
    // const categories = [
    //     {
    //         id: 1,
    //         name: 'Sports'
    //     },
    //     {
    //         id: 2,
    //         name: 'Tshirt'
    //     },
    //     {
    //         id: 3,
    //         name: 'Mobile'
    //     },
    //     {
    //         id: 4,
    //         name: 'Computer'
    //     },
    //     {
    //         id: 5,
    //         name: 'Watch'
    //     },
    //     {
    //         id: 6,
    //         name: 'Pant'
    //     },
    // ]

    const [state, setState] = useState({
        name: '',
        description: '',
        discount: '',
        price: '',
        brand: '',
        stock: ''
    })

    const inputHandle = (e) => {
        const { name, value } = e.target
        setState({
            ...state, [name]: value
        })
    }

    const [cateShow, setCateShow] = useState(false)
    const [category, setCategory] = useState('')
    const [allCategory, setAllCategory] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const categorySearch = (e) => {
        const value = e.target.value
        setSearchValue(value)
        if (value) {
            let srcValue = allCategory.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(srcValue)
        } else {
            setAllCategory(categories)
        }
    }

    const [imageShow, setImageShow] = useState([])

    // const imageHandle = (e) => {
    //     const files = e.target.files
    //     const length = files.length
    //     if (length > 0) {
    //         setImages([...images, ...files])
    //         let imageUrl = []
    //         for (let i = 0; i < length; i++) {
    //             imageUrl.push({url: URL.createObjectURL(files[i])})
    //         }
    //         setImageShow([...imageShow, ...imageUrl])
    //     }
    // }

    const changeImage = (img, files) => {
        if (files.length > 0) {
            // console.log(img);
            // console.log(files[0]);
            dispatch(product_image_update({
                oldImage: img,
                newImage: files[0],
                productId
            }))
        }

    }

    useEffect(() => {
        if(categories.length > 0) {
            setAllCategory(categories)
        }
    }, [categories])

    // const removeImage = (i) => {
    //     const filterImage = images.filter((image, index) => index !== i)
    //     const filterImageUrl = imageShow.filter((image, index) => index !== i)

    //     setImages(filterImage)
    //     setImageShow(filterImageUrl)
    // }

    useEffect(() => {
        setState({
            name: product.name,
            description: product.description,
            discount: product.discount,
            price: product.price,
            brand: product.brand,
            stock: product.stock
        })
        setCategory(product.category)
        setImageShow(product.images)
    }, [product])

    // console.log(images);
    // console.log(imageShow);

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())

        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }

    }, [successMessage, errorMessage])

    const update = (e) => {
        e.preventDefault()
        const obj = {
            name: state.name,
            description: state.description,
            discount: state.discount,
            price: state.price,
            brand: state.brand,
            stock: state.stock,
            category: category,
            productId: productId
        }
        dispatch(update_product(obj))
    }


    return (
        <div className="px-2 lg:px-7 pt-5">
            <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
                <div className="flex justify-between items-center pb-4">
                    <h1 className="text-[#d0d2d6] text-xl font-semibold">
                        Update Product
                    </h1>

                    <Link to='/seller/dashboard/products' className="bg-blue-500 hover:bg-blue-500/50
                    hover:shadow-lg text-white rounded-sm px-7 py-2
                    my-2">All Product
                    </Link>
                </div>
                <div>
                    <form onSubmit={update}>
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full
                        text-[#d0d2d6]">
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="name">Product Name</label>
                                <input className="px-4 py-2 focus:border-indigo-500 outline-none
                    bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={state.name}
                                    type="text" name="name" id="name" placeholder="Product Name" />
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="brand">Product Brand</label>
                                <input className="px-4 py-2 focus:border-indigo-500 outline-none
                    bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={state.brand}
                                    type="text" name="brand" id="brand" placeholder="Product Brand" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full
                        text-[#d0d2d6]">
                            <div className="flex flex-col w-full gap-1 relative">
                                <label htmlFor="category">Category</label>
                                <input readOnly onClick={() => setCateShow(!cateShow)} className="px-4 py-2 focus:border-indigo-500 outline-none
                    bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={category}
                                    type="text" id="category" placeholder="--select category--" />
                                <div className={`absolute top-[101%] bg-[#475569] w-full
                                    transition-all ${cateShow ? 'scale-100' : 'scale-0'}`}>
                                    <div className="w-full px-4 py-2 fixed">
                                        <input value={searchValue} onChange={categorySearch} className="px-3 py-1 focus:border-indigo-500
                                            outline-none w-full bg-transparent border border-slate-700
                                            rounded-md text-[#d0d2d6] overflow-hidden" type="text"
                                            placeholder="search" />
                                    </div>
                                    <div className="pt-14"></div>
                                    <div className="flex justify-start items-start
                                        flex-col h-[200px] overflow-y-scroll">
                                        {
                                            allCategory.length > 0 && allCategory.map((c, i) => <span key={i}
                                                className={`px-4 py-2 hover:bg-indigo-500 hover:text-white
                                                    hover:shadow-lg w-full cursor-pointer ${category === c.name && 'bg-indigo-500'}`} onClick={() => {
                                                    setCateShow(false)
                                                    setCategory(c.name)
                                                    setSearchValue('')
                                                    setAllCategory(categories)
                                                }}>
                                                {c.name}
                                            </span>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="stock">Product Stock</label>
                                <input className="px-4 py-2 focus:border-indigo-500 outline-none
                    bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={state.stock}
                                    type="text" name="stock" id="stock" placeholder="Stock" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full
                        text-[#d0d2d6]">
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="price">Price</label>
                                <input className="px-4 py-2 focus:border-indigo-500 outline-none
                    bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={state.price}
                                    type="number" name="price" id="pice" placeholder="Price" />
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="discount">Discount</label>
                                <input className="px-4 py-2 focus:border-indigo-500 outline-none
                    bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={state.discount}
                                    type="number" name="discount" id="discount" placeholder="discount by %" />
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-1 mb-5">
                            <label htmlFor="description" className="text-[#d0d2d6]">Description</label>

                            <textarea className="px-4 py-2 focus:border-indigo-500 outline-none
                    bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={state.description}
                                type="number" name="description" id="description" placeholder="Description of Product"
                                cols="10" rows="4"></textarea>
                        </div>

                        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2
                        sm:gap-4 md:gap-4 gap-3 w-full text-[#d0d2d6] mb-4">
                            {
                               (imageShow && imageShow.length > 0) && imageShow.map((img, i) => <div key={i}>
                                    <label htmlFor={i}>
                                        <img src={img} alt="img" />
                                    </label>
                                    <input onChange={(e) => changeImage(img, e.target.files)} type="file" id={i} className="hidden" />
                                </div>)
                            }
                        </div>

                        <div className="flex">
                            <button disabled={loader ? true : false} className='bg-red-500 w-[280px] hover:shadow-red-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
                                {
                                    loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : 'Save Changes'
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProduct