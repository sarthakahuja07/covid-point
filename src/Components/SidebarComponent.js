import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sidebarToggle } from '../redux/actionCreator';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../css/sidebarComponent.css'

function Sidebar() {
    const dispatch = useDispatch()
    const [collapsed, setcollapsed] = useState(false)
    const toggled = useSelector(state => state.toggled)

    const handleCollapsedChange = () => {
        collapsed ? setcollapsed(false) : setcollapsed(true);
    }

    const handleToggleSidebar = (value) => {
        dispatch(sidebarToggle())
    };
    return (
        <ProSidebar
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="sm"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div className='sidebar__header'>
                    {collapsed ?
                        null
                        :
                        'covid'
                    }
                    <div onClick={handleCollapsedChange} className="sidebar__collapse__toggler">
                        {collapsed ?
                            <FaBars />
                            :
                            <FaTimes />
                        }
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu >
                    <MenuItem icon={<FaGem />}> Home </MenuItem>
                    <MenuItem icon={<FaGem />}> Vaccine </MenuItem>
                    <MenuItem icon={<FaGem />}> Data </MenuItem>
                    <MenuItem icon={<FaGem />}> Resources </MenuItem>
                    <MenuItem icon={<FaGem />}> Emergency </MenuItem>
                </Menu>
                <Menu className='bottom__menu'>
                    <MenuItem icon={<FaGem />}>  </MenuItem>
                    <MenuItem icon={<FaGem />}>  </MenuItem>    
                </Menu>

            </SidebarContent>
            <SidebarFooter style={{ textAlign: 'center' }}>
                <div className="sidebar-btn-wrapper">
                    <a
                        href="google.com"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span> Source Code </span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    )
}

export default Sidebar
