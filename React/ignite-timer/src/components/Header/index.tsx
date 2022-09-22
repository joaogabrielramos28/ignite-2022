import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import LogoIgnite from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer />
        </NavLink>
        <NavLink to="/history" end title="Histórico">
          <Scroll />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
