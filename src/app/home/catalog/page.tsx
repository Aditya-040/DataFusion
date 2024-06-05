import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody} from "@nextui-org/react";
import {getCatalog} from "@/services/catalog";
import {AiFillDatabase} from "react-icons/ai";
import {IoIosStar} from "react-icons/io";
import {FaChartSimple} from "react-icons/fa6";
import Table from "@/components/Table";


export default async function Materials({searchParams}: any ) {
    const data = await getCatalog();
    return (
        <main className="w-full px-9">
            <Modal
                isOpen={searchParams.action === 'new'}
                closeButton={<a href={'/home/materials'}>X</a>}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        <p className={'text-primarySmall'}>Upload a new document</p>
                        <p>List of recommended documents</p>
                    </ModalHeader>
                    <ModalBody>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <div>
                <Table
                    title={''}
                    filters={[
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
                    ]}
                    columns={[
                        {title: 'Name', key: 'name', width: 'w-[50p]'},
                        {title: 'Most popular w/Ages', key: 'ages', width: 'w-[50p]'},
                        {title: 'Total Number Sold', key: 'sold', width: 'w-[50p]'},
                        {title: 'Total Sales', key: 'sold', width: 'w-[50p]'},
                    ]}
                    data={data || []}
                />
            </div>
        </main>
    )
}



