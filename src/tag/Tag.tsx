import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  MouseEvent,
  useState,
  useEffect,
} from "react";
import { CloseOutlined } from "@ant-design/icons";
import classnames from "classnames";

import "./index.scss";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  closable?: boolean;
  closeIcon?: boolean | ReactNode;
  visable?: boolean;
  color?: string;
  icon?: ReactNode;
  style?: CSSProperties;
  bordered?: boolean;
  onClose?: Function;
}

const Tag = (props: Props) => {
  const {
    className,
    children,
    closable,
    closeIcon,
    color,
    onClose,
    ...others
  } = props;

  const customColor = color && color.match(/^#/);
  const cls = classnames({
    "ant-tag": true,
    [`ant-tag-${color}`]: color && !customColor,
    [className as string]: !!className,
  });

  const style: CSSProperties = { ...props.style };
  if (customColor) {
    style.backgroundColor = color;
  }

  const [visable, setVisable] = useState(true);
  useEffect(() => {
    if ("visable" in props && typeof props.visable !== "undefined") {
      setVisable(props.visable);
    }
  }, [props.visable]);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    onClose?.(e);
    if (e.defaultPrevented) {
      return;
    }
    if ("visable" in props) {
      return;
    }
    setVisable(false);
  };
  if (!visable) {
    return null;
  }
  const defaultCloseIcon = <CloseOutlined onClick={handleClick} />;

  const mergedCloseIcon =
    typeof closeIcon === "boolean" ||
    closeIcon === undefined ||
    closeIcon === null
      ? defaultCloseIcon
      : closeIcon;

  return (
    <span {...others} className={cls} style={style}>
      {children}
      {closable && visable ? mergedCloseIcon : null}
    </span>
  );
};

export default Tag;
