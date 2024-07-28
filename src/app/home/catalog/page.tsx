
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, Button} from "@nextui-org/react";
import {AiFillDatabase} from "react-icons/ai";
import {IoIosStar} from "react-icons/io";
import {FaChartSimple} from "react-icons/fa6";
import {ButtonGroup} from "@nextui-org/button";
import { CiCirclePlus } from "react-icons/ci";
import {ProductFom} from "@/app/home/catalog/ProductFom";
import CatalogTable from "@/app/home/catalog/CatalogTable";
import CatalogCharts from "@/app/home/catalog/CatalogChatrs";
import {ChartFom} from "@/app/home/catalog/ChartFom";

export default async function Materials({searchParams}: any ) {

    const action = searchParams.action;
    const product = searchParams.product;

    const filters=[
        {
            name: 'Data',
            icon: <AiFillDatabase/>,
            url: '/home/catalog'
        },
        {
            name: 'Popular',
            icon: <IoIosStar/>,
            url: '/home/catalog?action=popular'
        },
        {
            name: 'Charts & Insights',
            icon: <FaChartSimple/>,
            url: '/home/catalog?action=charts'
        },
    ]
    const onSave = (data: any) => {
        console.log(data)
    }
    return (
        <main className="w-full px-9">
            <Modal
                isOpen={action === 'new'}
                closeButton={<a href={'/home/catalog'}>X</a>}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        Create a new product
                    </ModalHeader>
                    <ModalBody>
                        <ProductFom/>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Modal
                isOpen={action === 'new_chart'}
                size={'lg'}
                closeButton={<a href={'/home/catalog?action=charts'}>X</a>}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        Generate Chart
                        <small className={''}>Automatically generate interactive financial store data charts from descriptions using Google Vertex AI</small>
                    </ModalHeader>
                    <ModalBody>
                        <ChartFom />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <div className={'flex justify-between mb-5'}>
                <ButtonGroup>
                    {
                        filters && filters.map((filter, index) => (

                                <Button
                                    color="primary"
                                    key={index}
                                    startContent={filter.icon}
                                    variant={'bordered'}
                                    className={'flex'}>
                                    <a href={filter.url}>
                                    {filter.name}
                                    </a>
                                </Button>

                        ))
                    }
                </ButtonGroup>
                <Button
                    startContent={<CiCirclePlus/>}
                    color="primary"
                    variant={'bordered'}
                    className={'flex'}>
                    { action !== 'charts' && <a href={'/home/catalog?action=new'}>Add New Product</a>}
                    { action === 'charts' && <a href={'/home/catalog?action=new_chart'}>Add New Chart</a>}
                </Button>
            </div>
            { (action === undefined || action === 'popular' ) &&
              <CatalogTable action={action}/>
            }

            { action === 'charts' && <CatalogCharts/>}
        </main>
    )
}
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, Button} from "@nextui-org/react";
import {AiFillDatabase} from "react-icons/ai";
import {IoIosStar} from "react-icons/io";
import {FaChartSimple} from "react-icons/fa6";
import {ButtonGroup} from "@nextui-org/button";
import { CiCirclePlus } from "react-icons/ci";
import {ProductFom} from "@/app/home/catalog/ProductFom";
import CatalogTable from "@/app/home/catalog/CatalogTable";
import CatalogCharts from "@/app/home/catalog/CatalogChatrs";
import {ChartFom} from "@/app/home/catalog/ChartFom";

// import {useAuthState} from 'react-firebase-hooks/auth'
// import {auth} from '@/app/firebase/config'
// import { useRouter } from 'next/navigation';
// import { signOut } from 'firebase/auth';
export default async function Materials({searchParams}: any ) {

    const action = searchParams.action;
    const product = searchParams.product;


    // used to provide session
    // const [user] = useAuthState(auth);
    // const router = useRouter()
    // const userSession = sessionStorage.getItem('user');
  
    // console.log({user})
   
    // if (!user && !userSession){
    //   router.push('/sign-up')
    // }
    const filters=[
        {
            name: 'Data',
            icon: <AiFillDatabase/>,
            url: '/home/catalog'
        },
        {
            name: 'Popular',
            icon: <IoIosStar/>,
            url: '/home/catalog?action=popular'
        },
        {
            name: 'Charts & Insights',
            icon: <FaChartSimple/>,
            url: '/home/catalog?action=charts'
        },
    ]
    const onSave = (data: any) => {
        console.log(data)
    }

    return (
        <main className="w-full px-9">
            <Modal
                isOpen={action === 'new'}
                closeButton={<a href={'/home/catalog'}>X</a>}
            >

                {/* for logout */}
                      {/* <button onClick={() => {
        signOut(auth)
        sessionStorage.removeItem('user')
        }}>
        Log out
      </button> */}

                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        Create a new product
                    </ModalHeader>
                    <ModalBody>
                        <ProductFom/>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Modal
                isOpen={action === 'new_chart'}
                size={'lg'}
                closeButton={<a href={'/home/catalog?action=charts'}>X</a>}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        Generate Chart
                        <small className={''}>Automatically generate interactive financial store data charts from descriptions using Google Vertex AI</small>
                    </ModalHeader>
                    <ModalBody>
                        <ChartFom />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <div className={'flex justify-between mb-5'}>
                <ButtonGroup>
                    {
                        filters && filters.map((filter, index) => (

                                <Button
                                    color="primary"
                                    key={index}
                                    startContent={filter.icon}
                                    variant={'bordered'}
                                    className={'flex'}>
                                    <a href={filter.url}>
                                    {filter.name}
                                    </a>
                                </Button>

                        ))
                    }
                </ButtonGroup>
                <Button
                    startContent={<CiCirclePlus/>}
                    color="primary"
                    variant={'bordered'}
                    className={'flex'}>
                    { action !== 'charts' && <a href={'/home/catalog?action=new'}>Add New Product</a>}
                    { action === 'charts' && <a href={'/home/catalog?action=new_chart'}>Add New Chart</a>}
                </Button>
            </div>
            { (action === undefined || action === 'popular' ) &&
              <CatalogTable action={action}/>
            }

            { action === 'charts' && <CatalogCharts/>}
        </main>
    )
}







