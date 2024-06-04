import Image from 'next/image'
import React from 'react'

export interface TableProps {
  title: string
  columns: TableColumn[];
  data: TableRow[];
  rowUrl?: string;
}
export interface TableColumn {
  key: string;
  title: string;
  width: string;
}
export interface TableRow {
  [key: string]: string | React.ReactNode;
}


export default function Table({title, columns, data}: TableProps) {
    return (
        <div>
            <div className='w-full flex justify-between items-center gap-4 py-3 px-7'>
                <p>{title}</p>
            </div>
            <div className="w-full">
                <table className="w-full px-4">
                    <thead>
                        <tr className=" bg-darkViolet h-8">
                            {columns.map((column,index) => (
                                <th key={index} className={`${column.width} text-left px-8`}>{column.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
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
        </div>
    )
}
