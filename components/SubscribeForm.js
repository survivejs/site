import React from "react";
import styled from "react-emotion";
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
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  flex-grow: 1;
  height: ${theme.form.size};
  padding: 0.6em 1em;
  background-color: ${theme.color.background};
  border: ${theme.border.width} solid ${theme.color.action};
  border-right: 0;
  border-radius: ${theme.form.size} 0 0 ${theme.form.size};
  color: ${theme.color.base};
  text-transform: uppercase;
  font-size: ${theme.fontSize.delta};
  outline: none;

  &:focus,
  &:focus ~ input {
    border-color: ${theme.color.actionDark};
  }
`;

const Button = styled.input`
  height: ${theme.form.size};
  padding: 0.6em 1em;
  background-color: ${theme.color.background};
  border: ${theme.border.width} solid ${theme.color.action};
  border-radius: 0 ${theme.form.size} ${theme.form.size} 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${theme.color.actionDark};
  font-size: ${theme.fontSize.delta};
  font-weight: ${theme.fontWeight.fat};
  outline: none;
  transition: background-color ${theme.transition.easing}
      ${theme.transition.speed},
    color ${theme.transition.easing} ${theme.transition.speed};

  &:hover {
    color: ${theme.color.actionLight};
    background-color: ${theme.color.actionAlpha};
  }
`;

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
      <Button type="submit" value="Subscribe" name="subscribe" />
    </Form>
  );
};

export default SubscribeForm;
