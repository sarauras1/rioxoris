import React, { useState } from "react";
import { styled } from "styled-components";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons";
import StyledButton from "../components/buttonRio";
import { NavLink } from "react-bootstrap";
import { images } from "../data/imagesgallery";

const StyledOverlay = styled.div`
  position: relative;
  &:hover {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.8);
      height: 95%;
      width: 100%;

      background-image: url("./Images/plus.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 20%;
    }
  }
`;

export default function Gallery({ id }) {
  const shuffledArray = images.sort((a, b) => 0.5 - Math.random());

  const [filter, setFilter] = useState("agriturismo");

  const handleFilter = (category) => {
    setFilter(category);
  };

  const renderImages = () => {
    let filteredImages = [];
    if (filter === "all") {
      filteredImages = shuffledArray;
    } else {
      filteredImages = images.filter(
        (image) => Object.keys(image)[0] === filter
      );
    }

    // Flatten the array of objects into an array of strings
    filteredImages = filteredImages.map((image) => Object.values(image)[0]);

    return Array.from(
      { length: Math.ceil(filteredImages.length / 2) },
      (_, rowIndex) => (
        <Row key={rowIndex}>
          {Array.from({ length: 3 }, (_, colIndex) => {
            const imageIndex = rowIndex * 3 + colIndex;
            if (imageIndex < filteredImages.length) {
              return (
                <Col key={colIndex} md={4}>
                  <NavLink
                    className="image-links"
                    href={filteredImages[imageIndex]}
                  >
                    <StyledOverlay>
                      <Image
                        className="mb-3 image-hover gallery-images"
                        src={filteredImages[imageIndex]}
                        fluid
                        alt="Immagini dell' agriturismo Rioxoris: Pietanze - Animali - Ristorante - Natura"
                      />
                    </StyledOverlay>
                  </NavLink>
                </Col>
              );
            } else {
              return null; // Return null for empty slots
            }
          })}
        </Row>
      )
    );
  };
  return (
    <Container id={id}>
      <div className="mb-5 text-center">
        <span className="decoro-small decoro">Scopri</span>
        <h2 className="titolo-small titolo">La Nostra Galleria</h2>
        <div className="d-flex justify-content-center">
          <div className="spoon-line"></div>{" "}
          <FontAwesomeIcon
            className="spoon"
            icon={faSpoon}
            color="#c1a35f"
            size="2x"
          />{" "}
          <div className="spoon-line"></div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly mb-5 text-center flex-wrap">
        <StyledButton
          text="tutte"
          color={"#fff"}
          bcolor={"#c1a35f"}
          brcolor={"#fff"}
          hbcolor={"#c1a35f"}
          hbrnone={"#c1a35f"}
          size={"10px 30px"}
          onclick={() => handleFilter("all")}
        />
        <StyledButton
          onclick={() => handleFilter("camere")}
          text="Camere"
          color={"black"}
          bcolor={"#ccc"}
          brcolor={"#fff"}
          hbcolor={"#c1a35f"}
          hcolor={"#fff"}
          size={"10px 30px"}
        />
        <StyledButton
          onclick={() => handleFilter("animali")}
          text="Animali"
          color={"black"}
          bcolor={"#ccc"}
          brcolor={"#fff"}
          hbcolor={"#c1a35f"}
          hcolor={"#fff"}
          size={"10px 30px"}
        />
        <StyledButton
          onclick={() => handleFilter("pietanze")}
          text="Pietanze"
          color={"black"}
          bcolor={"#ccc"}
          brcolor={"#fff"}
          hbcolor={"#c1a35f"}
          hcolor={"#fff"}
          size={"10px 30px"}
        />

        <StyledButton
          onclick={() => handleFilter("agriturismo")}
          text="Agriturismo"
          color={"black"}
          bcolor={"#ccc"}
          brcolor={"#fff"}
          hbcolor={"#c1a35f"}
          hcolor={"#fff"}
          size={"10px 30px"}
        />
      </div>

      {renderImages()}
    </Container>
  );
}
