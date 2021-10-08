
import { Image } from 'semantic-ui-react'
import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import './CardComponent.css'
import { Message } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'


const ContainerExampleAlignment = ({data}) => (
    <div className='Caja'>
        
    <Segment inverted secondary textAlign='center'><p>{data.title}</p></Segment>
    
    <div >
    <Image src={data.hdurl} size='large' rounded centered  />
    </div>

    <Container textAlign='right'><span>{data.date}</span></Container>
    <Container textAlign='justified'>
      <b></b>
      <Divider />
      <h4>
        {data.explanation}
      </h4>
   
    </Container>
  </div>
)

export default ContainerExampleAlignment

