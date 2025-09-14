import ThemeChangerBtn from "./themeChangerBtn"

const Header = () => {
  return (
    <div className='navbar row space-between alignCenter'>
        <img src="/public/assets/images/logo.svg" alt="" />
        <ThemeChangerBtn></ThemeChangerBtn>
    </div>
  )
}

export default Header