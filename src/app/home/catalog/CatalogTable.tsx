import Table from "@/components/Table";
import React from "react";

export default function CatalogTable({data}: any) {

   return <Table
       columns={[
           {title: 'Name', key: 'name', width: 'w-[50p]'},
           {title: 'Price', key: 'price', width: 'w-[25p]'},
           {title: 'Description', key: 'description', width: 'w-[25p]'},
           {title: '', key: 'tools', width: 'w-[25p]'},
       ]}
       data={data || []}
   />
}
