import {MdOutlineDashboardCustomize, MdPayment} from "react-icons/md"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {MdOutlineCategory} from 'react-icons/md'
import {FaUsers, FaUserTimes} from 'react-icons/fa'
import {FaCodePullRequest} from 'react-icons/fa6'
import {IoIosChatbubbles} from 'react-icons/io'
import { BsDatabaseFillAdd } from "react-icons/bs";
import { RiFileList3Fill } from "react-icons/ri";
import { TbBasketDiscount } from "react-icons/tb";
import { MdBorderColor, MdPayments, MdOutlineSupportAgent } from "react-icons/md";
import { IoLogoWechat } from "react-icons/io5";
import { GiRamProfile } from "react-icons/gi";




export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <MdOutlineDashboardCustomize />,
        role: 'admin',
        path: "/admin/dashboard"
    },
    {
        id: 2,
        title: 'Orders',
        icon: <AiOutlineShoppingCart />,
        role: 'admin',
        path: "/admin/dashboard/orders"
    },
    {
        id: 3,
        title: 'Category',
        icon: <MdOutlineCategory />,
        role: 'admin',
        path: "/admin/dashboard/category"
    },
    {
        id: 4,
        title: 'Sellers',
        icon: <FaUsers />,
        role: 'admin',
        path: "/admin/dashboard/sellers"
    },
    {
        id: 5,
        title: 'Payment Request',
        icon: <MdPayment />,
        role: 'admin',
        path: "/admin/dashboard/payment-request"
    },
    {
        id: 6,
        title: 'Deactive Sellers',
        icon: <FaUserTimes />,
        role: 'admin',
        path: "/admin/dashboard/deactive-sellers"
    },
    {
        id: 7,
        title: 'Seller Request',
        icon: <FaCodePullRequest />,
        role: 'admin',
        path: "/admin/dashboard/sellers-request"
    },
    {
        id: 8,
        title: 'Live Chat',
        icon: <IoIosChatbubbles />,
        role: 'admin',
        path: "/admin/dashboard/chat-seller"
    },
    {
        id: 9,
        title: 'Dashboard',
        icon: <MdOutlineDashboardCustomize />,
        role: 'seller',
        path: "/seller/dashboard"
    },
    {
        id: 10,
        title: 'Add Product',
        icon: <BsDatabaseFillAdd />,
        role: 'seller',
        path: "/seller/dashboard/add-product"
    },
    {
        id: 11,
        title: 'All Product',
        icon: <RiFileList3Fill />,
        role: 'seller',
        path: "/seller/dashboard/products"
    },
    {
        id: 12,
        title: 'Discount Product',
        icon: <TbBasketDiscount />,
        role: 'seller',
        path: "/seller/dashboard/discount-product"
    },
    {
        id: 13,
        title: 'Orders',
        icon: <MdBorderColor />,
        role: 'seller',
        path: "/seller/dashboard/orders"
    },
    {
        id: 14,
        title: 'Payments',
        icon: <MdPayments />,
        role: 'seller',
        path: "/seller/dashboard/payments"
    },
    {
        id: 15,
        title: 'Chat-Customer',
        icon: <IoLogoWechat />,
        role: 'seller',
        path: "/seller/dashboard/chat-customer"
    },
    {
        id: 16,
        title: 'Chat-Support',
        icon: <MdOutlineSupportAgent />,
        role: 'seller',
        path: "/seller/dashboard/chat-support"
    },
    {
        id: 17,
        title: 'Profile',
        icon: <GiRamProfile />,
        role: 'seller',
        path: "/seller/dashboard/profile"
    },
]