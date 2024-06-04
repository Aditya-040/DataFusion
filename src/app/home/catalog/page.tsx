import Header from "@/components/Header";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody} from "@nextui-org/react";
import CatalogTable from "@/app/home/catalog/MaterialTable";
import {getCatalog} from "@/services/catalog";


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
            <Header title={''} subtitle={''}/>
            <div>
                <CatalogTable data={data}/>
            </div>
        </main>
    )
}



