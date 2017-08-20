import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import graph from '../assets/graph.png';
import sparkLine from '../assets/spark_line.png';

const SalesByMonthCard = ({ name }) => {
  return (
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
    }}
    >
      <div style={{
        padding: '0 20px',
      }}>
        <span>{name}</span>
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
  )
}

SalesByMonthCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SalesByMonthCard;
