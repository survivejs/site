import React from "react";
import styled, { cx, css } from "react-emotion";
import theme from "../styles/theme";

const ACTION_URL =
  "https://buttondown.email/api/emails/embed-subscribe/SurviveJS";

const Form = styled.form`
  @media (min-width: ${theme.breakpoint.s}) {
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
  font-size: ${theme.fontSize.delta};
  outline: none;

  @media (min-width: ${theme.breakpoint.s}) {
    width: auto;
  }
`;

const inputStyle = css`
  flex-grow: 1;
  color: ${theme.color.base};

  @media (min-width: ${theme.breakpoint.s}) {
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
    color ${theme.transition.easing}
      ${theme.transition.speed};

  @media (min-width: ${theme.breakpoint.s}) {
    border-radius: 0 ${theme.form.size} ${theme.form.size} 0;
  }

  &:hover {
    color: ${theme.color.actionLight};
    background-color: ${theme.color.actionAlpha};
  }
`;

const Button = props => (
  <input
    type="submit"
    className={cx(baseStyle, buttonStyle)}
    {...props}
  />
);

const SubscribeForm = () => {
  return (
    <Form action={ACTION_URL} method="post" target="_blank">
      <Input
        type="email"
        placeholder="Email"
        name="email"
        id="bd-email"
        required
      />
      <input type="hidden" name="embed" value="1" />
      <Button value="Subscribe" name="subscribe" />
    </Form>
  );
};

export default SubscribeForm;
