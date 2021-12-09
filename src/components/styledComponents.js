import styled from "styled-components";

const PageMenu = styled.div`
  background-color: #eee;
  border: 1px solid rgba(175, 175, 175, 0.2);
  border-radius: 0.8rem;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.2);
  margin: 1rem 0;
  width: 90vw;
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.2);
`;

const MenuButton = styled.div`
  
  width: 80%;
  a {
    color: #252525;
    font-size: 1.5rem;
    font-weight: 900;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

    div {
      border: 2px solid #252525;
      border-radius: 0.5rem;
      margin: 0.5rem 0;
      padding: 0.2rem 0;
      text-align: center;
    }
  }

  :hover a div, :active a div {
    background-color: #252525;
    color: #eee;
  }

  :hover a, :active a {
    color: #eee;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  font-weight: 600;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: none;
  border-radius: 0.5rem;
  width: ${props => props.width};
`;

Button.defaultProps = {
  bgColor: 'white',
  color: 'black',
  width: 'auto',
};

export { PageMenu, MenuButton, Button };