import React from 'react';
import styled from 'styled-components';
import { convertNumberWithCommas } from '../services/helpers';
import sparkLine from '../assets/spark_line.png';

const MoreCardDataContainer = styled.div`
  padding: 15px 0px 5px 0px;
  font-size: 10px;
`;

const TitleSection = styled.div`
  padding: 0 20px;
  font-weight: bolder;
  color: #b5b4aa;
`;

const TitleColOne = styled.div`
  padding: 4px 0px;
  display: inline-block;
  margin-right: 7px;
`;

const TitleColTwo = TitleColOne.extend`
  margin-right: 0px;
  width: 50px;
`;

const TitleColThree = TitleColOne.extend`
  margin-right: 0px;
  text-align: center;
  width: 65px;

  & p {
    width: 100%;
  }
`;

const MoreCardContainer = styled.div`
  padding: 0 20px;

  & p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 80px;
  }
`;

const Graph = styled.div`
  padding: 2px 0px;
  display: inline-block;
  vertical-align: top;
  height: 17px;
`;

const Less = styled.p`
  font-size: 10px;
  margin: 5px 20px;
  cursor: pointer;
`;

const MoreCardsData = ({ data, programId, changeHideMore }) => {
  debugger
  const currentData = data.filter(item => item.ProgramID === programId);

  return (
    <MoreCardDataContainer>
      <TitleSection>
        <TitleColOne>
          <p>Price Name</p>
        </TitleColOne>
        <TitleColTwo>
          <p>Current</p>
        </TitleColTwo>
        <TitleColThree>
          <p>1 - year</p>
        </TitleColThree>
      </TitleSection>
      {currentData.map(({
        Name,
        Sales,
      }) => (
        <MoreCardContainer key={`${programId}-${Name}`}>
          <TitleColOne>
            <p>{Name}</p>
          </TitleColOne>
          <TitleColTwo>
            <p>{`$${convertNumberWithCommas(Sales)}`}</p>
          </TitleColTwo>
          <Graph>
            <img src={sparkLine} alt="Graph Line" />
          </Graph>
        </MoreCardContainer>
      ))}
      <Less onClick={changeHideMore}>less</Less>
    </MoreCardDataContainer>
  );
};

MoreCardsData.propTypes = {

};

export default MoreCardsData;
