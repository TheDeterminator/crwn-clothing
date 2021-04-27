import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "./sections.data";

import "./directory.styles.scss";

export default class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: SECTIONS_DATA,
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...sectionProps }) => {
          return <MenuItem key={id} {...sectionProps} />;
        })}
      </div>
    );
  }
}
