import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 20px;
  text-align: center !important;
  color: white !important;

  background-color: rgb(35, 35, 35, 0.94);
  backdrop-filter: saturate(150%) blur(15px);

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 0px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  margin-bottom: 10px;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  color: white !important;

  &:hover {
      color: #ff9c00;
      font-size: 19px;
      transition: 0.2s ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Subheading = styled.p`
  font-size: 10px;
  text-align: center;
  padding-top: 30px;
`;