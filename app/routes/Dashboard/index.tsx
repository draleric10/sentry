import { Outlet, LoaderFunction, useLoaderData } from 'remix';
import AppTopbar from '~/Components/Dashboard/AppTopbar';
import AppMenu from '~/Components/Dashboard/AppMenu';


export const loader: LoaderFunction = async () => {
    return {
        menu: [
            {
                label: 'Home',
                items: [{
                    label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard'
                }]
            },
            {
                label: 'UI Components', icon: 'pi pi-fw pi-sitemap',
                items: [
                    { label: 'Sales', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
                    { label: 'Analytics', icon: 'pi pi-fw pi-check-square', to: '/input' },
                    { label: "Branches", icon: "pi pi-fw pi-bookmark", to: "/floatlabel" },
                ]
            },
            {
                label: 'Reventory', icon: 'pi pi-fw pi-search',
                items: [
                    {
                        label: 'Create Items', icon: 'pi pi-fw pi-home', to: '/'
                    },
                    {
                        label: 'Item Master', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Reference', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Category', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Brand', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    }
}

export default function Dashboard() {
    const { menu } = useLoaderData();
  
    return <div>
        <AppTopbar />
        <div className="layout-sidebar" >
            <AppMenu menu={menu}/>
        </div>
        <Outlet />
    </div>
}