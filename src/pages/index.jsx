import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { colors } from '../../tailwind'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import SVG, { icons } from '../components/SVG'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
  display: flex;
  align-items: center;
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const SocialLink = styled.a`
  display: inline-block;
  margin-right: 20px;
`

const Button = styled.button`
  color: #fff;
  border: solid 2px #ffffff;
  background: transparent;
  padding: 10px;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    border-color: ${colors.yellow};
    color: ${colors.yellow};
  }
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>Hi, I'm Logan</BigTitle>
        <Subtitle>I'm a full stack developer.</Subtitle>
        {/* <Button
          onClick={() => {
            document.getElementById('work-title').scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest',
            })
          }}
        >
          View my Work
        </Button> */}
      </Hero>
      <Projects offset={1}>
        <Title id="work-title">Recent Work</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Marana Parks"
            link="https://www.behance.net/gallery/75954881/Marana-Parks-Recreation"
            bg="url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/56e3b475954881.5c5b462c3a5fd.png') no-repeat center center"
          />
          <ProjectCard
            title="The Caption Game"
            link="https://www.behance.net/gallery/75956793/The-Caption-Game"
            bg="url('https://mir-s3-cdn-cf.behance.net/projects/original/ee1f3075956793.Y3JvcCw5MTEsNzEyLDI1MCw2MA.png')"
          />
          <ProjectCard
            title="Cinder Block Brewery"
            link="https://www.behance.net/gallery/20441599/Cinderblock-Brewery-Website"
            bg="url('https://mir-s3-cdn-cf.behance.net/projects/original/20441599.543a0d51e6dde.png')"
          />
          <ProjectCard
            title="Eric Sheffield Designs"
            link="https://www.behance.net/gallery/52246043/Eric-Sheffield-Designs"
            bg="url('https://mir-s3-cdn-cf.behance.net/projects/original/75ac6852246043.Y3JvcCw2NTAsNTA4LDI3NiwxMDE.jpg')"
          />
        </ProjectsWrapper>
        <ContactText style={{ justifyContent: 'center' }}>
          View more of my work on&#160;<a href="https://www.behance.net/legarland">Behance.</a>
        </ContactText>
      </Projects>
      <About offset={3}>
        <Title>About Me</Title>
        <AboutHero>
          <Avatar
            src="https://media.licdn.com/dms/image/C4E03AQEyVFhRYQN-AA/profile-displayphoto-shrink_200_200/0?e=1557360000&v=beta&t=yQTxsFAkbUfbdbDqkgE3OpAPBrpD2_UJR5l0L2kRUxI"
            alt="Logan Garland"
          />
          <AboutSub>
            I am a full stack developer with a passion for JavaScript, React &amp; all things front-end.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I have over 12 years of software development experience with a core focus on dynamic client-side web
          technologies. I approach all problems with the mindset that they can and will be solved with the right
          combination of knowledge, research and hard work. I love being a developer, and I'm glad I have to opportunity
          to do it for a living. I am always open to new projects, so feel free to contact me using one of the methods
          below.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            <span style={{ marginRight: 15 }}>
              <a href="mailto:legarland@gmail.com">Email me</a> or find me on other platforms:{' '}
            </span>
            <SocialLink href="http://github.com/legarland" target="_blank">
              <svg viewBox={icons.github.viewBox} fill="white" style={{ width: 28 }}>
                {icons.github.shape}
              </svg>
            </SocialLink>
            <SocialLink href="https://facebook.com/floppycatfish" target="_blank">
              <svg viewBox={icons.facebook.viewBox} fill="white" style={{ width: 28 }}>
                {icons.facebook.shape}
              </svg>
            </SocialLink>
            <SocialLink href="https://twitter.com/floppycatfish" target="_blank">
              <svg viewBox={icons.twitter.viewBox} fill="white" style={{ width: 28 }}>
                {icons.twitter.shape}
              </svg>
            </SocialLink>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 Logan Garland</Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
