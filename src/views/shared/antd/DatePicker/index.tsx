"use client";
import clsx from "clsx";
import { DatePicker as AntdDatePicker } from 'antd';
import type { DatePickerProps } from "antd";

const DatePicker = ({
  className,
  ...rest
}: DatePickerProps) => {

  return (
    <AntdDatePicker
      className={clsx("input-date-picker", className)}
      suffixIcon={<i className="icon icon-calendar" />}
      allowClear={{ clearIcon: <i className="icon icon-cross" /> }}
      {...rest}
    />
  )
};

export default DatePicker;
