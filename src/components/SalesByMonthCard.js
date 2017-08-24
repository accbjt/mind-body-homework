import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // eslint-disable-line
import graph from '../assets/graph.png';
import sparkLine from '../assets/spark_line.png';
import pencil from '../assets/pencil_icons.png';
import { convertNumberWithCommas } from '../services/helpers';

import MoreCardsData from './MoreCardsData';

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 15px auto;
  padding: 10px;
`;

const CardsContainer = styled.div`
  display: inline-block;
  width: 242px;
  padding: 18px 0px 0px;
  background: white;
  margin: 0 20px 24px 0px;
  vertical-align: top;
  border: 1px solid #cdccbc;
  border-radius: 4px;
  overflow: hidden;
`;

const Title = styled.div`
  padding: 0 20px;
`;

const PencilBox = styled.div`
  float: right;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(128, 128, 128, 0.24);
  border-radius: 4px;
  padding: 2px 0px 0px 2px;
`;

const Pencil = styled.div`
  background-image: url(${pencil});
  width: 20px;
  height: 15px;
  cursor: pointer;

  &:hover {
    background-position: 0 -17px;
  }
`;

const SaleByMonth = styled.p`
  font-size: 10px;
  margin: 15px 0 0 0;
  padding: 0 20px;
`;

const GraphImg = styled.img`
  padding: 0 20px;
  margin-bottom: 4px;
`;

const CurrentMonthlyContainer = styled.div`
  padding: 0 20px;
  background: #fbfbf6;
  border-top: 1px solid rgb(246, 246, 238);
  border-bottom: 1px solid rgb(246, 246, 238);
  color: rgb(181, 181, 170);
`;

const CurrentMonthlyTextArea = styled.div`
  padding: 4px 0 12px 0px;;
  display: inline-block;
  margin-right: 34px;

  & p:first-child {
    font-size: 8px;
    margin: 8px 0 1px;
  }

  & p:last-child {
    font-size: 10px;
    margin: 0;
  }
`;

const CurrentMonthlyCenter = CurrentMonthlyTextArea.extend`
  margin-right: 16px;
`;

const CurrentMonthlyGraphArea = styled.div`
  padding: 2px 0px;
  display: inline-block;
  vertical-align: top;
  height: 17px;

  & p {
    font-size: 8px;
    margin: 10px 0px -2px;
    text-align: center;
  }
`;

class SalesByMonthCard extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <Container>
        { this.props.cards.map(({
          Name,
          TotalMonthlySales,
          ProgramID,
        }) => (
          <CardsContainer key={`${ProgramID}-${Name}`}>
            <Title>
              <span>{Name}</span>
              <PencilBox>
                <Pencil />
              </PencilBox>
            </Title>
            <SaleByMonth>Sales by month</SaleByMonth>
            <GraphImg src={graph} />
            <CurrentMonthlyContainer>
              <CurrentMonthlyTextArea>
                <p>Total Monthly</p>
                <p>Sales</p>
              </CurrentMonthlyTextArea>
              <CurrentMonthlyCenter>
                <p>Current</p>
                <p>{`$${convertNumberWithCommas(TotalMonthlySales)}`}</p>
              </CurrentMonthlyCenter>
              <CurrentMonthlyGraphArea>
                <p>1 - Year</p>
                <img src={sparkLine} alt="Graph Line" />
              </CurrentMonthlyGraphArea>
            </CurrentMonthlyContainer>
            <MoreCardsData
              data={this.props.moreCardData}
              programId={ProgramID}
              {...this.props}
            />
          </CardsContainer>
        ))
        }
      </Container>
    );
  }
}

SalesByMonthCard.propTypes = {
  fetchData: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  moreCardData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SalesByMonthCard;
