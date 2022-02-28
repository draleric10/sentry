import { Outlet, LoaderFunction, useLoaderData } from 'remix';
import AppTopbar from '~/Components/Dashboard/AppTopbar';
import AppMenu from '~/Components/Dashboard/AppMenu';
import { menu } from '~/utils/menus'
import { getUser } from '~/services/db.service'
import { getClientCollection } from '~/services/firebase.service.js'

export const loader: LoaderFunction = async ({ request, params }) => {
    const user: any = await getUser();

    const clientData = await getClientCollection(user.client.ref_cd)

    return {
        menu,
        user,
        clientData
    }
}

export default function Dashboard() {
    const { menu, user, clientData } = useLoaderData();
    console.log("🚀 ~ file: dashboard.tsx ~ line 22 ~ Dashboard ~ clientData", clientData)
    console.log("🚀 ~ file: dashboard.tsx ~ line 26 ~ Dashboard ~ user", user)

    return <div className='layout-wrapper layout-static'>
        <AppTopbar />
        <div className="layout-sidebar" >
            <AppMenu menu={menu} />
        </div>

        <div className="layout-main-container">
            <Outlet context={{ test: '123' }} />
        </div>
    </div>
}