'use server'
import {z} from "zod";
import {redirect} from "next/navigation";

export const getCatalog = async () => {
    //mock data
    return [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
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
