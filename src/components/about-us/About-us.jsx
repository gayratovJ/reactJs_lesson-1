import { Component } from "react";
import style from "./About-us.module.css";
import cardImg from "../../assets/IMAGE (1).png";
export class AboutUs extends Component {
  render() {
    return (
      <main>
        <section className={style.section}>
          <div className="container">
            <h1>About Us</h1>
            <p className={style.text}>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
            <div className={style["row"]}>
              <div className={style["col-4"]}>
                <img
                  src={cardImg}
                  alt="card img"
                  className={style["card-img"]}
                />
                <h4 className={style["card-title"]}>1. Schedule online</h4>
                <p className={style["about-card"]}>
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
              <div className={style["col-4"]}>
                <img
                  src={cardImg}
                  alt="card img"
                  className={style["card-img"]}
                />
                <h4 className={style["card-title"]}>2. Pay online easily</h4>
                <p className={style["about-card"]}>
                  Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                  amet at nunc.
                </p>
              </div>
              <div className={style["col-4"]}>
                <img
                  src={cardImg}
                  alt="card img"
                  className={style["card-img"]}
                />
                <h4 className={style["card-title"]}>
                  3. Get your house cleaned
                </h4>
                <p className={style["about-card"]}>
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
              <div className={style["about-us-btn"]}>
                <button className={style["blue-btn"]}>Get a free quote</button>
                <button className={style["blue-btn"]}>Explore services</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default AboutUs;
