import classNames from 'classnames';
import { Link } from 'remix';

export default function AppTopbar(props: any) {
    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                {/* <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/logo-dark.svg' : 'assets/layout/images/logo-white.svg'} alt="logo" /> */}
                <span>Sentry</span>
            </Link>

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars" />
            </button>

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <ul className={classNames("layout-topbar-menu lg:flex origin-top", { 'layout-topbar-menu-mobile-active': props.mobileTopbarMenuActive })}>
                <li>
                    <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                        <i className="pi pi-tags" />
                        <span>Events</span>
                    </button>
                </li>
                <li>
                    <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                        <i className="pi pi-bell" />
                        <span>Settings</span>
                    </button>
                </li>
                <li>
                    <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                        <i className="pi pi-user" />
                        <span>Profile</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}
