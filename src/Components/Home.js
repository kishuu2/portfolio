import React, { useState } from 'react';
import "../Styles/style.css";

import cv from "../images/chokwalakishan.pdf";
import one from "../images/one.jpg";
import two from "../images/netflix.PNG"
import two2 from "../images/netflix2.png"
import two3 from "../images/netflix3.png"
import three from "../images/ecom.PNG"
import three2 from "../images/ecom2.PNG"
import three3 from "../images/ecom3.PNG"

import four from "../images/wallpaper.PNG"
import four2 from "../images/wallpaper2.PNG"
import four3 from "../images/wallpaper3.PNG"

import five from "../images/weather.PNG"
import five2 from "../images/weather2.PNG"
import five3 from "../images/weather3.PNG"

import six from "../images/space.PNG"
import six2 from "../images/space2.PNG"
import six3 from "../images/space3.PNG"

import seven from "../images/tourism.PNG"
import seven2 from "../images/tourism2.PNG"
import seven3 from "../images/tourism3.PNG"

import eight from "../images/furniture.PNG"
import eight2 from "../images/furniture2.PNG"
import eight3 from "../images/furniture3.PNG"

import nine from "../images/coffe.PNG"
import nine2 from "../images/coffe2.PNG"
import nine3 from "../images/coffe3.PNG"

import ten from "../images/Home.PNG"
import ten2 from "../images/quiz.PNG"
import ten3 from "../images/quiz2.PNG"

export default function Home() {

  const [modalImages, setModalImages] = useState([]);
  const openModal = (images) => {
    setModalImages(images);
  };
  const projects = [
    {
      title: "Netflix Clone",
      images: [two,two2, two3],
    },
    {
      title: "E-Commerce",
      images: [three, three2, three3],
    },
    {
      title: "Wallpaper Download",
      images: [four, four2, four3],
    },
    {
      title: "Weather Dashboard",
      images: [five, five2, five3],
    }, {
      title: "Space Website",
      images: [six, six2, six3],
    }, {
      title: "Tourism site",
      images: [seven, seven2, seven3],
    }, {
      title: "Furniture website",
      images: [eight, eight2, eight3],
    }, {
      title: "Caffe site",
      images: [nine, nine2, nine3],
    }, {
      title: "Quiz Web Application",
      images: [ten, ten2, ten3],
    },
  ];

  return (
    <>
      <div id='accordian'>

        <div className="sidebar p-2">
          <a href='#About' className='btn2 d-flex' data-bs-toggle='collapse'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
              <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
            </svg> <span>About Me</span>
          </a>

          <a href="#Skill" className='btn2 collapsed d-flex' data-bs-toggle='collapse'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16">
              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
            </svg><span>Skills</span>
          </a>

          <a href="#Project" className='collapsed btn2 d-flex' data-bs-toggle='collapse'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-collection" viewBox="0 0 16 16">
            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z" />
          </svg><span>Projects</span>
          </a>

          <a href="#Education" data-bs-toggle='collapse' className='collapsed btn2 d-flex'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
          </svg><span>Education</span>
          </a>

          <a href="#Contact" data-bs-toggle='collapse' className='collapsed btn2 d-flex'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg><span>Contact</span>
          </a>
        </div>

        <div className="content p-2">
          <div className='w-100 home-grid'>

            <div className="profile-card" id='pr2'>
              <div className="card text-center">
                <div className="card-body">
                  <img src={one} alt="Profile" className='img-fluid mx-auto d-block' />
                  <br />
                  <h3><strong>Kishan Chokwala</strong></h3>
                  <p className='text-secondary'>Full Stack Developer</p>

                  <div className="d-flex gap-4 two p-2">
                    <a href="https://www.facebook.com/Kishuu2/" className='social'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg></a>

                    <a href="https://x.com/Kishuu_2" className='social'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="lightskyblue" className="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </a>

                    <a href="https://www.instagram.com/kishuu_2/" className='social'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orangered" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </a>

                    <a href="https://github.com/kishuu2" className='social'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  </div>

                </div>
              </div>
            </div>

            <div className=''>

              <div id='About' className='collapse show About' data-bs-parent='#accordian'>
                <strong className='text-danger'>About Me</strong>
                <h1>World leading Full Stack Developer</h1>
                <br />
                <p>A passionate UI/UX Designer and Web Developer based in VNSGU, Surat</p>
                <br />
                <p className='text-secondary'>Hii! My name is chokwala kishan. I am Full stack developer and I'm very passionate and dedicated to my work.
                  i have acquired the skills and knowledge necessary to make your project a success.</p>

                <br />

                <a href={cv} className="btn btn-danger" download={cv} id='btn' type="button">Download CV</a>
                <br />
                <br />
                <div className="w-100">
                  <div className="card text-white bg-danger">
                    <div className="card-body">
                      <div className="start">
                        <span>Name: </span><br />
                        <span>Chokwala Kishan Pradipkumar</span>
                        <br /><br />
                        <span>Birthday: </span><br />
                        <span>02-November-2004</span>
                        <br /><br />
                        <span>Mobile number: </span><br />
                        <span>+916351119763</span>
                        <br /><br />
                        <span>E-mail: </span><br />
                        <span>chokwalakishan@gmail.com</span>
                        <br /><br />
                        <span>Address: </span><br />
                        <span>603-U, Suman sagar, Vesu, Surat</span>
                        <br /><br />
                        <span>Nationality: </span><br />
                        <span>Indian</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div id='Skill' className='collapse About' data-bs-parent='#accordian'>
                <strong className='text-danger'>My Skills</strong>
                <br /><br />
                <p>Personal Skills</p>

                <div className="some w-100 ">

                  <div className="card skill-one bg-dark text-light">
                    <h4>Communication</h4>
                    <div className="progress">
                      <div className="progress-value text-center p-1"><strong>68%</strong></div>
                    </div>
                  </div>

                  <div className="card skill-one bg-dark text-light">
                    <h4>Teamwork</h4>
                    <div className="progress">
                      <div className="progress-value1 text-center p-1"><strong>86%</strong></div>
                    </div>
                  </div>

                  <div className="card skill-one bg-dark text-light">
                    <h4>Self Motivated</h4>
                    <div className="progress">
                      <div className="progress-value2 text-center p-1"><strong>75%</strong></div>
                    </div>
                  </div>

                </div>
                <br /><br />
                <p>Proffesional Skills</p>
                <div id='accordian2'>
                  <div className="skills-pr w-100">
                    <a href='#web' className='btn btn5' data-bs-toggle='collapse'>Web Development</a>
                    <a href='#lang' className='btn btn5' data-bs-toggle='collapse'>Languages</a>
                    <a href='#database' className='btn btn5' data-bs-toggle='collapse'>Database</a>
                    <a href='#other' className='btn btn5' data-bs-toggle='collapse'>Other Skills</a>
                  </div>

                  <br />

                  <div className="collapse show" id='web' data-bs-parent='#accordian2'>
                    <p>* Frontend Langugae and Framework</p>
                    <div className="some2">

                      <div className="card skill-one bg-dark text-light">
                        <h4>HTML5</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1"><strong>90%</strong></div>
                        </div>
                      </div>

                      <div className="card skill-one bg-dark text-light">
                        <h4>CSS3</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1" id='web2'><strong>71%</strong></div>
                        </div>
                      </div>

                      <div className="card skill-one bg-dark text-light">
                        <h4>Javascript</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1" id='web3'><strong>70%</strong></div>
                        </div>
                      </div>

                      <div className="card skill-one bg-dark text-light">
                        <h4>Bootstrap 5.0.0</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1" id='web4'><strong>74%</strong></div>
                        </div>
                      </div>

                      <div className="card skill-one bg-dark text-light">
                        <h4>React JS</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1" id='web4'><strong>74%</strong></div>
                        </div>
                      </div>

                    </div>
                    <br />

                  </div>

                  <div className="collapse" id='lang' data-bs-parent='#accordian2'>
                    <p>* Other Langugaes</p>

                    <div className="some2">

                      <div className="card skill-one bg-dark text-light">
                        <h4>NodeJs</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1" id='lang1'><strong>60%</strong></div>
                        </div>
                      </div>

                      <div className="card skill-one bg-dark text-light">
                        <h4>PHP</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1" id='lang2'><strong>78%</strong></div>
                        </div>
                      </div>

                      <div className="card skill-one bg-dark text-light">
                        <h4>Python</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1" id='web3'><strong>70%</strong></div>
                        </div>
                      </div>

                      <div className="card skill-one bg-dark text-light">
                        <h4>C/C++</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1" id='web5'><strong>65%</strong></div>
                        </div>
                      </div>
                    </div>
                    <br />

                  </div>

                  <div className="collapse" id='database' data-bs-parent='#accordian2'>
                    <p>* Database Skills</p>
                    <div className="some2">

                      <div className="card skill-one bg-dark text-light">
                        <h4>SQlite</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1" id='lang1'><strong>60%</strong></div>
                        </div>
                      </div>

                      <div className="card skill-one bg-dark text-light">
                        <h4>mysql</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1" id='lang2'><strong>78%</strong></div>
                        </div>
                      </div>

                      <div className="card skill-one bg-dark text-light">
                        <h4>MongoDB</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1" id='web3'><strong>70%</strong></div>
                        </div>
                      </div>

                      <div className="card skill-one bg-dark text-light">
                        <h4>Microsoft Access</h4>
                        <div className="progress">
                          <div className="web-value text-center p-1" id='web5'><strong>65%</strong></div>
                        </div>
                      </div>
                    </div>
                    <br />

                  </div>

                  <div className="collapse p-3" id='other' data-bs-parent='#accordian2'>
                    <div className="some2 row w-100">

                      <div className="card skill-one1 col-md bg-dark text-light">
                        <h4 className='text-secondary '>Swimming</h4>
                      </div>

                      <div className="card skill-one1 col-md bg-dark text-light">
                        <h4 className='text-secondary '>Reading</h4>
                      </div>

                      <div className="card skill-one1 col-md bg-dark text-light">
                        <h4 className='text-secondary '>About Facts</h4>
                      </div>

                      <div className="card skill-one1 col-md bg-dark text-light">
                        <h4 className='text-secondary '>Microsoft 365</h4>
                      </div>

                      <div className="card skill-one1 col-md bg-dark text-light" id='inter'>
                        <h4 className='text-secondary'>Internet Serfering</h4>
                      </div>
                    </div>
                    <br />

                  </div>

                </div>
              </div>

              <div id='Project' className='collapse ' data-bs-parent='#accordian'>
                <strong className='text-danger'>My Projects</strong>
                <br /><br />
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {projects.map((project, index) => (
                      <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                        <p>{project.title}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore magnam quisquam alias inventore repellat quod iure dolores.</p>
                        {/* Button to open modal with multiple images */}
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          onClick={() => openModal(project.images)}
                        >
                          View Screenshots
                        </button>
                        <br />
                        <br />
                        <img src={project.images[0]} alt={project.title} className="d-block img-fluid mx-auto" />
                      </div>
                    ))}
                  </div>

                  {/* Carousel Indicators */}
                  <div className="carousel-indicators">
                    {projects.map((_, index) => (
                      <button key={index} type="button" data-bs-target="#demo" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id='Education' className='collapse Education' data-bs-parent='#accordian'>
              <strong className='text-danger'>My Education</strong>
              <br /><br />
              <div className="edu d-flex gap-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="orangered" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5z" />
                  </svg>
                </div>
                <div>
                  <h4><strong>Education</strong></h4>
                </div>
              </div>
              <br />

              <div>
                <div className="edu-head">
                  <div className="first-edu">
                    <h5>Bachelor of Computer Applications</h5>
                    <p className='text-secondary'>Veer Narmad South Gujarat Univercity</p>
                  </div>
                  <div className="year">
                    <div className='first-year'>
                      <p className='text-danger'>2025-26</p>
                    </div>
                  </div>
                </div>


                <br />
                <p className='text-secondary'>The goal of Bachelor of Computer Applications is to understand the principles of intelligence with the hope that this will lead to beter comprehension.</p>
                <div className='d-flex gap-2'>
                  <div className="spinner-grow text-danger spinner-grow-sm"></div><span>Running </span></div>
              </div>
              <br /><br />
              <div>
                <div className="edu-head">
                  <div className="first-edu">
                    <h5>12 Commerce</h5>
                    <p className='text-secondary'>Navdeep Vidhyalaya</p>
                  </div>
                  <div className="year">
                    <div className='first-year'>
                      <p className='text-danger'>2021-22</p>
                    </div>
                  </div>
                </div>
                <br />
                <p className='text-secondary'>The goal of Commerce Filed is to understand the principles of intelligence with the hope that this will lead to beter comprehension.</p>
              </div>
              <br /><br />
              <div className="edu d-flex gap-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="orangered" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5z" />
                  </svg>
                </div>
                <div>
                  <h4><strong>Certificates</strong></h4><br />
                  <div className="first">
                    <h5>Course on Computer Concepts (CCC)</h5>
                  </div>
                </div>
              </div>
            </div>

            <div id='Contact' className='collapse' data-bs-parent='#accordian'>
              <strong className='text-danger'>Contact Me</strong>
              <br />
              <h1><strong>Contact me to get your <br /> work done</strong></h1>
              <br />
              <br />
              <div className="info">
                <div className="section-info d-flex gap-3">
                  <div className="icon">
                    <div className="round">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className="bi bi-phone" viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                      </svg>
                    </div>
                  </div>
                  <div className="first-icon">
                    <span>Call Me</span>
                    <br />
                    +916351119763
                  </div>
                </div>
                <br />
                <div className="section-info d-flex gap-3">
                  <div className="icon">
                    <div className="round">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="first-icon">
                    <span>Email Us</span>
                    <br />
                    chokwalakishan@gmail.com
                  </div>
                </div>
                <br />
                <div className="section-info d-flex gap-3">
                  <div className="icon">
                    <div className="round">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                    </div>
                  </div>
                  <div className="first-icon">
                    <span>Address</span>
                    <br />
                    603-U, Suman sagar, Vesu, Surat
                  </div>
                </div>
              </div>

              <br />
            </div>
          </div>

        </div><br />
        <div className="profile-card" id='pr'>
          <div className="card text-center">
            <div className="card-body">
              <img src={one} alt="Profile" className='img-fluid mx-auto d-block' />
              <br />
              <h3><strong>Kishan Chokwala</strong></h3>
              <p className='text-secondary'>Full Stack Developer</p>

              <div className="d-flex gap-4 two p-2">
                <a href="https://www.facebook.com/Kishuu2/" className='social'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg></a>

                <a href="https://x.com/Kishuu_2" className='social'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="lightskyblue" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>

                <a href="https://www.instagram.com/kishuu_2/" className='social'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orangered" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>

                <a href="https://github.com/kishuu2" className='social'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content bg-dark">

            <div className="modal-header">
              <h4 className="modal-title">View Screen Shot</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              {modalImages.length > 0 ? (
                modalImages.map((img, index) => (
                  <img key={index} src={img} alt="Screenshot" className="img-fluid mb-2" />
                ))
              ) : (
                <p>No Images</p>
              )}
            </div>

            <div className="modal-footer">
              <a href="tel:+916351119763" className='btn btn-outline-primary w-100'>Contact me if more image need</a><br/>
              <button type="button" className="btn btn-danger w-100" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
