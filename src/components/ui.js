import React from 'react';
import styled from 'styled-components';

export const Section = styled.section`
  height: 100%;
`;

const Icon = styled.a`
  margin: 10px;
`;

export const SocialIcon = props => (
  <Icon className="button is-light is-outlined" href={props.url}>
    <span className="icon">
      <i className={props.icon} />
    </span>
    <span>{props.label}</span>
  </Icon>
);

export const Logo = styled.img`
  max-height: 20rem !important;
  margin: 1rem;
`;

export const Hero = styled.section`
  background: url('static/hero.jpg') no-repeat center center !important;
  background-size: cover !important;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to right, #acb6e5, #86fde8);
    opacity: 0.8;
  }
`;

const Button = styled.button`
  margin: 0 5px;
`;

export const MenuButton = props => (
  <Button
    onClick={() => {
      if (props.scrollTo) {
        document.getElementById(props.scrollTo).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      } else if (props.href) {
        // unlazy this some day
        window.location.href = props.href;
      }
    }}
    className="button is-dark is-outlined">
    {props.children}
  </Button>
);
