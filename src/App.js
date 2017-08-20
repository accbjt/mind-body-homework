/* eslint-disable */
import React, { Component } from 'react';
import mock from './business_overview.png';
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
          {/* <img src={mock} /> */}
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
            <li style={style.nav.li}>Bussiness Overview</li>
            <li style={style.nav.li}>Schedule</li>
            <li style={style.nav.li}>Reports</li>
          </ul>
        </div>
        <div style={{
          height: '100%',
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
          }}>
            <div style={{
              display: 'inline-block',
              width: '242px',
              padding: '18px 0px 0px',
              background: 'white',
              margin: '24px 20px 0px 0px',
              verticalAlign: 'top',
              border: '1px solid #cdccbc',
              borderRadius: '4px',
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '0 20px',
              }}>
                <span>Yoga Classes</span>
                <div style={{
                  float: 'right',
                  width: '20px',
                  height: '20px',
                  border: '1px solid rgba(128, 128, 128, 0.24)',
                  borderRadius: '4px',
                  padding: '2px 0px 0px 2px',
                }}>
                  <div className='pencil'></div>
                </div>
              </div>
              <p style={{
                fontSize: '10px',
                margin: '15px 0 0 0',
                padding: '0 20px',
              }}>Sales by month</p>
              <img style={{
                padding: '0 20px',
                marginBottom: '4px',
              }} src={graph} />
              <div style={{
                padding: '0 20px',
                background: '#fbfbf6',
                borderTop: '1px solid rgb(246, 246, 238)',
                borderBottom: '1px solid rgb(246, 246, 238)',
                color: 'rgb(181, 181, 170)',
              }}>
                <div style={{
                  padding: '4px 0px',
                  display: 'inline-block',
                  marginRight: '34px',
                }}>
                  <p style={{
                    fontSize: '8px',
                    margin: '8px 0 1px',
                  }}>Total Monthly</p>
                  <p style={{
                    fontSize: '10px',
                    margin: '0',
                  }}>Sales</p>
                </div>
                <div style={{
                  padding: '4px 0px',
                  display: 'inline-block',
                  marginRight: '16px',
                }}>
                  <p style={{
                    fontSize: '8px',
                    margin: '8px 0 1px',
                  }}>Current</p>
                  <p style={{
                    fontSize: '10px',
                    margin: '0',
                  }}>$23,483</p>
                </div>
                <div style={{
                  padding: '2px 0px',
                  display: 'inline-block',
                  verticalAlign: 'top',
                }}>
                  <p style={{
                    fontSize: '8px',
                    margin: '8px 0px -1px',
                  }}>Total Monthly</p>
                  <img src={sparkLine} />
                </div>
                <p style={{
                  fontSize: '10px',
                  margin: '5px -2px',
                }}>more</p>
              </div>
            </div>

            <div style={{
              display: 'inline-block',
              width: '242px',
              padding: '18px 0px 0px',
              background: 'white',
              margin: '24px 20px 0px 0px',
              verticalAlign: 'top',
              border: '1px solid #cdccbc',
              borderRadius: '4px',
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '0 20px',
              }}>
                <span>Yoga Privates</span>
                <div style={{
                  float: 'right',
                  width: '20px',
                  height: '20px',
                  border: '1px solid rgba(128, 128, 128, 0.24)',
                  borderRadius: '4px',
                  padding: '2px 0px 0px 2px',
                }}>
                  <div className='pencil'></div>
                </div>
              </div>
              <p style={{
                fontSize: '10px',
                margin: '15px 0 0 0',
                padding: '0 20px',
              }}>Sales by month</p>
              <img style={{
                padding: '0 20px',
                marginBottom: '4px',
              }} src={graph} />
              <div style={{
                padding: '0 20px',
                background: '#fbfbf6',
                borderTop: '1px solid rgb(246, 246, 238)',
                borderBottom: '1px solid rgb(246, 246, 238)',
                color: 'rgb(181, 181, 170)',
              }}>
                <div style={{
                  padding: '4px 0px',
                  display: 'inline-block',
                  marginRight: '34px',
                }}>
                  <p style={{
                    fontSize: '8px',
                    margin: '8px 0 1px',
                  }}>Total Monthly</p>
                  <p style={{
                    fontSize: '10px',
                    margin: '0',
                  }}>Sales</p>
                </div>
                <div style={{
                  padding: '4px 0px',
                  display: 'inline-block',
                  marginRight: '16px',
                }}>
                  <p style={{
                    fontSize: '8px',
                    margin: '8px 0 1px',
                  }}>Current</p>
                  <p style={{
                    fontSize: '10px',
                    margin: '0',
                  }}>$23,483</p>
                </div>
                <div style={{
                  padding: '2px 0px',
                  display: 'inline-block',
                  verticalAlign: 'top',
                }}>
                  <p style={{
                    fontSize: '8px',
                    margin: '8px 0px -1px',
                  }}>Total Monthly</p>
                  <img src={sparkLine} />
                </div>
                <p style={{
                  fontSize: '10px',
                  margin: '5px -2px',
                }}>more</p>
              </div>
            </div>

            <div style={{
              display: 'inline-block',
              width: '242px',
              padding: '18px 0px 0px',
              background: 'white',
              margin: '24px 20px 0px 0px',
              verticalAlign: 'top',
              border: '1px solid #cdccbc',
              borderRadius: '4px',
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '0 20px',
              }}>
                <span>Yoga Duets</span>
                <div style={{
                  float: 'right',
                  width: '20px',
                  height: '20px',
                  border: '1px solid rgba(128, 128, 128, 0.24)',
                  borderRadius: '4px',
                  padding: '2px 0px 0px 2px',
                }}>
                  <div className='pencil'></div>
                </div>
              </div>
              <p style={{
                fontSize: '10px',
                margin: '15px 0 0 0',
                padding: '0 20px',
              }}>Sales by month</p>
              <img style={{
                padding: '0 20px',
                marginBottom: '4px',
              }} src={graph} />
              <div style={{
                padding: '0 20px',
                background: '#fbfbf6',
                borderTop: '1px solid rgb(246, 246, 238)',
                borderBottom: '1px solid rgb(246, 246, 238)',
                color: 'rgb(181, 181, 170)',
              }}>
                <div style={{
                  padding: '4px 0px',
                  display: 'inline-block',
                  marginRight: '34px',
                }}>
                  <p style={{
                    fontSize: '8px',
                    margin: '8px 0 1px',
                  }}>Total Monthly</p>
                  <p style={{
                    fontSize: '10px',
                    margin: '0',
                  }}>Sales</p>
                </div>
                <div style={{
                  padding: '4px 0px',
                  display: 'inline-block',
                  marginRight: '16px',
                }}>
                  <p style={{
                    fontSize: '8px',
                    margin: '8px 0 1px',
                  }}>Current</p>
                  <p style={{
                    fontSize: '10px',
                    margin: '0',
                  }}>$23,483</p>
                </div>
                <div style={{
                  padding: '2px 0px',
                  display: 'inline-block',
                  verticalAlign: 'top',
                }}>
                  <p style={{
                    fontSize: '8px',
                    margin: '8px 0px -1px',
                  }}>Total Monthly</p>
                  <img src={sparkLine} />
                </div>
                <p style={{
                  fontSize: '10px',
                  margin: '5px -2px',
                }}>more</p>
              </div>
            </div>

            <div style={{
              position: 'relative',
              margin: '18px 0 0 0px',
            }}>
              <div style={{
                position: 'absolute',
                borderBottom: '1px solid #d5d4c6',
                top: '36px',
                width: '100%',
              }}></div>
              <div style={{
                display: 'inline-block',
              }}>
                <ul style={{
                  padding: '0px 23px 0px 0px',
                  fontSize: '13px',
                  listStyle: 'none',
                }}>
                  <li style={{
                    marginBottom: '23px',
                  }}>All Programs</li>
                  <li style={{
                    marginBottom: '16px',
                  }}>Open Practice
                  <p style={{
                    margin: '0',
                    fontSize: '9px',
                  }}>more</p></li>
                  <li>Yoga Videos
                  <p style={{
                    margin: '0',
                    fontSize: '9px',
                  }}>more</p></li>
                </ul>
              </div>
              <div style={{
                fontSize: '13px',
                display: 'inline-block',
                verticalAlign: 'top',
              }}>
                <ul style={{
                  padding: '0',
                  listStyle: 'none',
                }}>
                  <li style={{
                    paddingRight: '22px',
                    marginBottom: '23px',
                    marginTop: '17px',
                    fontSize: '10px',
                  }}>
                    Monthly Sales
                  </li>
                  <li style={{
                    paddingRight: '31px',
                    marginBottom: '29px',
                  }}>$572.00</li>
                  <li style={{
                    paddingRight: '31px',
                  }}>$391.32</li>
                </ul>
              </div>
              <div style={{
                fontSize: '13px',
                display: 'inline-block',
                verticalAlign: 'top',
              }}>
                <ul style={{
                  padding: '0',
                  listStyle: 'none',
                }}>
                  <li style={{
                    paddingRight: '22px',
                    marginBottom: '23px',
                    marginTop: '17px',
                    fontSize: '10px',
                  }}>
                    Monthly Attendance
                  </li>
                  <li style={{
                    paddingRight: '31px',
                    marginBottom: '29px',
                  }}>276 visits</li>
                  <li style={{
                    paddingRight: '31px',
                  }}>82 views</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
