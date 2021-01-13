import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from '../common/Dropdown/Dropdown';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './NavbarStyles';

function Navbar(props) {
  const { classes } = props;

  const activeLine = useRef(null);

  function handleNavLinkClick(e) {
    let el;
    if (e) {
      el = e.currentTarget;
      activeLine.current.style.transition =
        'all .3s cubic-bezier(0,.54,.47,.99)';
    } else {
      el = document.querySelector('.nav-link.active');
    }
    let width = el.clientWidth;
    let x = el.offsetLeft;
    activeLine.current.style.opacity = '1';
    activeLine.current.style.width = `${width * 1.2}px`;
    activeLine.current.style.left = `${x - width * 0.1}px`;
  }

  useEffect(() => {
    handleNavLinkClick();
  });

  return (
    <div className={classes.root}>
      <div className={classes.options}>
        <Dropdown />
      </div>
      <div className={classes.list}>
        <NavLink
          exact
          onClick={handleNavLinkClick}
          to="/"
          activeClassName="active"
          className={`nav-link ${classes.listItem}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <defs>
              <clipPath id="a">
                <path
                  d="M9,0A9,9,0,1,1,0,9,9,9,0,0,1,9,0Z"
                  transform="translate(502 20)"
                  fill="#14aa52"
                />
              </clipPath>
            </defs>
            <g transform="translate(-504 -21)">
              <path
                className="circle"
                d="M9,0A9,9,0,1,1,0,9,9,9,0,0,1,9,0Z"
                transform="translate(504 21)"
                fill="#14aa52"
              />
              <circle
                cx="9"
                cy="9"
                r="9"
                transform="translate(504 21)"
                fill="none"
              />
              <circle
                cx="9"
                cy="9"
                r="9"
                transform="translate(504 21)"
                fill="none"
              />
              <g transform="translate(2 1)" clipPath="url(#a)">
                <g transform="translate(498.85 17.2)" fill="none">
                  <path
                    d="M11.488,1.529a.5.5,0,0,1,.955,0l1.982,6.348a.5.5,0,0,0,.494.351l7.117-.24a.5.5,0,0,1,.278.926L16.489,12.48a.5.5,0,0,0-.2.613l2.436,6.063a.5.5,0,0,1-.755.593l-5.711-4.084a.5.5,0,0,0-.582,0L5.964,19.748a.5.5,0,0,1-.755-.593l2.436-6.063a.5.5,0,0,0-.2-.613L1.617,8.914A.5.5,0,0,1,1.9,7.988l7.117.24a.5.5,0,0,0,.494-.351Z"
                    stroke="none"
                  />
                  <path
                    d="M 11.96549987792969 5.872179985046387 L 11.17688941955566 8.39814281463623 C 10.88193988800049 9.342872619628906 10.01887989044189 9.97761344909668 9.029270172119141 9.97761344909668 C 9.004149436950684 9.97761344909668 8.978940010070801 9.97718334197998 8.953410148620605 9.976332664489746 L 6.574043273925781 9.896223068237305 L 8.356100082397461 10.98707294464111 C 9.296090126037598 11.5624532699585 9.680109977722168 12.72231292724609 9.269189834594727 13.74500274658203 L 8.429879188537598 15.83373737335205 L 10.65664005279541 14.24140357971191 C 11.04070949554443 13.9667329788208 11.49329948425293 13.82154273986816 11.96549987792969 13.82154273986816 C 12.43764972686768 13.82154273986816 12.89021968841553 13.96671295166016 13.27425956726074 14.24134254455566 L 15.50112342834473 15.83374691009521 L 14.66179943084717 13.74497318267822 C 14.25088977813721 12.72231292724609 14.63490962982178 11.5624532699585 15.57487964630127 10.98707294464111 L 17.35694122314453 9.896220207214355 L 14.97721004486084 9.976343154907227 C 14.95193958282471 9.977192878723145 14.92689990997314 9.97761344909668 14.90172958374023 9.97761344909668 C 13.91215991973877 9.97761344909668 13.04910945892334 9.342903137207031 12.75411033630371 8.39814281463623 L 11.96549987792969 5.872179985046387 M 11.96549987792969 1.177770614624023 C 12.16761207580566 1.177770614624023 12.36972522735596 1.294767379760742 12.44277954101563 1.528762817382813 L 14.42459011077881 7.876612663269043 C 14.48994541168213 8.085936546325684 14.68375110626221 8.227608680725098 14.90173435211182 8.227608680725098 C 14.90738487243652 8.227608680725098 14.91301822662354 8.227514266967773 14.91870021820068 8.227323532104492 L 22.03586959838867 7.987692832946777 C 22.04232406616211 7.987475395202637 22.04878425598145 7.987367630004883 22.05513954162598 7.987367630004883 C 22.55429649353027 7.987319946289063 22.7463321685791 8.649054527282715 22.31373977661133 8.913852691650391 L 16.48852920532227 12.47964286804199 C 16.28039932250977 12.60704326629639 16.19463920593262 12.8660831451416 16.28561973571777 13.09251308441162 L 18.72183036804199 19.15535354614258 C 18.86550140380859 19.51290321350098 18.5808162689209 19.84443855285645 18.25654983520508 19.84443855285645 C 18.16013717651367 19.84443855285645 18.06023597717285 19.81513595581055 17.967041015625 19.74849319458008 L 12.25634002685547 15.66483306884766 C 12.16936492919922 15.60263824462891 12.06743240356445 15.57154083251953 11.96549987792969 15.57154083251953 C 11.86356735229492 15.57154083251953 11.76163482666016 15.60263824462891 11.67465972900391 15.66483306884766 L 5.963949203491211 19.74849319458008 C 5.870780944824219 19.81511878967285 5.770830154418945 19.84443855285645 5.674440383911133 19.84443855285645 C 5.350149154663086 19.84443855285645 5.065486907958984 19.51293754577637 5.209169387817383 19.15535354614258 L 7.645380020141602 13.09251308441162 C 7.736360549926758 12.8660831451416 7.650600433349609 12.60704326629639 7.442470550537109 12.47964286804199 L 1.617259979248047 8.913863182067871 C 1.184694290161133 8.64907169342041 1.376781463623047 7.987411499023438 1.875869750976563 7.987367630004883 C 1.882255554199219 7.987366676330566 1.888643264770508 7.98747444152832 1.895130157470703 7.987692832946777 L 9.012299537658691 8.227323532104492 C 9.01796817779541 8.227514266967773 9.023629188537598 8.227608680725098 9.029266357421875 8.227608680725098 C 9.24726676940918 8.227608680725098 9.441049575805664 8.085959434509277 9.506409645080566 7.876612663269043 L 11.48822021484375 1.528762817382813 C 11.56127452850342 1.294767379760742 11.76338768005371 1.177770614624023 11.96549987792969 1.177770614624023 Z"
                    stroke="none"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
          </svg>
          <p text="Feedback">Feedback</p>
        </NavLink>
        <NavLink
          exact
          onClick={handleNavLinkClick}
          to="/feedbackData"
          activeClassName="active"
          className={`nav-link ${classes.listItem}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <defs>
              <clipPath id="abc">
                <circle cx="9" cy="9" r="9" fill="#89989b" />
              </clipPath>
            </defs>
            <g transform="translate(-662 -19)">
              <circle
                className="circle"
                cx="9"
                cy="9"
                r="9"
                transform="translate(662 19)"
                fill="#89989b"
              />
              <g transform="translate(662 19)" clipPath="url(#abc)">
                <path
                  d="M-610.652,215.9l6.256-6.442a1.015,1.015,0,0,1,.864-.38,2.527,2.527,0,0,1,1.016.785l2.109,2.378s.235.3.507.263.582-.421.582-.421l6.649-6.911"
                  transform="translate(610.065 -203.217)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <line
                  x2="17.1"
                  transform="translate(0.45 14.4)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
              </g>
            </g>
          </svg>
          <p text="Feedback data">Feedback data</p>
        </NavLink>
        <NavLink
          exact
          onClick={handleNavLinkClick}
          to="/feedbackSettings"
          activeClassName="active"
          className={`nav-link ${classes.listItem}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <g transform="translate(-825 -21)">
              <g transform="translate(825 21)">
                <circle
                  className="circle"
                  cx="9"
                  cy="9"
                  r="9"
                  transform="translate(0 0)"
                  fill="#89989b"
                />
              </g>
              <g transform="translate(825.188 23.6)">
                <path
                  d="M19.7,6.835H16.2a2.92,2.92,0,0,0-5.722,0H3.036L2.521,8h7.961A2.92,2.92,0,0,0,16.2,8h3.835ZM13.342,9.17a1.751,1.751,0,1,1,1.751-1.751A1.72,1.72,0,0,1,13.342,9.17Z"
                  transform="translate(-2.521 -4.5)"
                  fill="#fff"
                />
                <path
                  d="M1.145,23.753h3.5a2.92,2.92,0,0,0,5.722,0h6.954l.581-1.168H10.365a2.92,2.92,0,0,0-5.722,0H.672ZM7.5,21.418a1.751,1.751,0,1,1-1.751,1.751A1.72,1.72,0,0,1,7.5,21.418Z"
                  transform="translate(-0.521 -13.143)"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>
          <p text="Feedback settings">Feedback settings</p>
        </NavLink>

        <span
          ref={activeLine}
          className={`active-line ${classes.activeLine}`}
        ></span>
      </div>
      <div className={classes.info}>
        <p className={classes.infoNotifications}>
          Notifications <span>2</span>
        </p>
        <div className={classes.infoDropdown}>
          <p>Max</p>
          <i className="icon-caret-down"></i>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Navbar);
