import React from 'react'
import {Button} from "@nextui-org/react";
import {ButtonGroup} from "@nextui-org/button";
interface FilterProps {
    name: string;
    icon?: React.ReactNode;
}
export interface TableProps {
  title: string
  columns: TableColumn[];
  data: TableRow[];
  rowUrl?: string;
  filters?: FilterProps[];
}
export interface TableColumn {
  key: string;
  title: string;
  width: string;
}
export interface TableRow {
  [key: string]: string | React.ReactNode;
}


export default function Table({columns, data}: TableProps) {
    return (
            <div className="w-full ">
                <table className="w-full px-4 border-primary rounded border-1 mt-4">
                    <thead className={'border-primary rounded border-1'}>
                        <tr className=" bg-darkViolet h-8">
                            {columns.map((column,index) => (
                                <th key={index} className={`${column.width} text-left px-8`}>{column.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody >
                        {data.map((row, index) => (
                            <tr key={index} className="h-9">

                                {row.rowUrl ? <a href={row.rowUrl} className={'w-full contents'}>
                                    {columns.map((column, colIndex) => (
                                        <td key={colIndex}
                                            className={`px-8 py-5 ${column.width}`}>{row[column.key]}</td>
                                    ))}
                                </a>
                                    :
                                    <>
                                        {columns.map((column, colIndex) => (
                                            <td key={colIndex}
                                                className={`px-8 py-5 ${column.width}`}>{row[column.key]}</td>
                                        ))}
                                    </>
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}
