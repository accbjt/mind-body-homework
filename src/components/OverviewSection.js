import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  position: relative;
  margin: 18px 0 0 0px;
  padding: 0px 10px;
  font-weight: bolder;
`;

const Seperator = styled.div`
  position: absolute;
  border-bottom: 1px solid #d5d4c6;
  top: 36px;
  width: 100%;
`;

const SectionOne = styled.div`
  display: inline-block;
`;

const SectionTwo = styled.div`
  font-size: 13px;
  display: inline-block;
  vertical-align: top;
`;

const UlSectionOne = styled.ul`
  padding: 0px 23px 0px 0px;
  font-size: 13px;
  list-style: none;

  & p {
    margin: 0;
    font-size: 9px;
  }
`;

const UlSectionOneLiOne = styled.li`
  margin-bottom: 23px;
  color: #98988c;
`;

const UlSectionTwo = styled.ul`
  padding: 0;
  list-style: none;
`;

const UlSectionOneLiTwo = styled.li`
  margin-bottom: 16px;
`;

const UlSectionTwoLiOne = styled.li`
  padding-right: 22px;
  margin-bottom: 23px;
  margin-top: 17px;
  font-size: 10px;
  color: #98988c;
`;

const UlSectionTwoLiTwo = styled.li`
  padding-right: 31px;
  margin-bottom: 29px;
`;

const UlSectionTwoLiThree = styled.li`
  padding-right: 31px;
`;

const OverviewSection = () => (
  <MainContainer>
    <Seperator />
    <SectionOne>
      <UlSectionOne>
        <UlSectionOneLiOne>All Programs</UlSectionOneLiOne>
        <UlSectionOneLiTwo>Open Practice<p>more</p></UlSectionOneLiTwo>
        <li>Yoga Videos<p>more</p></li>
      </UlSectionOne>
    </SectionOne>
    <SectionTwo>
      <UlSectionTwo>
        <UlSectionTwoLiOne>Monthly Sales</UlSectionTwoLiOne>
        <UlSectionTwoLiTwo>$572.00</UlSectionTwoLiTwo>
        <UlSectionTwoLiThree>$391.32</UlSectionTwoLiThree>
      </UlSectionTwo>
    </SectionTwo>
    <SectionTwo>
      <UlSectionTwo>
        <UlSectionTwoLiOne>Monthly Attendance</UlSectionTwoLiOne>
        <UlSectionTwoLiTwo>276 visits</UlSectionTwoLiTwo>
        <UlSectionTwoLiThree>82 views</UlSectionTwoLiThree>
      </UlSectionTwo>
    </SectionTwo>
  </MainContainer>
);

export default OverviewSection;
