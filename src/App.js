import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'
import Image from './Components/Image/Image'
import Layout from './Components/Layout/Layout'
import Main from './Components/Main/Main'
import ImageContainer from './Components/ImageContainer/ImageContainer'
import logo from './Img/Untitled-1.png'
import filter_pic_1 from './Img/filter_example_1.jpeg' 
import InputWrapper from './Components/InputWrapper/InputWrapper'


class App extends Component {
  state = {
    settings:{
      blur: 0,
      saturation: 100,
      brightness: 1,
      contrast: 1,
      invert: 0,
      grayscale: 0
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
        title: 'Can',
        settings:
          {
            blur: 0,
            saturation: 50,
            brightness: 0.5,
            contrast: 1.85,
            invert: 1
          }
      }
    ]

  }

  handlerChange = event => {  
    const {name, value} = event.target
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
      grayscale: 0
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
          <ImageContainer>
            <InputWrapper
               setUrlPic={this.setUrlPic}
            />
            <Image 
              settings={this.state.settings}
              src={this.state.imgUrl}
            />
          </ImageContainer>
        </Main>
      </Layout>
    )
  }
}

export default App;
