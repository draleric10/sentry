import { db } from '~/utils/db'
import * as _ from 'lodash'
import type { Master_User as User } from '@prisma/client';

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