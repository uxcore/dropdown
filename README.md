# uxcore-dropdown
---

- tags: uxcore, dropdown
- description: uxcore dropdown
- maintainers: vincent.bian
- version: 0.1.0
- lastupdate: 2015/7/12
- screenshots:

## TL;DR

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/dropdown
$ cd dropdown
$ npm install
$ npm run dev
```
nav http://localhost:9090/webpack-dev-server/example/ to see the demo

#### deploy to gh-pages
[refer to]( http://stackoverflow.com/questions/17643381/how-to-upload-my-angularjs-static-site-to-github-pages)
```sh
$ npm run build
$ git add build & git commit -m 'update deploy files'
$ npm run deploy
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
http://uxcore.github.io/dropdown/

## API

### props

|参数|说明|类型|默认值|
|---|----|---|------|
|trigger|触发下来行为|"click" or "hover"|hover|
|overlay|菜单节点|React.Element|无|
