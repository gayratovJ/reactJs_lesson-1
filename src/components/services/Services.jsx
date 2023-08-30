import { Component } from "react";
import photo from "../../assets/IMAGE (2).png";
import style from "./Services.module.css";
import mainPh from "../../assets/IMAGE (3).png";
import frame from "../../assets/Frame (1).png";
export class Services extends Component {
  render() {
    return (
      <main className={style.service}>
        <section>
          <div className="container">
            <div className={style.head}>
              <h2>Our Services</h2>
              <button className={style["blue-btn"]}>Explore services</button>
            </div>
            <div className={style.row}>
              <div className={style["col-4"]}>
                <img className={style.photo} src={photo} alt="" />
                <h3>House cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
              <div className={style["col-4"]}>
                <img className={style.photo} src={photo} alt="" />
                <h3>Office cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
              <div className={style["col-4"]}>
                <img className={style.photo} src={photo} alt="" />
                <h3>Industrial cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
            <div className={style["service-law"]}>
              <div className={style["main-sv"]}>
                <img src={mainPh} alt="" />
                <div className={style.covid}>
                  <h4>Covid-19 sanitization</h4>
                  <h2>
                    We follow guidelines to keep you safe from the COVID-19
                    virus
                  </h2>
                  <p className={style.about}>
                    Lobortis mattis odio leo eget mauris met aliquet semper
                    molestie sollicitudin congue massa mauris lectus.
                  </p>
                  <div className={style["about-btn"]}>
                    <button className={style["blue-btn"]}>
                      Get a free quote
                    </button>
                    <img className={style.phone} src={frame} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Services;
