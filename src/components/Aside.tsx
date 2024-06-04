'use client';
import Image from "next/image";
import { usePathname } from 'next/navigation';


export default function Aside() {
    //get the current route
    const currentRoute = usePathname()
    const routes = [
        {route: '/home/catalog', icon: 'Dashboard.svg', name: 'Catalog'},
        {route: '/home/orders', icon: 'Dashboard.svg', name: 'Orders'},
        {route: '/home/customers', icon: 'Dashboard.svg', name: 'Customers'},
        {route: '/home/subscription', icon: 'Dashboard.svg', name: 'Subscription'}
    ]
    return <aside className="w-48 bg-customGradient p-1">
        <a className="flex mt-4 p-x-1.5 justify-center" href={'/home/dashboard'}>
            <span className={'text-primarySmall text-base font-medium'}>Data fusion</span>
        </a>

        <div className="flex flex-col mt-16 ml-10 gap-3">
            {routes.map((route, index) => (
                <a
                    className={`btn-dashboard ${
                        currentRoute === route.route ? ' text-primarySmall' : ''
                    }`}
                    href={route.route}
                    key={index}>
                    {route.name}
                </a>
            ))}
        </div>

    </aside>
}
