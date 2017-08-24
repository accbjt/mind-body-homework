/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';
import SalesByMonthCardContainer from './containers/SalesByMonthCardContainer'
import NewFormContainer from './containers/NewFormContainer'
import OverviewSection from './components/OverviewSection'
import mock from './business_overview_expanded.png';
import logo from './assets/logo.png';
import plus from './assets/plus_icon.png';
import graph from './assets/graph.png';
import sparkLine from './assets/spark_line.png';

const AppContainer = styled.div`
  background: #ecf7f2;
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 100vh;
`;

const Logo = styled.img`
  position: absolute;
  top: 10px;
  left: 14px;
`;

const TopBar = styled.div`
  position: relative;
  float: right;
`;

const TopBarUl = styled.ul`
  margin: 25px 0px -1px 0px;
  padding: 0;
  border-top: 1px solid rgb(220, 231, 234);
  border-bottom: 1px solid #c9c9c9;
  background: linear-gradient(to bottom, white 50%, #ebf0ee 100%);
`;

const DashboardLi = styled.li`
  position: relative;
  top: -1px;
  display: inline-block;
  padding: 10px 32px;
  font-size: 13px;
  font-weight: bolder;
  letter-spacing: 0.73px;
  border: solid 1px #c9c9c9;
  border-bottom: 1px solid #ffffff;
  border-radius: 3px 3px 0px 0px;
  transform: scaleY(1.10);
  background-color: white;
`;

const TopBarLi = styled.li`
  display: inline-block;
  padding: 11px 24px;
  font-size: 13px;
  font-weight: bolder;
  letter-spacing: 0.73px;
  color: rgb(125, 158, 141);
`;

const TopBarEndingLi = TopBarLi.extend`
  margin-right: '10px'
`;

const NewProgramButtonContainer = styled.div`
  margin: 0 57px 0 87px;
  padding-top: 25px;
  display: inline-block;
`

const NewProgramButton = styled.div`
  display: inline-block;
  padding: 18px 22px 13px 23px;
  border: 1px solid #9cbc88;
  border-radius: 5px;
  background-image: linear-gradient(#bbd69f 0%, #9cc087 100%);
  box-shadow: inset 0px 1px 0px 0px #d6f3ba;
  cursor: pointer;
`

const NewProgramText = styled.p`
  font-size: 11px;
  text-align: center;
  margin-top: 3px;
`;

const ProgramSection = styled.div`
  background: linear-gradient(to right, #dfdfd5 0%,#f4f4ee 10%, #f4f4ee 90%,#dfdfd5 100%);
`;

const CardSectionContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 0 10px;
  width: 70%;
`;

const ServiceSection = styled.div`
  clear: right;
  padding-left: 35px;
  background-color: #ffffff;
  border-top: 1px solid rgb(220, 231, 234);
  border-bottom: 1px solid #c9c9c9;

  & ul {
    margin: 0;
  }
`;

const ServiceSectionLi = styled.li`
  display: inline-block;
  padding: 11px 24px;
  font-size: 13px;
  font-weight: bolder;
  letter-spacing: 0.73px;
  color: rgb(125, 158, 141);
`;

const ServiceSectionliBold = ServiceSectionLi.extend`
  font-weight: bolder;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <div>
          <Logo src={logo} />
        </div>
        <div>
          <TopBar>
            <TopBarUl>
              <DashboardLi>Dashboard</DashboardLi>
              <TopBarLi>Sign In</TopBarLi>
              <TopBarLi>Classes</TopBarLi>
              <TopBarLi>Workshops</TopBarLi>
              <TopBarLi>Appointments</TopBarLi>
              <TopBarLi>Client Home</TopBarLi>
              <TopBarEndingLi>Retail</TopBarEndingLi>
            </TopBarUl>
          </TopBar>
        </div>
        <ServiceSection>
          <ul>
            <ServiceSectionLi>Dashboard</ServiceSectionLi>
            <ServiceSectionliBold>Bussiness Overview</ServiceSectionliBold>
            <ServiceSectionLi>Schedule</ServiceSectionLi>
            <ServiceSectionLi>Reports</ServiceSectionLi>
          </ul>
        </ServiceSection>
        <ProgramSection>
          <NewProgramButtonContainer>
            <NewProgramButton onClick={this.props.showForm}>
              <img src={plus} />
            </NewProgramButton>
            <NewProgramText>New Program</NewProgramText>
          </NewProgramButtonContainer>

          <CardSectionContainer>
            <NewFormContainer />
            <SalesByMonthCardContainer />
            <OverviewSection />
          </CardSectionContainer>
        </ProgramSection>
      </AppContainer>
    );
  }
}

export default App;
