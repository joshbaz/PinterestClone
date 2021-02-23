import React from "react";
import PinterestIcon from "@material-ui/icons/Pinterest";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import TextsmsIcon from "@material-ui/icons/Textsms";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import {
  Wrapper,
  LogoWrapper,
  HomeButton,
  FollowButton,
  SearchWrapper,
  SearchBarWrapper,
  IconWrapper,
  HomeText,
  FollowText,
} from "./styles";
import { useState } from "react";
const Header = ({ onSearch }) => {
  const [Tinput, setTinput] = useState("");

  const changeInput = (e) => {
    setTinput(e.target.value);

  };

  const onsubmitButton = (e) => {
    e.preventDefault();
    onSearch(Tinput);
  };
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomeButton>
        <HomeText href="/">Homepage</HomeText>
      </HomeButton>
      <FollowButton>
        <FollowText href="/">Following</FollowText>
      </FollowButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>

          <form>
            <input type="text" onChange={changeInput} />
            <button type="submit" onClick={onsubmitButton}></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>

      <IconWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconWrapper>
    </Wrapper>
  );
};

export default Header;
