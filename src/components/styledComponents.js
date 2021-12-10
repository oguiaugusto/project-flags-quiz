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

  @media screen and (min-width: 481px) {
    width: 80vw;
  }

  @media screen and (min-width: 769px) {
    width: 600px;
  }
`;

const MenuButton = styled.div`
  cursor: pointer;
  width: 80%;
  -webkit-tap-highlight-color: transparent;
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

  @media screen and (min-width: 481px) {
    a {
      div {
        padding: 0.5rem 0;
      }
    }
  }

  @media screen and (min-width: 769px) {
    
  }
`;

const Button = styled.button`
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  font-weight: 600;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: none;
  border-radius: 0.5rem;
  width: ${props => props.width};
  transition: filter 1s;
  -webkit-tap-highlight-color: transparent;

  :disabled {
    filter: saturate(37%);
    -webkit-filter: saturate(37%);
    -moz-filter: saturate(37%);
  }
`;

const OptionButton = styled.button`
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  font-weight: 600;
  background-color: #252525;
  color: #eee;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  -webkit-tap-highlight-color: transparent;

  :hover, :active {
    background-color: #313131;
    color: #eee;
  }

  @media screen and (min-width: 481px) {
    font-size: 1rem;
  }
`;

const LabelToggle = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.4rem 1.2rem;

  div.label-toggle-input {
    --checkboxWidth: 60px;
    --checkboxHeight: calc(var(--checkboxWidth) / 2);
    --checkboxBorderRadius: calc(var(--checkboxHeight) / 2);

    display: inline-block;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  div.label-toggle-input input {
    display: none;
  }

  div.checkbox-toggle {
    position: relative;
    width: var(--checkboxWidth);
    height: var(--checkboxHeight);
    border-radius: var(--checkboxBorderRadius);
    background: #ddd;
  }

  div.label-toggle-input input:checked ~ div.checkbox-toggle {
    background: var(--optionsBackground);
    animation: fadeIn 0.8s;
  }

  div.checkbox-toggle::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: var(--checkboxHeight);
    width: var(--checkboxHeight);
    background: #ddd;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    border-radius: var(--checkboxBorderRadius);
    transition: transform 0.2s;
  }

  div.label-toggle-input input:checked ~ div.checkbox-toggle::after {
    transform: translateX(var(--checkboxHeight));
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const InputRadio = styled.input`
  appearance: none;
  background: #cfcfcf;
  border-radius: 2px;
  color: #252525;
  cursor: pointer;
  font-weight: 600;
  height: 100%;
  outline: none;
  padding: 0.4rem 2rem;
  transition: all 100ms linear;
  -webkit-tap-highlight-color: transparent;

  :checked {
    background-image: var(--optionsBackground);
    box-shadow: 0 1px 1px #0000002e;
    color: #fff;
  }

  :before {
    content: attr(label);
    display: inline-block;
    text-align: center;
    width: auto;
  }

  @media screen and (min-width: 481px) {
    margin: 0 0.8rem;

    :before {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 769px) {
    height: auto;

    :before {
      font-size: 1.5rem
    }
  }
`;

Button.defaultProps = {
  bgColor: 'white',
  color: 'black',
  width: 'auto',
};

export { PageMenu, MenuButton, Button, OptionButton, LabelToggle, InputRadio };