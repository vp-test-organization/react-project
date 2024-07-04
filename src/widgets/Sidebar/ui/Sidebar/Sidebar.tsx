import { memo, useState } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Nav } from 'features/Nav';

type SidebarProps = {
	className?: string;
};

const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev); 
	};
    
	return (
		<aside className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
			<Button
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
				className={styles.sidebar__btn}
				onClick={onToggle}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<Nav place='sidebar' icons collapsed={collapsed}/>
			<ul className={styles.sidebar__switchers}>
				<li className={styles.sidebar__switchersItem}>
					<ThemeSwitcher/>
				</li>
			</ul>
		</aside>
	);
});

export default Sidebar;
