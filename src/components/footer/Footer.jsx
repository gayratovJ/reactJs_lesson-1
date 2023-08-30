import { Component } from "react";
import logo from "../../assets//IMAGE.png";
import style from "./Footer.module.css";
export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={style.container}>
          <img src={logo} alt="" />
          <h4 className={style.gray}>Copyright © Cleaning X | Designed by</h4>
          <h4 className={style.blue}>BRIX Templates</h4>
          <h4 className={style.gray}>- Powered by</h4>
          <h4 className={style.blue}>Webflow Licenses</h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
