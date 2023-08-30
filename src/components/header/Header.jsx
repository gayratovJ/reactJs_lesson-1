import style from "./Header.module.css"
import logo from "../../assets/IMAGE.png"
export function Header(){
  return <header>
    <nav className={style["nav-bar"]}>
      <div className={style.container}>
        <img className={style.logo} src={logo} alt="" />
        <ul className={style["menu"]}>
          <li><a href="#home" className={style.link}>Home</a></li>
          <li><a href="#about" className={style.link}>About</a></li>
          <li><a href="#services" className={style.link}>Services</a></li>
          <li><a href="#articles" className={style.link}>Articles</a></li>
          <li><a href="#contact" className={style.link}>Contact</a></li>
        </ul>
        <ul className={style["menu-btn"]}>
          <li><p className={style["cart-count"]}>Cart <span>0</span></p></li>
          <li><button className={style["blue-btn"]}>Get a free quote</button></li>
        </ul>
      </div>
    </nav>
  </header>
}

export default Header;