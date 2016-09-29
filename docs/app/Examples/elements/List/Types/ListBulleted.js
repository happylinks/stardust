import React from 'react'
import { List } from 'stardust'

const ListBulleted = () => {
  return (
    <List bulleted>
      <List.Item>Gaining Access</List.Item>
      <List.Item>Inviting Friends</List.Item>
      <List.Item>
        <div>Benefits</div>

        <List.List>
          <List.Item href='#'>Link to somewhere</List.Item>
          <List.Item>Rebates</List.Item>
          <List.Item>Discounts</List.Item>
        </List.List>
      </List.Item>
      <List.Item>Warranty</List.Item>
    </List>
  )
}

export default ListBulleted