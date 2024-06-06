import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, Button} from "@nextui-org/react";
import {getCatalog} from "@/services/catalog";
import {AiFillDatabase} from "react-icons/ai";
import {IoIosStar} from "react-icons/io";
import {FaChartSimple} from "react-icons/fa6";
import Table from "@/components/Table";
import {ButtonGroup} from "@nextui-org/button";
import { CiCirclePlus } from "react-icons/ci";
import {ProductFom} from "@/app/home/catalog/ProductFom";
import CatalogTable from "@/app/home/catalog/CatalogTable";
import CatalogChats from "@/app/home/catalog/CatalogChatrs";
import {ChartFom} from "@/app/home/catalog/ChartFom";

export default async function Materials({searchParams}: any ) {
    const action = searchParams.action;

    const data = await getCatalog();
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
    return (
        <main className="w-full px-9">
            <Modal
                isOpen={action === 'new'}
                closeButton={<a href={'/home/catalog'}>X</a>}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1 text-black">
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
                closeButton={<a href={'/home/charts'}>X</a>}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1 text-black">
                        Generate Chart
                        <small className={'text-slate-800'}>Automatically generate interactive financial store data charts from descriptions using Google Vertex AI</small>
                    </ModalHeader>
                    <ModalBody>
                        <ChartFom/>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <div className={'flex justify-between'}>
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
            { action === undefined && <CatalogTable data={data}/>}
            { action === 'popular' && <CatalogTable data={data}/>}
            { action === 'charts' && <CatalogChats/>}
        </main>
    )
}



