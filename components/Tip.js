import styled from "react-emotion";
import theme from "../styles/theme";

const Tip = styled.p`
  margin-bottom: ${theme.space.l};
  padding: ${theme.space.s} ${theme.space.m};
  font-size: ${theme.fontSize.epsilon};
  background: ${theme.color.backgroundTip};
  color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 5px;
`;

export default Tip;
