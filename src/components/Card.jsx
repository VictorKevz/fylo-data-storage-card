import React from "react";
import "./css/card.css";
import logo from "../assets/images/logo.svg";
import documentIcon from "../assets/images/icon-document.svg";
import folderIcon from "../assets/images/icon-folder.svg";
import uploadIcon from "../assets/images/icon-upload.svg";

function Card() {
  return (
    <div className={`card-wrapper`}>
      <div className="card-container">
        <div className="intro-section">
          <img src={logo} alt="Fylo's Logo" className="logo" />
          <div className="icons-container">
            <div className="icon-wrapper">
              <img
                src={documentIcon}
                alt="Document Icon"
                className="document-icon icon"
              />
            </div>
            <div className="icon-wrapper">
              <img
                src={folderIcon}
                alt="Folder Icon"
                className="folder-icon icon"
              />
            </div>
            <div className="icon-wrapper">
              <img
                src={uploadIcon}
                alt="File Upload Icon"
                className="upload-icon icon"
              />
            </div>
          </div>
        </div>
        <div className="stats-card">
          
          <div className="details-container">
            <p className="parag">
              You've used <span className="parag-bold">815 GB</span> of your
              storage
            </p>
            <div className="line-wrapper">
              <div className="line-inner">
                <div className="circle"></div>
              </div>
            </div>
            <div className="num-wrapper">
              <p className="num min">0 GB</p>
              <p className="num max">1000 GB</p>
            </div>
          </div>
          <div className="tag-container">
            <div className="triangle"></div>
            <h1 className="title">
              185 <span className="title-light">GB LEFT</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
