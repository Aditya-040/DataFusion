import Table from "@/components/Table";
import  moment from 'moment';
import React from "react";

interface  CatalogTableProps {
    data: Array<any>;
}
export default function CatalogTable({data}: CatalogTableProps) {

    const _data = data.map((item) => {

        return {
            ...item
        }
    })


    return (<Table
        title={''}
        columns={[
            {title: 'Name', key: 'name', width: 'w-[50p]'},
            {title: 'Most popular w/Ages', key: 'ages', width: 'w-[50p]'},
            {title: 'Total Number Sold', key: 'sold', width: 'w-[50p]'},
            {title: 'Total Sales', key: 'sold', width: 'w-[50p]'},
        ]}
        data={_data || []}
    />)
}
