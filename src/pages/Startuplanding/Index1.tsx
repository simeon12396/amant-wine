import React from 'react'
import Section from './Section'
import Navbar from '../../layout/Navbar'
import Section1 from './Section1'

const Index1: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Section />
      <Section1 />
    </React.Fragment>
  )
}

export default Index1;