import React, {
  CSSProperties,
  FormEvent,
  HTMLAttributes,
  ReactNode,
  useRef,
  useState,
} from "react";
import classnames from "classnames";

import "./index.scss";

export interface radioProps extends HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const Radio = (props: radioProps) => {
  const { className, style, onChange, ...others } = props;
  const [checked, setChecked] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);
  const cls = classnames({
    "ant-radio": true,
    "ant-radio-checked": checked,
  });
  const wrapperCls = classnames({
    "ant-radio-wrapper": true,
  });

  const handleClick = (e: FormEvent<HTMLSpanElement>) => {
    setChecked(!checked);

    if (typeof onChange === "function") {
      e.target = inputEl.current!;
      const inputEvent = e as FormEvent<HTMLInputElement>;
      onChange(inputEvent);
    }
  };

  return (
    <span className={wrapperCls} onClick={handleClick}>
      <span className={cls}>
        <input type="radio" className="ant-radio-input" ref={inputEl} />
        <span className="ant-radio-inner"></span>
      </span>
      <span>{props.children}</span>
    </span>
  );
};

export default Radio;
