/**
 * Summary: Scroll wrapper using react-scroll
 * @docs https://www.npmjs.com/package/react-scroll
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import React from "react";
import PropTypes from "prop-types";
import { Menu } from "./menu";
import { Events, animateScroll as scroll, scroller } from "react-scroll";

//section  wrapper
class ScrollContainer extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}
//type checking
ScrollContainer.propTypes = {
  children: PropTypes.elementType.isRequired
};
export { ScrollContainer };
