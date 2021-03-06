import React from "react"
import styled from "styled-components"
import { Wrapper } from "../../Generic-helpers/layoutpack"
import img from "../../../assets/images/logo.jpeg"
import { Link } from "react-router-dom"
import { sizes } from "../../Generic-helpers/variables"

const Line = styled.span`
  width: 35px;
  height: 5px;
  background-color: #656565;
  margin-top: 4px;
  &:first-child {
    margin-top: 0 !important;
  }
`
const Button = styled.div`
  background: var(--white);
  border-radius: 3px;
  size: 14px;
  color: #656565;
  border: var(--black);
  padding: 0 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    span {
      background-color: var(--primary);
    }
    cursor: pointer;
    border-color: #003557;
    transform: scale(1.1, 1.1);
  }
  &:active {
    border-color: #003557;
    background-color: #fff;
  }
  &.navmenu-usr-btn-logout {
    width: 100%;
    color: red;
    background-color: var(--white);
    padding: 5px;
    font-size: ${sizes.l};
    outline: none;
    border: none !important;
    &:hover {
      color: var(--primary);
      transform: none !important;
      border-color: none !important;
    }
  }
`
const BurgerButton = props => {
  return (
    <Button onMouseDown={props.toggleMenu}>
      <Line />
      <Line />
      <Line />
    </Button>
  )
}
const Logo = styled.img.attrs({ src: img })`
  width: auto;
  height: 2rem;
  margin-right: 7px;
`
const LogoBox = styled(Link)`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  font-family: "Gosmick Sans", sans-serif;
  text-decoration: none;
  color: var(--black);
`
const ColoredWrapper = styled(Wrapper)`
  background-color: var(--lightwhite);
  box-shadow: ${props => props.shadow || ""};
  &.active {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5000;
  }
`

const MenuLink = styled(Link)`
  width: 100%;
  color: var(--black);
  background-color: var(--white);
  padding: 5px;
  font-size: ${sizes.l};
  text-decoration: none;
  line-height: 1.5;
  &:active {
    color: var(--primary);
  }
  &.active {
    color: var(--primary);
  }
`
const MenuItem = styled.li`
  width: 90%;
  border-top: 2px solid #c4c4c4;
  list-style: none;
  padding: 10px 0;
  &.sub-menu-dropdown {
    border-top: none !important;
  }
`
const MenuList = styled.ul`
  width: 100%;
  }
`
const MenuSlider = styled.div`
  display: inline-block;
  &.show {
    transform: translate3d(0vw, 0, 0);
  }
  &.hide {
    transform: translate3d(-100vw, 0, 0);
  }
  transition: transform 0.5s ease;
  width: 100vw;
  height: 100vh;
  background-color: var(--lightwhite);
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .nav-index-offset {
    position: absolute;
    right: 2rem;
    top: 0;
    width: ${sizes.xxxxl};
    height: ${sizes.xxxxl};
    fill: var(--primary);
    cursor: pointer;
  }
`
const DropdownHeader = styled.div`
  position: relative;
  padding: 5px 0;
  .dropdown-header-arrow {
    width: 35px;
    height: 35px;
    position: absolute;
    top: 0;
    right: 0;
    fill: var(--primary);
    cursor: pointer;
  }
`

export {
  Button,
  BurgerButton,
  Logo,
  LogoBox,
  ColoredWrapper,
  MenuLink,
  MenuSlider,
  MenuItem,
  MenuList,
  DropdownHeader,
}
