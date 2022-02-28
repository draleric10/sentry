export const menu = [
    {
        label: 'Home',
        items: [{
            label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard'
        }]
    },
    {
        label: 'UI Components', icon: 'pi pi-fw pi-sitemap',
        items: [
            { label: 'Sales', icon: 'pi pi-fw pi-id-card', to: '/dashboard/sales' },
            { label: 'Analytics', icon: 'pi pi-fw pi-check-square', to: '/dashboard/analytics' },
            { label: "Branches", icon: "pi pi-fw pi-bookmark", to: "/dashboard/branches" },
        ]
    },
    {
        label: 'Reventory', icon: 'pi pi-fw pi-search',
        items: [
            {
                label: 'Create Items', icon: 'pi pi-fw pi-home', to: '/dashboard/items'
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