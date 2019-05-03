import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Aside from "./Components/Aside/Aside";
import Layout from "./hoc/Layout/Layout";
import Main from "./hoc/Main/Main";
import ImageContainer from "./Components/ImageContainer/ImageContainer";

import logo from "./Img/Untitled-1.png";
import nostalgiaSm from "./Img/presets/nostalgia.jpg";
import xpro2Sm from "./Img/presets/xPro2.jpg";
import _1997Sm from "./Img/presets/1977.jpg";
import brannanSm from "./Img/presets/brannan.jpg";
import bwVisionSm from "./Img/presets/bwVision.jpg";

import "./media.css";

class App extends Component {
   state = {
      settings: {
         blur: 0,
         saturation: 100,
         brightness: 1,
         contrast: 1,
         invert: 0,
         grayscale: 0,
         sepia: 0,
         hueRotate: 0
      },
      defaultSettings: {
         blur: 0,
         saturation: 100,
         brightness: 1,
         contrast: 1,
         invert: 0,
         grayscale: 0,
         sepia: 0,
         hueRotate: 0
      },
      filtersSettings: [
         {
            title: "blur",
            settings: {
               min: 0,
               max: 5,
               step: 0.1
            }
         },
         {
            title: "saturation",
            settings: {
               min: 0,
               max: 200,
               step: 1
            }
         },
         {
            title: "brightness",
            settings: {
               min: 0,
               max: 2,
               step: 0.05
            }
         },
         {
            title: "contrast",
            settings: {
               min: 0,
               max: 4,
               step: 0.05
            }
         },
         {
            title: "invert",
            settings: {
               min: 0,
               max: 1,
               step: 0.05
            }
         },
         {
            title: "grayscale",
            settings: {
               min: 0,
               max: 1,
               step: 0.05
            }
         },
         {
            title: "sepia",
            settings: {
               min: 0,
               max: 1,
               step: 0.05
            }
         },
         {
            title: "hueRotate",
            settings: {
               min: 0,
               max: 360,
               step: 2
            }
         }
      ],
      title: "Filtered",
      logoUrl: "./Img/Untitled-1.png",
      imgUrl:
         "https://images.unsplash.com/photo-1546911692-38412362ebd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      presets: [
         {
            src: nostalgiaSm,
            title: "Nostalgia",
            settings: {
               blur: 0,
               saturation: 160,
               brightness: 0.75,
               contrast: 1.45,
               invert: 0.15
            }
         },
         {
            src: xpro2Sm,
            title: "X-PRO 2",
            settings: {
               blur: 0,
               saturation: 150,
               brightness: 0.8,
               contrast: 1.3,
               invert: 0,
               sepia: 0.3,
               hueRotate: 340
            }
         },
         {
            src: _1997Sm,
            title: "1977",
            settings: {
               saturation: 120,
               contrast: 0.85,
               sepia: 0.5,
               hueRotate: 330
            }
         },
         {
            src: brannanSm,
            title: "Brannan",
            settings: {
               contrast: 1.4,
               sepia: 0.5
            }
         },
         {
            src: bwVisionSm,
            title: "B&W Vision",
            settings: {
               invert: 1,
               grayscale: 1,
               hueRotate: 30,
               brightness: 2
            }
         }
      ]
   };

   changeHandler = event => {
      const { name, value } = event.target;
      const settings = { ...this.state.settings, [name]: value };
      this.setState({ settings });
   };

   setDefault = event => {
      event.preventDefault();
      this.setState({ settings: this.state.defaultSettings });
   };

   setPreset = id => {
      const filter = this.state.presets[id].settings;
      const settings = { ...this.state.defaultSettings, ...filter };
      this.setState({ settings });
   };

   setUrlPic = imgUrl => {
      imgUrl !== "" && this.setState({ imgUrl });
   };

   render() {
      return (
         <Layout>
            <Header src={logo} title={this.state.title} />
            <Main>
               <Aside
                  settings={this.state.settings}
                  changeHandler={this.changeHandler}
                  setDefault={this.setDefault}
                  presets={this.state.presets}
                  setPreset={this.setPreset}
                  filtersSettings={this.state.filtersSettings}
               />
               <ImageContainer
                  setUrlPic={this.setUrlPic}
                  settings={this.state.settings}
                  imgUrl={this.state.imgUrl}
               />
            </Main>
         </Layout>
      );
   }
}

export default App;
