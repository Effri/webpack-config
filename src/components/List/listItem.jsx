/** @format */
import React, { useState, useEffect } from "react";


const times = <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times-circle" className="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path></svg>;
const check = <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" className="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>;


export function ListItem(props) {
  const [isOpen, setOpen] = useState(false);
  const [isComplete, setComplete] = useState(false);

  const itemRef = React.createRef();
  const openRef = React.createRef();

  const onOpenHandler = () => setOpen((open) => !open);
  const onCompleteHandler = () => {
    itemRef.current.classList.toggle('complete');

    if (isComplete === true) itemRef.current.classList.add('unComplete');
    else itemRef.current.classList.remove('unComplete');


    const attrContent = isComplete ? "Отметить как сделанное" : "Отметить как не сделанное"
    openRef.current.setAttribute("aria-label", attrContent);
    openRef.current.setAttribute("data-popup", attrContent);


    setComplete(complete => !complete);
  }

  const openClass = isOpen ? "list__open icon_open" : "list__open";
  const contentClass = isOpen ? "list__content content_open" : "list__content"
  return (
    <div className="list__item" ref={itemRef}>
      <create-time
        class="list__date"
        pretty
        date={props.createDate}
        hour12="false"
        month="short"
        day="2-digit"
        hour="2-digit"
        minute="2-digit"
      />
      <div className="list__title">{props.title}</div>
      <div
        className={openClass}
        onClick={onOpenHandler}
        aria-label="Покаать подробнее"
        data-popup="Покаать подробнее"
      >
        <i className="far fa-chevron-down"></i>
      </div>
      <div
        onClick={onCompleteHandler}
        ref={openRef}
        className="list__complete"
        aria-label="Отметить как сделанное"
        data-popup="Отметить как сделанное"
      >
        {isComplete ? times : check}
      </div>
      <div
        className="list__delete"
        aria-label="Удалить дело"
        data-delete="Удалить дело"
      >
        <i className="far fa-trash-alt"></i>
      </div>
      <div className={contentClass} aria-hidden={!isOpen}>
        {props.content}
      </div>
    </div>
  );
}
