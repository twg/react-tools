import React, { PropTypes } from "react";
import css from "./style.css";

const Tooltip = props => {
  const tooltipClasses = [css.tooltip].join(" ");

  const popoverClasses = [css.popover, props.openLeft ? css.openLeft : ""].join(
    " "
  );

  return (
    <div className={tooltipClasses}>
      <span className={css.trigger}>
        {props.children}
      </span>
      <div className={popoverClasses}>
        {props.content}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  /**
   * This is the content of the tooltip itself.
   */

  content: PropTypes.node,
  /**
   * This is the content which, on hover, will cause a tooltip to be displayed.
   */

  children: PropTypes.node,
  /**
   * Sets the tooltip to open to the left instead of above
   */
  openLeft: PropTypes.bool
};

export default Tooltip;
