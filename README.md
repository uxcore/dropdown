# uxcore-dropdown
---

## TL;DR
dropdown ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-dropdown
$ cd uxcore-dropdown
$ npm install
$ gulp server
```

## Usage

```js
import {Dropdown, Menu} from 'uxcore-dropdown';
var menu = <Menu>
  <Menu.Item>
    <a target="_blank" href="http://www.alipay.com/">第一个菜单项</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" href="http://www.taobao.com/">第二个菜单项</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" href="http://www.tmall.com/">第三个菜单项</a>
  </Menu.Item>
</Menu>;

React.render(
	<Dropdown overlay={menu}>
		<button className="kuma-button kuma-button-sblue">hover触发</button>
	</Dropdown>,
	document.getElementById('target'));
```

### demo
http://uxcore.github.io/uxcore/components/dropdown/

## API

### props

|参数|说明|类型|默认值|
|---|----|---|------|
|trigger|触发下来行为|"click" or "hover"|hover|
|overlay|菜单节点|React.Element|无|
