import React, { useState } from "react";
import Modal from "react-modal";
import { BsXSquare } from "react-icons/bs";

const SideBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <React.Fragment>
      <aside className="sidebar">
        <div className="logo">
          <a>
            Brand <b>Colors</b>
          </a>
          <div className="description">
            The biggest collection of official brand color codes around. Curated
            by @brandcolors and friends.
          </div>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a onClick={openModal}>About BrandColors</a>
            </li>
          </ul>
        </nav>
      </aside>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className="close-modal" onClick={closeModal}><BsXSquare/></button>

        <h3>About BrandColors</h3>
        <p>
          BrandColors was created by <b className="black">DesignBombs</b>. The goal was to create
          a helpful reference for the brand color codes that are needed most
          often.
        </p>
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over <b className="black">2 million pageviews</b>. There are now over <b className="black">600 brands</b>
          with <b className="black">1600 colors</b> and the collection is always growing.
        </p>
      </Modal>
    </React.Fragment>
  );
};

export default SideBar;
