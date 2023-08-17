import React, { ReactNode } from "react";
import classnames from "classnames";

import "./index.css";

interface Props {
  className?: string;
  type?: "normal" | "primary" | "dashed" | "link" | "text";
  children?: ReactNode;
  style?: React.CSSProperties;
}

const Button = (props: Props) => {
  const { className, type, children, style } = props;
  const cls = classnames({
    "ant-btn": true,
    [`ant-btn-${type}`]: type,
    [className as string]: !!className,
  });

  return (
    <button className={cls} style={style}>
      {children}
    </button>
  );
};

export default Button;
