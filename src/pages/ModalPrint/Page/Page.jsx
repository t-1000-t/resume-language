import React from "react";
import styled from "./Page.module.css";
import withLocalization from "../../../hoc/withLocalization";

const {
  photoText,
  bodyStl,
  imgStl,
  h1Stl,
  h4Stl,
  blockTools,
  infoText
} = styled;

const Page = ({ localization }) => (
  <div className={bodyStl}>
    <h1 className={h1Stl}>{localization.localizedContent.author.resume}</h1>

    <div className={photoText}>
      <a href="https://googman.site/">
        <img
          className={imgStl}
          src={localization.localizedContent.author.fo_to_cv}
          // src="./photoCv.jpg"
          width="300"
          alt="photoImg"
          border="0"
        />
      </a>

      <p className={infoText}>
        <span>{localization.localizedContent.author.study}</span> <br />
        {/*<span> Дата рождения: 1987.07.18 (33)</span> <br/>*/}
        <span> {localization.localizedContent.author.nationality} </span> <br />
        <span> {localization.localizedContent.author.gender}</span> <br />
        <span> {localization.localizedContent.author.mobile}</span> <br />
        <span>
          {" "}
          {localization.localizedContent.author.fixMail}
          <a className={styled.aMail} href="mailto:goognya@gmail.com">
            {localization.localizedContent.author.email}
          </a>
        </span>
        <br />
        <span> {localization.localizedContent.author.city}</span> <br />
      </p>
    </div>
    <h4 className={h4Stl}>{localization.localizedContent.author.profession}</h4>
    <p>
      <span>{localization.localizedContent.author.target}</span>
      <br />
      <span> {localization.localizedContent.author.busy}</span>
      <br />
      <span> {localization.localizedContent.author.remote}</span>
      <br />
      <span> {localization.localizedContent.author.trip}</span>
      <br />
    </p>

    <h4 className={h4Stl}>{localization.localizedContent.author.experience}</h4>
    <ul>
      <li>{localization.localizedContent.author.school}</li>
      <li>{localization.localizedContent.author.specialization}</li>
      <li>{localization.localizedContent.author.longStudy}</li>
    </ul>
    <p className={blockTools}>
      <b> {localization.localizedContent.author.ability}</b>
      <br />
      <span> - {localization.localizedContent.author.language}</span>
      <br />
      <span> - {localization.localizedContent.author.ability2}</span>
      <br />
      <span> - {localization.localizedContent.author.ability3}</span>
      <br />
      <span>- {localization.localizedContent.author.ability4}</span>
      <br />
      <span>- {localization.localizedContent.author.ability5}</span>
      <br />
      <span>- {localization.localizedContent.author.ability6}</span>
      <br />
      <span> - {localization.localizedContent.author.ability7}</span>
      <br />
      <span>- {localization.localizedContent.author.ability8})</span>
      <br />
    </p>
    <br />

    <p className={blockTools}>
      <b> {localization.localizedContent.notes.moreAbout}</b>
      <br />
      <span>{localization.localizedContent.notes.realpractical}</span>
      <br />
      <span>{localization.localizedContent.notes.studytech}</span>
      <br />
      <span>{localization.localizedContent.notes.fastlearn}</span>
      <br />
    </p>
    <br />
    <hr />

    <h4 className={h4Stl}>
      {localization.localizedContent.author.add_information}
    </h4>
    <blockquote />
    <span>{localization.localizedContent.author.diploma}</span>
    <br />
    <br />
    <span>{localization.localizedContent.author.personal}</span>
    <br />
    <br />
    <span>{localization.localizedContent.author.thanks}</span>
    <br />
    <blockquote />
  </div>
);

export default withLocalization(Page);
