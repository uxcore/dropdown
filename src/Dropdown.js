import React from 'react';
import RcDropdown from 'rc-dropdown';
import RcMenu from 'rc-menu';
import assign from 'object-assign';

class Dropdown extends RcDropdown {
	constructor(props){
		super(props);
	}
}

Dropdown.displayName = 'uxcore-dropdown';
Dropdown.propTypes = RcDropdown.propTypes;
Dropdown.defaultProps = assign(RcDropdown.defaultProps, {
	prefixCls: 'kuma-dropdown',
	overlayClassName: 'uxcore'
});

class Menu extends RcMenu {
	constructor(props){
		super(props);
	}
}

Menu.displayName = 'uxcore-menu';
Menu.propTypes = RcMenu.propTypes;
Menu.defaultProps = assign(RcMenu.defaultProps, {
	prefixCls: 'kuma-dropdown-menu'
});

export {Dropdown, Menu};
