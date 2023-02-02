import React, { Component, useState } from 'react';
import { Drawer, Button } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Navbar = () => {

    const [current, setSurrent] = useState('mail')
    const [visible, setVisible] = useState(false)
    const showDrawer = () => {
        setVisible(true)
    };
    const onClose = () => {
        setVisible(false)
    };
    return (
        <>
        <div style={{height:'140px',backgroundColor:'#a1a1a1'}}></div>

            <nav className="menuBar d-none pb-4">
                <div className="logo">
                    <a href="">logo</a>
                </div>
                <div className="menuCon">
                    <div className="leftMenu">
                        <Menu mode="horizontal">
                            <Menu.Item key="mail">
                                <a href="">Home</a>
                            </Menu.Item>
                            <SubMenu title={<span>Blogs</span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item key="alipay">
                                <a href="">Contact Us</a>
                            </Menu.Item>
                        </Menu>
                    </div>
                    {/* <div className="rightMenu">
                    <RightMenu />
                </div> */}
                    <Button className="barsMenu" type="primary" onClick={() => showDrawer()}>
                        <span className="barsBtn"></span>
                    </Button>
                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >
                        <Menu mode="horizontal">
                            <Menu.Item key="mail">
                                <a href="">Home</a>
                            </Menu.Item>
                            <SubMenu title={<span>Blogs</span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item key="alipay">
                                <a href="">Contact Us</a>
                            </Menu.Item>
                        </Menu>
                        {/* <RightMenu /> */}
                    </Drawer>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
