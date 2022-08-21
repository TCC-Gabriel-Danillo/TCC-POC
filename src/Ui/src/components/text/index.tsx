import { ReactNode } from 'react';
import { TextStyle, Text as RnText } from 'react-native';
import { textStyles } from "./styles"

interface Props {
    fontType?: 'h1' | 'h2' | 'p'
    fontWeight?: 'bold' | 'semibold' | 'regular'
    styles?: TextStyle
    children: ReactNode
}

export const Text: React.FC<Props> = ({
    fontType = 'p', 
    fontWeight = 'regular',
    styles,
    children
 }) => {
  const fontTypeStyle = textStyles[fontType]; 
  const fontWeightStyle = textStyles[fontWeight];
  return(
    <RnText style={[fontTypeStyle, fontWeightStyle, styles]}>
        {children}
    </RnText>
  )
}

