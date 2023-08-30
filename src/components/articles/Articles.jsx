import { Component } from "react";
import style from "./Articles.module.css";
import img from "../../assets/IMAGE (4).png";
export class Articles extends Component {
  render() {
    return (
      <main className={style.articles}>
        <section>
          <div className="container">
            <div className={style.head}>
              <h1>Articles & resources</h1>
              <div className={style.btn}>
                <button className={style["blue-btn"]}>Get a free quote </button>
                <button className={style["blue-btn"]}>Browse articles </button>
              </div>
            </div>
            <div className={style.row}>
              <div className={style["col-6"]}>
                <img src={img} alt="" />
                <div className={style["card-bottom"]}>
                  <h5>
                    8 best vacuum cleaners to clean any mess for your home in
                    2022
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>
                  <span>Jan 28, 2022</span>
                </div>
              </div>
              <div className={style["col-6"]}>
                <img src={img} alt="" />
                <div className={style["card-bottom"]}>
                  <h5>
                    8 best vacuum cleaners to clean any mess for your home in
                    2022
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>
                  <span>Jan 28, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Articles;
