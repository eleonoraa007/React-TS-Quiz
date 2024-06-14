import { ReactNode } from "react";

type ChildrenProps = {
    children: ReactNode;
}

const Footer = ({children}: ChildrenProps) => {
  return (
    <>{children}</>
  )
}

export default Footer;
