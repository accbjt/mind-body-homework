import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // eslint-disable-line
import { convertNumberWithCommas } from '../services/helpers';
import sparkLine from '../assets/spark_line.png';

const MoreCardDataContainer = styled.div`
  padding: 15px 0px 5px 0px;
  font-size: 10px;
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

const TitleSection = styled.div`
  padding: 0 20px;
  font-weight: bolder;
  color: #b5b4aa;
`;

const TitleColOne = styled.div`
  padding: 4px 0px;
  display: inline-block;
  margin-right: 36px;
`;

const TitleColTwo = TitleColOne.extend`
  margin-right: 0px;
  width: 50px;
  text-align: left;
`;

const TitleColThree = TitleColOne.extend`
  margin-right: 0px;
  text-align: center;
  width: 60px;

  & p {
    width: 100%;
  }
`;

const MoreTextColOne = styled.div`
  display: inline-block;
  margin-right: 10px;

  & p {
    height: 12px;
  }
`;

const MoreTextColTwo = MoreTextColOne.extend`
  width: 38px;
  text-align: left;
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

class MoreCardsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      moreOrLess: 'more',
    };

    this.changeHideMore = this.changeHideMore.bind(this);
  }

  changeHideMore() {
    this.props.fetchMoreData();

    const textValue = this.state.moreOrLess === 'more' ? 'less' : 'more';
    const isVisible = !this.state.isVisible;

    this.setState({
      isVisible,
      moreOrLess: textValue,
    });
  }

  render() {
    const { data, programId } = this.props;
    const currentData = data.filter(item => item.ProgramID === programId);

    if (this.state.isVisible) {
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
              <MoreTextColOne>
                <p>{Name}</p>
              </MoreTextColOne>
              <MoreTextColTwo>
                <p>{`$${convertNumberWithCommas(Sales)}`}</p>
              </MoreTextColTwo>
              <Graph>
                <img src={sparkLine} alt="Graph Line" />
              </Graph>
            </MoreCardContainer>
          ))}

          <Less onClick={this.changeHideMore}>{this.state.moreOrLess}</Less>
        </MoreCardDataContainer>
      );
    }

    return (
      <Less onClick={this.changeHideMore}>{this.state.moreOrLess}</Less>
    );
  }
}

MoreCardsData.propTypes = {
  fetchMoreData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  programId: PropTypes.number.isRequired,
};

export default MoreCardsData;
