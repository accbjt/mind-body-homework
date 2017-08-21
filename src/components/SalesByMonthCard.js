import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // eslint-disable-line
import graph from '../assets/graph.png';
import sparkLine from '../assets/spark_line.png';
import pencil from '../assets/pencil_icons.png';

const Container = styled.div`
  display: inline-block;
  width: 242px;
  padding: 18px 0px 0px;
  background: white;
  margin: 24px 20px 0px 0px;
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
  padding: 4px 0px;
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

  & p {
    font-size: 8px;
    margin: 10px 0px -2px;
    text-align: center;
  }
`;

const More = styled.p`
  font-size: 10px;
  margin: 5px 20px;
`;

const SalesByMonthCard = ({ name }) => {
  return (
    <Container>
      <Title>
        <span>{name}</span>
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
          <p>$23,483</p>
        </CurrentMonthlyCenter>
        <CurrentMonthlyGraphArea>
          <p>1 - Year</p>
          <img src={sparkLine} alt="Graph Line" />
        </CurrentMonthlyGraphArea>
      </CurrentMonthlyContainer>
      <More>more</More>
    </Container>
  );
};

SalesByMonthCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SalesByMonthCard;
