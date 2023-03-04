import { Button } from 'antd'
import React, { FC, ReactNode } from 'react'
import { ButtonProps } from 'antd/lib/button'
export type ButtonOtherType = 'secondary'
interface IProps extends ButtonProps {
  children?: ReactNode
  othertype?: ButtonOtherType
}

const ButtonUiKit: FC<IProps> = ({ children, ...props }) => {
  if (props.othertype) {
    props.type = 'primary'
  }
  return <Button {...props}>{children}</Button>
}

export default ButtonUiKit
