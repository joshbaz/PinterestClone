import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background: white;
  color: black;

  @media all and (max-width:412px){
    display:none;
  }
  @media all and (min-width:413px){
    display:none;
  }
`;

export const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: red;
    font-size: 22px;
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;
export const HomeButton = styled(Buttons)`

  background-color: rgb(17, 17, 17);
`;

export const HomeText = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 700;
`;

export const FollowButton = styled(Buttons)`
  background-color: white;

  :hover {
    background: #e1e1e1;
  }
`;
export const FollowText = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 700;
`;

export const SearchWrapper = styled.div`
flex: 1;
`;

export const SearchBarWrapper = styled.div`
background-color:#efefef;
display:flex;
height: 48px;
width:100%;
border-radius:50px;
border:none;
padding-left: 10px;

form {
    display:flex;
    flex: 1;
}

form > input {
    background-color: transparent;
    border:none;
    outline:none;
    margin-left: 5px;
    font-size: 16px;
}

form > button {
    display:none;
}


`;

export const IconWrapper = styled.div``;
