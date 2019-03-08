import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
  background: ${props => props.bg};
  background-size: cover;
  min-height: 300px;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const Outer = styled.div`
  display: flex;
  flex-direction: column;
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base text-black`};
  display: none;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`text-black uppercase text-xl md:text-2xl xl:text-3xl tracking-wide font-sans text-center`};
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.4);
  margin-top: 10px;
`

const ProjectCard = ({ title, link, children, bg }) => (
  <Outer>
    <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg} />
    <Title>{title}</Title>
  </Outer>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
