import React from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'

export default function Navbar () {
  return (
    <Menu mode='horizontal'>
      <Menu.Item >
        <Link to='/'>
          <Icon type='home' /> Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='mywatchlist'>
          <Icon type='like-o' /> My WatchList 
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='nowplaying'>
          <Icon type='rocket' /> Now Playing
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='myfavorite'>
          <Icon type='star-o' /> My Favorite
        </Link>
      </Menu.Item>
    </Menu>
  )
}
