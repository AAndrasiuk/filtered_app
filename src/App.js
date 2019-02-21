import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'
import Layout from './hoc/Layout/Layout'
import Main from './hoc/Main/Main'
import ImageContainer from './Components/ImageContainer/ImageContainer'
import logo from './Img/Untitled-1.png'
import filter_pic_1 from './Img/filter_example_1.jpeg' 
import './media.css'


class App extends Component {
  state = {
    settings:{
      blur: 0,
      saturation: 100,
      brightness: 1,
      contrast: 1,
      invert: 0,
      grayscale: 0,
      sepia: 0,
      hueRotate: 0
    },
    filtersSettings:[
      {
        title:'blur',
        settings:{
          min: 0,
          max: 5,
          step: 0.1
        }
      },
      {
        title:'saturation',
        settings:{
          min: 0,
          max: 200,
          step: 1
        }
      },
      {
        title:'brightness',
        settings:{
          min: 0,
          max: 2,
          step: 0.05
        }
      },
      {
        title:'contrast',
        settings:{
          min: 0,
          max: 4,
          step: 0.05
        }
      },
      {
        title:'invert',
        settings:{
          min: 0,
          max: 1,
          step: 0.05
        }
      },
      {
        title:'grayscale',
        settings:{
          min: 0,
          max: 1,
          step: 0.05
        }
      },
      {
        title:'sepia',
        settings:{
          min: 0,
          max: 1,
          step: 0.05
        }
      },
      {
        title:'hueRotate',
        settings:{
          min: 0,
          max: 360,
          step: 2
        }
      }
    ],
    title:'Filtered',
    logoUrl:'./Img/Untitled-1.png',
    imgUrl: 'https://images.unsplash.com/photo-1546911692-38412362ebd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    filters:[
      {
        src: filter_pic_1,
        title: 'Nostalgia',
        settings:
          {
            blur: 0,
            saturation: 160,
            brightness: 0.75,
            contrast: 1.45,
            invert: 0.15
          }
      },
      {
        src: filter_pic_1,
        title: 'X-PRO 2',
        settings:
          {
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
        src: filter_pic_1,
        title: '1977',
        settings:
          {
            saturation: 120,
            contrast: 0.85,
            sepia: 0.5,
            hueRotate: 330
          }
      },
      {
        src: filter_pic_1,
        title: 'Brannan',
        settings:
          {
            contrast: 1.4,
            sepia: 0.5,
          }
      },
      {
        src: filter_pic_1,
        title: 'B&W Vision',
        settings:
          {
            invert: 1,
            grayscale: 1,
            hueRotate: 30,
            brightness: 2
          }
      }
    ]

  }

  handlerChange = event => {  
    const {name, value} = event.target
    console.log(name, " : ", value)
    const settings = {...this.state.settings, [name]: value}
    this.setState({ settings })
  }

  setDefault = event => {
    event.preventDefault()    
    const settings = {...this.state.settings, 
      blur: 0,
      saturation: 100,
      brightness: 1,
      contrast: 1,
      invert: 0,
      grayscale: 0,
      sepia: 0,
      hueRotate: 0
    }
    this.setState({ settings })
  }

  setFilter = id => {
    const filter = this.state.filters[id].settings;
    const settings = {...this.state.settings, ...filter};
    this.setState({ settings })
  }

  setUrlPic = imgUrl => {
    imgUrl !== '' && this.setState({ imgUrl })
  }

  render() {
    return (
      <Layout>
        <Header 
          src={logo}
          title={this.state.title}
        />
        <Main>
        <Aside
            settings={this.state.settings}
            handlerChange={this.handlerChange}
            setDefault={this.setDefault}
            filters={this.state.filters}
            setFilter={this.setFilter}
            filtersSettings={this.state.filtersSettings}
          />
          <ImageContainer 
            setUrlPic={this.setUrlPic}
            settings={this.state.settings}
            imgUrl={this.state.imgUrl}
          />
        </Main>
      </Layout>
    )
  }
}

export default App;
