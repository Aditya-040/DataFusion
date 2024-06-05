'use server'
import {z} from "zod";
import {redirect} from "next/navigation";

export const getCatalog = async () => {
    //mock data
    return [
        { id: 1, name: 'Product 1', price: 100, description: 'Description 1' },
        { id: 2, name: 'Product 2', price: 200, description: 'Description 2' },
        { id: 3, name: 'Product 3', price: 300, description: 'Description 3' },
        { id: 4, name: 'Product 4', price: 400, description: 'Description 4' },
        { id: 5, name: 'Product 5', price: 500, description: 'Description 5' }
    ];
}



export const  saveProduct = async (
    prevState: string | undefined,
    formData: FormData
) => {

    const schema = z.object({
        file: z
            .any()
    });

    const parse = schema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        price: formData.get("price")
    });

    if (!parse.success) {
        return { message: parse.error.errors[0].message };
    }
    try {
        return { message: 'success' }
    } catch (e) {
        console.log(e)
        return { message: 'failed to upload file'}
    }
    redirect('/home/catalog')

}
