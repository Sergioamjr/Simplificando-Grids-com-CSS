import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const Column = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  width: ${({xs}) => (xs ? `${xs / 12 * 100}%` : "100%")};
  @media screen and (min-width: 768px) {
    width: ${({sm, xs}) => (
    sm ? `${sm / 12 * 100}%` :
    xs ? `${xs / 12 * 100}%` :
    "100%"
   )};
  }
  @media screen and (min-width: 992px) {
    width: ${({md, sm, xs}) => (
     md ? `${md / 12 * 100}%` :
     sm ? `${sm / 12 * 100}%` :
     xs ? `${xs / 12 * 100}%` :
     "100%"
   )};
  }
  @media screen and (min-width: 1200px) {
    width: ${({lg, md, sm, xs}) => (
     lg ? `${lg / 12 * 100}%` :
     md ? `${md / 12 * 100}%` :
     sm ? `${sm / 12 * 100}%` :
     xs ? `${xs / 12 * 100}%` :
     "100%"
   )};
  }
`;