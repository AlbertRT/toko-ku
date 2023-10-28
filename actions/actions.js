"use server"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"

export async function addMerchantServerAction(formData) {
    const session = await getServerSession(authOptions)
    const merchant = formData.get('merchant')
    const supplier = formData.get('supplier')

    try {
        const { toko_id } = await db.user.findUnique({ where: { email: session?.user.email } })

        await db.merchant.create({
            data: {
                name: merchant,
                supplier,
                toko_id
            }
        })

        revalidatePath('/dashboard/data-merchant')
    } catch (error) {
        console.log(error);
    }

}