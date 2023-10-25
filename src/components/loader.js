import styled from "styled-components";
import { keyframes } from "styled-components";

const bounce = keyframes`
0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}
40% {-webkit-transform: translateY(-30px);}
60% {-webkit-transform: translateY(-15px);}
0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
40% {transform: translateY(-30px);}
60% {transform: translateY(-15px);}


`;

// Here we create a component that will rotate everything we pass in over two seconds
const Bounce = styled.div`
  animation: ${bounce} infinite;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  width: 300px;
  margin: 200px auto;
`;

export default function Loader() {
  return (
    <>
      <Bounce>
        <img
          className="logo-loader"
          src="./rioxiorislogo.png"
          alt="Rioxoris Logo"
        />
      </Bounce>
    </>
  );
}
