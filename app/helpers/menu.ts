export const menu = [
    {
        label: 'Home',
        items: [{
            label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard'
        }]
    },
    {
        label: 'Pages', icon: 'pi pi-fw pi-sitemap',
        items: [
            { label: 'Sales', icon: 'pi pi-fw pi-money-bill', to: '/dashboard/sales' },
            { label: 'Analytics', icon: 'pi pi-fw pi-chart-bar', to: '/dashboard/analytics' },
            { label: "Branches", icon: "pi pi-fw pi-sitemap", to: "/dashboard/branches" },
        ]
    },
    {
        label: 'Inventory', icon: 'pi pi-fw pi-search',
        items: [
            {
                label: 'Item Master', icon: 'pi pi-fw pi-star', to: '/dashboard/inventory'
            },
            {
                label: 'Create Items', icon: 'pi pi-fw pi-plus-circle', to: '/dashboard/inventory/create'
            },
            {
                label: 'Referece', icon: 'pi pi-fw pi-sliders-h',
                items: [
                    { label: 'Category', icon: 'pi pi-fw pi-bookmark', to: '/dashboard/inventory/category' },
                    { label: 'Brand', icon: 'pi pi-fw pi-bookmark', to: '/dashboard/inventory/brand' },
                ]
            },
        ]
    },
    {
        label: 'Business Partner', icon: 'pi pi-fw pi-sitemap',
        items: [
            { label: 'Supplier', icon: 'pi pi-fw pi-id-card', to: '/dashboard/supplier' },
        ]
    },
]