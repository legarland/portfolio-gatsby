import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg={`linear-gradient(to right, ${colors.yellow} 0%, ${colors['yellow-dark']}  100%)`}
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="triangle" width={8} stroke={colors.yellow} left="25%" top="5%" />
        <SVG icon="css3" hiddenMobile width={12} fill={colors['blue-dark']} left="45%" top="10%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="typescript" hiddenMobile width={16} fill={colors['grey-darkest']} left="20%" top="90%" />
        <SVG icon="nodejs" width={6} fill={colors.white} left="75%" top="10%" />
      </UpDownWide>
      <SVG icon="html" width={8} fill={colors.white} left="4%" top="20%" />
      <SVG icon="box" width={6} fill={colors.yellow} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
      <SVG icon="sass" width={16} fill={colors.black} left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-dark']} left="80%" top="70%" />
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
