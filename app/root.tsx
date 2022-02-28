import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from "remix";


import layoutStyle from '~/styles/layout/layout.css'
import primeFlex from '~/styles/primeflex/primeflex.css'
import primeIcons from '~/styles/primeicons/primeicons.css'
import themeStylesUrl from '~/styles/themes/lara-light-indigo/theme.css'

import type { MetaFunction, LinksFunction } from "remix";

export const meta: MetaFunction = () => {
    return { title: "Sentry" };
};

export const links: LinksFunction = () => [{
    rel: 'stylesheet',
    href: layoutStyle
}, {

    rel: 'stylesheet',
    href: themeStylesUrl
},
{
    rel: 'stylesheet',
    href: primeFlex
},
{
    rel: 'stylesheet',
    href: primeIcons
},
]


export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
