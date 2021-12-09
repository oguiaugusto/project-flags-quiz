import styled from "styled-components";

const MenuButton = styled.div`
  
  width: 80%;

  a {
    color: #252525;
    font-size: 1.5rem;
    font-weight: 900;
    text-decoration: none;

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

export { MenuButton };