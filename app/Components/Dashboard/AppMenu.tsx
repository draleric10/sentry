import { NavLink } from 'remix';
import classNames from 'classnames';
import { Ripple } from "primereact/ripple";
import { Badge } from 'primereact/badge';


const renderLinkContent = (item: any) => {
    let submenuIcon = item.items && <i className="pi pi-fw pi-angle-down menuitem-toggle-icon"></i>;
    let badge = item.badge && <Badge value={item.badge} />

    return (
        <>
            <i className={item.icon}></i>
            <span>{item.label}</span>
            {submenuIcon}
            {badge}
            <Ripple/>
        </>
    );
}

const onKeyDown = (event: any) => {
    if (event.code === 'Enter' || event.code === 'Space'){
        event.preventDefault();
        event.target.click();
    }
}

const renderLink = (item: any, i:number) => {
    let content = renderLinkContent(item);

    if (item.to) {
        return (
            <NavLink aria-label={item.label} onKeyDown={onKeyDown} role="menuitem" className="p-ripple" to={item.to} >
                {content}
            </NavLink>
        )
    }
    else {
        return (
            <a aria-label={item.label} onKeyDown={onKeyDown} role="menuitem" href={item.url} className="p-ripple">
                {content}
            </a>
        );
    }
}


const AppSubmenu = (props: any) => {
    let items = props.items && props.items.map((item: any, i: number) => {
        let active = false;
        let styleClass = classNames(item.badgeStyleClass, { 'layout-menuitem-category': props.root, 'active-menuitem': active && !item.to });
        if(props.root) {
            return (
                <li className={styleClass} key={i} role="none">
                    {props.root === true && <>
                        <div className="layout-menuitem-root-text" aria-label={item.label}>{item.label}</div>
                        <AppSubmenu items={item.items} onMenuItemClick={props.onMenuItemClick} />
                    </>}
                </li>
            );
        }
        else {
            return (
                <li className={styleClass} key={i} role="none">
                    {renderLink(item, i)}
                    <AppSubmenu items={item.items} onMenuItemClick={props.onMenuItemClick} />
                </li>
            );
        }
    });

    return items ? <ul className={props.className} role="menu">{items}</ul> : null;
}

export default function AppMenu(props: any) {
    return (
        <div className="layout-menu-container">
            <AppSubmenu items={props.menu} className="layout-menu" onMenuItemClick={props.onMenuItemClick} root={true} role="menu" />
        </div>
    );
}
