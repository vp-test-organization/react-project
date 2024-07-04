import { memo } from 'react';
import styles from './NavItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import AppNavLink, { AppNavLinkTheme } from 'shared/ui/AppNavLink/AppNavLink';
import { type NavItemType } from '../../model/NavItems';

type NavItemProps = {
	item: NavItemType;
	collapsed: boolean;
	icon: boolean;
};

const NavItem = memo(({ item, collapsed, icon }: NavItemProps) => {
	const isAuth = true; // authorization logic

	if (item.authOnly && !isAuth) return null;

	return (
		<li>
			<AppNavLink
				to={item.path}
				className={classNames(styles.nav__link, { [styles.collapsed]: collapsed }, [])}
				theme={AppNavLinkTheme.SECONDARY}
			>
				{icon && <span className={classNames(styles.nav__icon, { [styles.large]: collapsed }, [])}>{<item.Icon/>}</span>}
				<span className={classNames(styles.nav__text, { [styles.hide]: collapsed }, [])}>{item.text}</span>
			</AppNavLink>
		</li>
	);
});

export default NavItem;
