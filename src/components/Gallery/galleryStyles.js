import styled from "styled-components";

export const Wrap = styled.div`
width:100%;
height: 100%;
p{
  color:red;
  text-align:center;
  margin-bottom: 20px;
  margin-top: 50px;
}
`;
export const Wrappers = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media all and (max-width: 506px) {
   text-align:center;
  }
  @media all and (min-width:506px){
    
  }
`;

export const Containers = styled.div`
  
  margin-top: 15px;
  background-color: white !important;
  width: 100%;

 
`;
