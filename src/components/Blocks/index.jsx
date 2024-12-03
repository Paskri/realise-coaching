import './blocks.css'
import Block from '../Block'
import { ColorContext } from '@/contexts/ColorContext'
import React, { useContext } from 'react'

export default function Blocks() {
  const {
    primaryColor,
    setPrimaryColor,
    primaryGradientColor,
    setPrimaryGradientColor,
    secondaryColor,
    setSecondaryColor,
    thirdColor,
    setThirdColor,
    fourthColor,
    setFourthColor,
    fourthGradientColor,
    setFourthGradientColor,
  } = useContext(ColorContext)

  return (
    <div className="blocks-container">
      <Block color={primaryColor} call={setPrimaryColor} />
      <Block color={primaryGradientColor} call={null} />
      <Block color={secondaryColor} call={setSecondaryColor} />
      <Block color={thirdColor} call={setThirdColor} />
      <Block color={fourthColor} call={setFourthColor} />
      <Block color={fourthGradientColor} call={null} />
    </div>
  )
}
