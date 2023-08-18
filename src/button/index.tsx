import React, {
  CSSProperties,
  FocusEventHandler,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";
import classnames from "classnames";

import "./index.scss";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "normal" | "primary" | "dashed" | "link" | "text";
  size?: "small" | "medium" | "large";
  children?: ReactNode;
  style?: CSSProperties;
  onBlur?: FocusEventHandler<HTMLButtonElement> | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = (props: Props) => {
  const {
    className,
    type = "normal",
    size = "medium",
    children,
    style,
    onClick,
    onBlur,
    ...others
  } = props;
  const cls = classnames({
    "ant-btn": true,
    [`ant-btn-${type}`]: type,
    [`ant-btn-${size}`]: size,
    [className as string]: !!className,
  });

  return (
    <button
      className={cls}
      style={style}
      onClick={onClick}
      onBlur={onBlur}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
