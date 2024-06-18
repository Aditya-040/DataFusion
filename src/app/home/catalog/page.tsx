
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, Button} from "@nextui-org/react";
import {getCatalog} from "@/services/catalog";
import {AiFillDatabase} from "react-icons/ai";
import {IoIosStar} from "react-icons/io";
import {FaChartSimple} from "react-icons/fa6";
import { ImMagicWand } from "react-icons/im";
import {ButtonGroup} from "@nextui-org/button";
import { CiCirclePlus } from "react-icons/ci";
import {ProductFom} from "@/app/home/catalog/ProductFom";
import CatalogTable from "@/app/home/catalog/CatalogTable";
import CatalogCharts from "@/app/home/catalog/CatalogChatrs";
import {ChartFom} from "@/app/home/catalog/ChartFom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import {Textarea} from "@nextui-org/input";

export default async function Materials({searchParams}: any ) {


    const action = searchParams.action;
    const product = searchParams.product;
    console.log(product)

    const data = (await getCatalog()).map((item) => {
        return {
            ...item,
            tools: <div className={'relative'}>
                <a href={`/home/catalog?product=${item.id}`}><ImMagicWand/></a>
                {
                    product == item.id && <div className={'absolute border-primary border-1 w-96 h-25 right-0 p-3'}>
                    <p>You can ask anything like, &quot add more emojis&quot, or &quotchange the color&quot</p>
                    <Textarea placeholder="Type your message here" />
                </div>}
            </div>
        }
    })
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
            { action === undefined && <CatalogTable data={data}/>}
            { action === 'popular' && <CatalogTable data={data}/>}
            { action === 'charts' && <CatalogCharts/>}
        </main>
    )
}



