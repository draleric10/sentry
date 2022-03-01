import { Outlet, LoaderFunction, useLoaderData } from 'remix';
import AppTopbar from '~/Components/Dashboard/AppTopbar';
import AppMenu from '~/Components/Dashboard/AppMenu';

import { menu } from '~/helpers/menu'
import { getUser, getSuppliers , getCategories, getItems} from '~/services/db.service'
import { getSalesSummary , getSalesDetails} from '~/services/firebase.service.js'

export const loader: LoaderFunction = async () => {
    // const user: any = await getUser();
    const salesSummary = await getSalesSummary('confluence')
    const salesDetails = await getSalesDetails('confluence')
    
    // const suppliers = await getSuppliers();
    // const categories = await getCategories();
    // const items = await getItems()

    const suppliers:any = [], categories: any = [], items: any = []

    return {
        menu,
        // user,
        salesSummary,
        salesDetails,
        suppliers,
        categories,
        items
    }
}

export default function Dashboard() {
    // const { menu, user,  } = useLoaderData();
    const { menu, salesSummary, salesDetails, suppliers, categories, items  } = useLoaderData();
  
    return <div className='layout-wrapper layout-static'>
        <AppTopbar />
        <div className="layout-sidebar" >
            <AppMenu menu={menu} />
        </div>

        <div className="layout-main-container">
            <Outlet context={{ salesSummary, salesDetails, suppliers, categories, items }} />
        </div>
    </div>
}