import { Outlet, LoaderFunction, useLoaderData } from 'remix';
import AppTopbar from '~/Components/Dashboard/AppTopbar';
import AppMenu from '~/Components/Dashboard/AppMenu';

import { menu } from '~/utils/menus'
// import { getUser } from '~/services/db.service'
import { getSalesSummary , getSalesDetails} from '~/services/firebase.service.js'

export const loader: LoaderFunction = async () => {
    // const user: any = await getUser();
    const salesSummary = await getSalesSummary('confluence')
    const salesDetails = await getSalesDetails('confluence')
    return {
        menu,
        // user,
        salesSummary,
        salesDetails
    }
}

export default function Dashboard() {
    // const { menu, user,  } = useLoaderData();
    const { menu, salesSummary, salesDetails  } = useLoaderData();
  
    return <div className='layout-wrapper layout-static'>
        <AppTopbar />
        <div className="layout-sidebar" >
            <AppMenu menu={menu} />
        </div>

        <div className="layout-main-container">
            <Outlet context={{ salesSummary, salesDetails }} />
        </div>
    </div>
}