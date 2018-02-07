import React from "react";
import styled, { cx, css } from "react-emotion";
import theme from "../styles/theme";

const ACTION_URL =
  "//jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=b853b8e786";

const Pocket = ({ children }) => (
  <div
    style={{
      display: "none",
      position: "absolute",
      left: "-5000px",
    }}
  >
    {children}
  </div>
);

const Form = styled.form`
  @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const baseStyle = css`
  display: block;
  width: 100%;
  height: ${theme.form.size};
  margin-bottom: ${theme.space.s};
  padding: 0.6em 1em;
  background-color: ${theme.color.background};
  border: ${theme.border.width} solid ${theme.color.action};
  border-radius: ${theme.form.size};
  text-transform: uppercase;
  font-size: ${theme.fontSize.delta};
  outline: none;

  @media (min-width: 500px) {
    width: auto;
  }
`;

const inputStyle = css`
  flex-grow: 1;
  color: ${theme.color.base};

  @media (min-width: 500px) {
    border-right: 0;
    border-radius: ${theme.form.size} 0 0 ${theme.form.size};
  }

  &:focus,
  &:focus ~ input {
    border-color: ${theme.color.actionDark};
  }
`;

const Input = props => (
  <input className={cx(baseStyle, inputStyle)} {...props} />
);

const buttonStyle = css`
  letter-spacing: 0.05em;
  font-weight: ${theme.fontWeight.fat};
  color: ${theme.color.actionDark};
  transition: background-color ${theme.transition.easing}
      ${theme.transition.speed},
    color ${theme.transition.easing} ${theme.transition.speed};

  @media (min-width: 500px) {
    border-radius: 0 ${theme.form.size} ${theme.form.size} 0;
  }

  &:hover {
    color: ${theme.color.actionLight};
    background-color: ${theme.color.actionAlpha};
  }
`;

const Button = props => (
  <input type="submit" className={cx(baseStyle, buttonStyle)} {...props} />
);

const SubscribeForm = () => {
  return (
    <Form action={ACTION_URL} method="post" target="_blank">
      <Input
        type="email"
        placeholder="Email"
        name="EMAIL"
        id="mce-EMAIL"
        required
      />
      <Pocket>
        <input
          type="text"
          name="b_ed40c0084a0c5ba31b3365d65_b853b8e786"
          tabIndex="-1"
          value=""
        />
      </Pocket>
      <Button value="Subscribe" name="subscribe" />
    </Form>
  );
};

export default SubscribeForm;
