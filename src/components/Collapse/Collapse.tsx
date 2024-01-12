import React from "react";
import styles from "./Collapse.module.css";

interface ICollapseProps {
  isOpen: boolean;
  children: React.ReactNode | React.ReactNode[];
}

const getElementHeight = (element?: HTMLDivElement) => {
  if (!element) return;

  return element.scrollHeight;
};

const expand = (element: HTMLDivElement) => {
  const elementHeight = getElementHeight(element);

  element.style.height = `${elementHeight}px`;
  element.style.opacity = "1";
  element.style.visibility = "visible";
  element.style.overflow = "visible";
};

const collapse = (element: HTMLDivElement) => {
  const elementHeight = getElementHeight(element);

  requestAnimationFrame(() => {
    element.style.height = `${elementHeight}px`;
    requestAnimationFrame(() => {
      element.style.height = "0px";
      element.style.opacity = "0";
      element.style.visibility = "hidden";
      element.style.overflow = "hiddent";
    });
  });
};

function Collapse({ isOpen, children }: ICollapseProps) {
  const collapseRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!collapseRef.current) return;

    if (isOpen) {
      expand(collapseRef.current);
    } else {
      collapse(collapseRef.current);
    }
  }, [isOpen]);

  return (
    <div className={styles["collapse-container"]} ref={collapseRef}>
      {children}
    </div>
  );
}

export { Collapse };
