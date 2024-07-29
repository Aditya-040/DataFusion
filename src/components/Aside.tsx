'use client';
import { usePathname } from 'next/navigation';
import { GrCatalog } from "react-icons/gr";
import { CiCreditCard1 } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LuPackage } from "react-icons/lu";
export default function Aside() {
    //get the current route
    const currentRoute = usePathname()
    const routes = [
        {route: '/home/catalog', icon: <GrCatalog />, name: 'Catalog'},
        {route: '/home/orders', icon: <LuPackage/>, name: 'Orders'},
        {route: '/home/customers', icon: <CiUser/>, name: 'Customers'},
        {route: '/home/subscription', icon: <CiCreditCard1/>, name: 'Subscriptions'},
        {route: '/home/appointments', icon: <CiCalendarDate/>, name: 'Appointments'}

    ]
    return <aside className="w-48   bg-customGradient p-1">
        <div className="flex fixed flex-col mt-16 ml-10 gap-3">
            {routes.map((route, index) => (
                <div className="flex gap-3" key={`route-${index}`}>
                    <span className={'text-primarySmall'}>{route.icon}</span>
                    <a
                        className={`btn-dashboard ${
                            currentRoute === route.route ? ' text-primary' : ''
                        }`}
                        href={route.route}
                        key={index}>
                        {route.name}
                    </a>
                </div>
            ))}
        </div>

    </aside>
}


// 'use client';
// import { usePathname } from 'next/navigation';
// import { GrCatalog } from "react-icons/gr";
// import { CiCreditCard1, CiCalendarDate, CiUser } from "react-icons/ci";
// import { LuPackage } from "react-icons/lu";

// export default function Aside() {
//     // Get the current route
//     const currentRoute = usePathname();
//     const routes = [
//         { route: '/home/catalog', icon: <GrCatalog />, name: 'Catalog' },
//         { route: '/home/orders', icon: <LuPackage />, name: 'Orders' },
//         { route: '/home/customers', icon: <CiUser />, name: 'Customers' },
//         { route: '/home/subscription', icon: <CiCreditCard1 />, name: 'Subscriptions' },
//         { route: '/home/appointments', icon: <CiCalendarDate />, name: 'Appointments' }
//     ];

//     return (
//         <aside className="w-48 bg-gray-800 text-white p-4 fixed top-0 left-0 h-full">
//             <div className="flex flex-col mt-16 gap-4">
//                 {routes.map((route, index) => (
//                     <div className="flex items-center gap-3" key={`route-${index}`}>
//                         <span className="text-xl">{route.icon}</span>
//                         <a
//                             className={`text-base font-medium ${
//                                 currentRoute === route.route ? 'text-blue-400' : 'text-white'
//                             }`}
//                             href={route.route}
//                             key={index}>
//                             {route.name}
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </aside>
//     );
// }

