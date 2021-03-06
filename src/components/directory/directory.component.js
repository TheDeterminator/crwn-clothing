import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";

import "./directory.styles.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...sectionProps }) => {
      return <MenuItem key={id} {...sectionProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
