import { Fragment } from "react";
import "./Header.css";

export default function Header() {
  return (
    <Fragment>
      <img
        className="avatar"
        src="./public/images/avatar-jessica.jpeg"
        alt="jessica"
      />
      <section className="title">
        <h1>Jessica Randall</h1>
        <p>London, United Kingdom</p>
      </section>
      <p>"Front-end developer and avid reader"</p>
    </Fragment>
  );
}
