import { Component } from "react";
import style from "./About.module.css";
import phone from "../../assets/Frame.png";
import mainImg from "../../assets/Group.png";
export class About extends Component {
  render() {
    return (
      <section>
        <main>
          <div className={style.container}>
            <div className={style.row}>
              <div className="col-6">
                <h1 className={style["col-4"]}>
                  Quality cleaning for your home
                </h1>
                <p>
                  Condimentum mauris sit cursus amet id non neque pharetra nulla
                  ornare sed facilisis senectus dapibus nibh ultrices eget
                  suscipit aliquet et nulla magna lacus penatibus.
                </p>
                <div className={style["about-btn"]}>
                  <button className={style["blue-btn"]}>
                    Get a free quote
                  </button>
                  <img className={style.phone} src={phone} alt="" />
                </div>
              </div>
              <div className="col-6">
                <img className={style.mainImg} src={mainImg} alt="" />
              </div>
            </div>
          </div>
        </main>
      </section>
    );
  }
}
export default About;
