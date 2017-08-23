/* eslint-disable */
import React, { Component } from 'react';
import SalesByMonthCardContainer from './containers/SalesByMonthCardContainer'
import NewFormContainer from './containers/NewFormContainer'
import OverviewSection from './components/OverviewSection'
import mock from './business_overview_expanded.png';
import logo from './assets/logo.png';
import plus from './assets/plus_icon.png';
import graph from './assets/graph.png';
import sparkLine from './assets/spark_line.png';
import './App.css';

const style = {
  dashboard: {
    position: 'relative',
    top: '-1px',
    display: 'inline-block',
    padding: '10px 32px',
    fontSize: '13px',
    fontWeight: 'bolder',
    letterSpacing: '0.73px',
    border: 'solid 1px #c9c9c9',
    borderBottom: '1px solid #ffffff',
    borderRadius: '3px 3px 0px 0px',
    transform: 'scaleY(1.10)',
    backgroundColor: 'white',
  },
  li: {
    display: 'inline-block',
    padding: '11px 24px',
    fontSize: '13px',
    fontWeight: 'bolder',
    letterSpacing: '0.73px',
    color: 'rgb(125, 158, 141)',
  },
  nav: {
    li: {
      padding: '15px',
      display: 'inline-block',
      fontSize: '15px',
    },
  },
};

class App extends Component {
  render() {
    return (
      <div className="App" style={{
        background: '#ecf7f2',
        position: 'absolute',
        top: '0px',
        width: '100vw',
        height: '100vh'
      }}>
        <div className="App-header">
          <img src={logo} style={{position: 'absolute', top: '10px', left: '14px'}}/>
        </div>
        <div>
          <div style={{
            position: 'relative',
            float: 'right',
          }}>
            <ul style={{
              margin: '25px 0px -1px 0px',
              padding: '0',
              borderTop: '1px solid rgb(220, 231, 234)',
              borderBottom: '1px solid #c9c9c9',
              background: 'linear-gradient(to bottom, white 50%, #ebf0ee 100%)',
            }}>
              <li style={style.dashboard}>Dashboard</li>
              <li style={style.li}>Sign In</li>
              <li style={style.li}>Classes</li>
              <li style={style.li}>Workshops</li>
              <li style={style.li}>Appointments</li>
              <li style={style.li}>Client Home</li>
              <li style={Object.assign({}, style.li, {marginRight: '10px'})}>Retail</li>
            </ul>
          </div>
        </div>
        <div style={{
          clear: 'right',
          paddingLeft: '35px',
          backgroundColor: '#ffffff',
          borderTop: '1px solid rgb(220, 231, 234)',
          borderBottom: '1px solid #c9c9c9',
        }}>
          <ul style={{margin: '0'}}>
            <li style={style.nav.li}>Dashboard</li>
            <li style={Object.assign({}, style.nav.li, {fontWeight: 'bolder'})}>
              Bussiness Overview
            </li>
            <li style={style.nav.li}>Schedule</li>
            <li style={style.nav.li}>Reports</li>
          </ul>
        </div>
        <div style={{
          background: 'linear-gradient(to right, #dfdfd5 0%,#f4f4ee 10%, #f4f4ee 90%,#dfdfd5 100%)',
        }}>
        <div style={{margin: '0 57px 0 87px', paddingTop: '25px', display: 'inline-block'}}>
          <div style={{
            display: 'inline-block',
            padding: '18px 22px 13px 23px',
            border: '1px solid #9cbc88',
            borderRadius: '5px',
            backgroundImage: 'linear-gradient(#bbd69f 0%, #9cc087 100%)',
            boxShadow: 'inset 0px 1px 0px 0px #d6f3ba',
          }}>
          <img src={plus} />
          </div>
            <p style={{
              fontSize: '11px',
              textAlign: 'center',
              marginTop: '3px',
            }}>New Program</p>
          </div>

          <div style={{
            display: 'inline-block',
            verticalAlign: 'top',
            padding: '0 10px',
            width: '70%',
          }}>

            <NewFormContainer />
            <SalesByMonthCardContainer />
            <OverviewSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
