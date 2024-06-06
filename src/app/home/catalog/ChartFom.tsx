'use client'
import {useFormState, useFormStatus} from "react-dom";
import React from "react";
import {Button} from "@nextui-org/react";
import {saveProduct} from "@/services/catalog";
import {Divider} from "@nextui-org/divider";
import { IoBarChartOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import {AiFillDatabase} from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { LuPackage } from "react-icons/lu";


const initialState: any = {
    message: "",
};

export const ChartFom = () => {
    const [state, formAction] = useFormState(saveProduct, initialState);
    const [filesName, setFilesName] = React.useState<any>('');
    const chartButtons = [
        {
            name: 'Pie Chart',
            icon: <FaChartPie/>,
            value: 'pie'
        },
        {
            name: 'Line Chart',
            icon: <FaChartLine/>,
            value: 'line'
        },
        {
            name: 'Bar Chart',
            icon: <IoBarChartOutline/>,
            value: 'bar'

        }]
    const dataSources = [
        {
            name: 'Catalog',
            value: 'catalog',
            icon: <AiFillDatabase/>
        },
        {
            name: 'Orders',
            value: 'orders',
            icon: <LuPackage/>
        },
        {
            name: 'Customers',
            value: 'customers',
            icon: <CiUser/>
        }
    ]
    return <form className={'flex flex-col gap-4'} action={formAction}>
        <label className="text-gray-700">Datasets to use </label>
        <div className={'flex gap-3 justify-center'}>
            {dataSources.map((button, index) => (
                <Button
                    key={index}
                    className="flex gap-1 flex-col h-24"
                >
                    {button.icon}
                    {button.name}
                </Button>
            ))}
        </div>
        <label className="text-gray-700">Type of chart</label>
        <div className={'flex gap-3 justify-center'}>
            {chartButtons.map((button, index) => (
                <Button
                    key={index}
                    className="flex gap-1 flex-col h-24"
                >
                    {button.icon}
                    {button.name}
                </Button>
            ))}
        </div>

        <Divider/>
        <textarea
            required
            className="form-input mt-1 block w-full"
            name={'description'}
            placeholder={'description'}
        />
        <SaveButton/>
    </form>
}

const SaveButton = () => {
    const { pending } = useFormStatus();
    return <Button
        type="submit"
        className=" w-full"
        color={'primary'}
        isLoading={pending}
        disabled={pending}
    >
        Generate Chart
    </Button>
}
