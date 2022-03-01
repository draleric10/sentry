import { db } from '~/utils/db'
import * as _ from 'lodash'
import type { Master_User as User, Master_Supplier as Supplier } from '@prisma/client';

/** 
* Get user data from database.
* Includes client, group.
* Omit password field.

* @param {void}
* @return User
*/
export async function getUser() {
    const userData: User | null = await db.master_User.findUnique({
        where: {
            email: "bg@dev.test"
        },
        include: {
            client: true,
            group: true
        }
    })

    const user = _.omit(userData, ['password'])

    return user
}

export async function getSuppliers() {
    const supplierData: any[] = await db.master_Supplier.findMany()
    return supplierData
}

export async function getCategories() {
    const categoryData: any = await db.ref_Item_Category.findMany()
    console.log("🚀 ~ file: db.service.ts ~ line 36 ~ getCategories ~ categoryData", categoryData)
    return categoryData
}

export async function getItems() {
    const itemData: any = await db.master_Item.findMany()
    return itemData
}