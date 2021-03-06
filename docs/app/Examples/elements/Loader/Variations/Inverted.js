import React from 'react'
import { Image, Loader, Segment } from 'stardust'

const Inverted = () => (
  <Segment inverted>
    <Loader active inverted />

    <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default Inverted
