import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Home.module.css";
import avatar from "../public/img/1.jpg";
import {
  faBars,
  faSearch,
  faBell,
  faPowerOff,
  faDesktop,
  faUserCircle,
  faImage,
  faEnvelope,
  faEnvelopeSquare,
  faExclamationCircle,
  faCog,
  faLock,
  faLanguage,
  faInfoCircle,
  faChevronDown,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import DropDown from "../components/DropDown/DropDown";

export default function Home() {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className={`${collapse ? styles.collapse : ""} ${styles.wrapper}`}>
      {/* <!--header menu start--> */}
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Dashboard</title>
      </Head>
      <div className={styles.header}>
        <div className={styles.headerMenu}>
          <div className={styles.title}>
            Coding <span>Snow</span>
          </div>
          <div
            className={styles.sidebarBtn}
            onClick={() => {
              setCollapse((prevState) => !prevState);
            }}
          >
            <FontAwesomeIcon className={styles.icon} icon={faBars} />
          </div>
          <ul>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faSearch} />
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faBell} />
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faPowerOff} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!--header menu end--> */}
      {/* Mobile Navigation starts */}
      <div className={styles.mobileNav}>
        <div className={styles.navBar}>
          <div className={styles.mobileProfileImage}>
            <Image width={50} height={50} src={avatar} alt='avatar' />
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.navBtn}
            onClick={() => {
              setCollapse((prevState) => !prevState);
            }}
          />
        </div>
        <div
          className={`${collapse ? styles.active : ""} ${
            styles.mobileNavItems
          }`}
        >
          <li className={styles.item}>
            <a href='#' className={styles.menuBtn}>
              <FontAwesomeIcon className={styles.icon} icon={faDesktop} />
              <span>Dashboard</span>
            </a>
          </li>
          <li className={styles.item}>
            <DropDown
              head={
                <div className={styles.menuBtn}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faUserCircle}
                  />
                  Profile{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`${styles.icon} ${styles.dropDown}`}
                  />
                </div>
              }
            >
              <div className={styles.subMenu}>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faImage} />
                  <span>Picture</span>
                </a>
                <a href='#'>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faAddressCard}
                  />
                  <span>Info</span>
                </a>
              </div>
            </DropDown>
          </li>
          <li className={styles.item} id='messages'>
            <DropDown
              head={
                <div className={styles.menuBtn}>
                  <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                  <span>
                    Messages{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${styles.icon} ${styles.dropDown}`}
                    />
                  </span>
                </div>
              }
            >
              <div className={styles.subMenu}>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                  <span>New</span>
                </a>
                <a href='#'>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faEnvelopeSquare}
                  />
                  <span>Sent</span>
                </a>
                <a href='#'>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faExclamationCircle}
                  />
                  <span>Spam</span>
                </a>
              </div>
            </DropDown>
          </li>
          <li className={styles.item} id='settings'>
            <DropDown
              head={
                <div className={styles.menuBtn}>
                  <FontAwesomeIcon className={styles.icon} icon={faCog} />
                  <span>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faEnvelope}
                    />
                    Settings{" "}
                    <FontAwesomeIcon
                      className={`${styles.icon} ${styles.dropDown}`}
                      icon={faChevronDown}
                    />
                  </span>
                </div>
              }
            >
              <div className={styles.subMenu}>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />
                  <span>Password</span>
                </a>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faLanguage} />
                  <span>Language</span>
                </a>
              </div>
            </DropDown>
          </li>
          <li className={styles.item}>
            <a href='#' className={styles.menuBtn}>
              <FontAwesomeIcon className={styles.icon} icon={faInfoCircle} />
              <span>About</span>
            </a>
          </li>
        </div>
      </div>
      {/* Mobile Navigation ends */}
      <div className={styles.minusHeader}>
        {/* <!--sidebar start--> */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarMenu}>
            <div className={styles.profileInfo}>
              <div className={styles.profileImage}>
                <Image src={avatar} height={100} width={100} alt='' />
              </div>
              <h4>Jessica</h4>
            </div>
            <li className={styles.item}>
              <a href='#' className={styles.menuBtn}>
                <FontAwesomeIcon className={styles.icon} icon={faDesktop} />
                <span>Dashboard</span>
              </a>
            </li>
            <li className={styles.item}>
              <DropDown
                head={
                  <div className={styles.menuBtn}>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faUserCircle}
                    />
                    Profile{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${styles.icon} ${styles.dropDown}`}
                    />
                  </div>
                }
              >
                <div className={styles.subMenu}>
                  <a href='#'>
                    <FontAwesomeIcon className={styles.icon} icon={faImage} />
                    <span>Picture</span>
                  </a>
                  <a href='#'>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faAddressCard}
                    />
                    <span>Info</span>
                  </a>
                </div>
              </DropDown>
            </li>
            <li className={styles.item} id='messages'>
              <DropDown
                head={
                  <div className={styles.menuBtn}>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faEnvelope}
                    />
                    <span>
                      Messages{" "}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`${styles.icon} ${styles.dropDown}`}
                      />
                    </span>
                  </div>
                }
              >
                <div className={styles.subMenu}>
                  <a href='#'>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faEnvelope}
                    />
                    <span>New</span>
                  </a>
                  <a href='#'>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faEnvelopeSquare}
                    />
                    <span>Sent</span>
                  </a>
                  <a href='#'>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faExclamationCircle}
                    />
                    <span>Spam</span>
                  </a>
                </div>
              </DropDown>
            </li>
            <li className={styles.item} id='settings'>
              <DropDown
                head={
                  <div className={styles.menuBtn}>
                    <FontAwesomeIcon className={styles.icon} icon={faCog} />
                    <span>
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faEnvelope}
                      />
                      Settings{" "}
                      <FontAwesomeIcon
                        className={`${styles.icon} ${styles.dropDown}`}
                        icon={faChevronDown}
                      />
                    </span>
                  </div>
                }
              >
                <div className={styles.subMenu}>
                  <a href='#'>
                    <FontAwesomeIcon className={styles.icon} icon={faLock} />
                    <span>Password</span>
                  </a>
                  <a href='#'>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faLanguage}
                    />
                    <span>Language</span>
                  </a>
                </div>
              </DropDown>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.menuBtn}>
                <FontAwesomeIcon className={styles.icon} icon={faInfoCircle} />
                <span>About</span>
              </a>
            </li>
          </div>
        </div>
        {/* <!--sidebar end--> */}
        {/* <!--main container start--> */}
        <div className={styles.mainContainer}>
          <div className={styles.card}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className={styles.card}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className={styles.card}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        {/* <!--main container end--> */}
      </div>
    </div>
  );
}
