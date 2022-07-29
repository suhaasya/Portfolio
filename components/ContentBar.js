import React from "react";

export default function ContentBar({ child }) {
  return (
    <div className="flex-auto w-10/12  bg-bgblack p-10 leading-10 pt-32 h-full">
      {child}
    </div>
  );
}
