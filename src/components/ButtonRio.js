
import { styled } from "styled-components";

const StyledButton = styled.button((props) => ({
    padding: props.$size,
    position: "relative",
    border: "none",
    backgroundColor: props.$bcolor,
    fontSize: "16px",
    textTransform: "uppercase",
    fontFamily: "Open Sans sans-serif",
    color: props.$color,
    transition: "all 0.5s",
    cursor: "poiter",
    margin: "10px",
   
    "&:after": {
        content: "''",
        bottom: "5px",
        left:" 5px",
        right: "5px",
        top: "5px",
        position: "absolute",
        border: `2px solid ${props.$brcolor}`,
        transition: "all 0.2s",
      },
      "&:hover": {
        backgroundColor: props.$hbcolor,
        color: props.$hcolor,
        transition: "all 0.2s",
        "&:after": {
            content: "''",
            bottom: "5px",
            left:" 5px",
            right: "5px",
            top: "5px",
            position: "absolute",
            border: `2px solid ${props.$hbrnone}`,
            transition: "all 0.2s",
          },
      }
   
  }));
  


export default function Button({ text, color, bcolor, brcolor, hcolor, hbcolor, hbrnone, size, onclick}) {
  return (
    <>
      <StyledButton
        onClick={onclick}
        $bcolor={bcolor}
        $color={color}
        $brcolor={brcolor}
        $hcolor={hcolor}
        $hbcolor={hbcolor}
        $hbrnone={hbrnone}
        $size={size}
      >{text}</StyledButton>
    </>
  );
}
