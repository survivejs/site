import styled from "react-emotion";

const VisuallyHidden = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
`;

export default VisuallyHidden;
