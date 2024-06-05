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

export default async function Materials({searchParams}: any ) {
    const data = await getCatalog();
    const filters=[
        {
            name: 'Data',
            icon: <AiFillDatabase/>
        },
        {
            name: 'Popular',
                icon: <IoIosStar/>
        },
        {
            name: 'Charts & Insights',
                icon: <FaChartSimple/>
        },
    ]
    return (
        <main className="w-full px-9">
            <Modal
                isOpen={searchParams.action === 'new'}
                closeButton={<a href={'/home/catalog'}>X</a>}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1 text-black">
                        Upload a new product
                    </ModalHeader>
                    <ModalBody>
                        <ProductFom/>
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
                                {filter.name}
                            </Button>
                        ))
                    }
                </ButtonGroup>
                <Button
                    startContent={<CiCirclePlus/>}
                    color="primary"
                    variant={'bordered'}
                    className={'flex'}>
                    <a href={'/home/catalog?action=new'}>Add New Product</a>
                </Button>
            </div>
            <Table
                columns={[
                    {title: 'Name', key: 'name', width: 'w-[50p]'},
                    {title: 'Most popular w/Ages', key: 'ages', width: 'w-[50p]'},
                    {title: 'Total Number Sold', key: 'sold', width: 'w-[50p]'},
                    {title: 'Total Sales', key: 'total', width: 'w-[50p]'},
                ]}
                data={data || []}
            />
        </main>
    )
}



