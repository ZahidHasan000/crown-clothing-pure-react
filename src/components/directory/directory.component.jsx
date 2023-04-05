import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);


// import React from "react";

// //directory state into redux
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectDirectorySections } from "../../redux/directory/directory.selectors";

// import MenuItem from "../menu-item/menu-item.component";

// import './directory.styles.scss';

// //directory state into redux
// const Directory = ({ sections }) => (
//     <div className='directory-menu'>
//         {sections.map(({ id, ...otherSectionProps }) => (
//             <MenuItem key={id} {...otherSectionProps} />
//         ))}
//     </div>
// );

// //directory state into redux
// const mapStateToProps = createStructuredSelector({
//     sections: selectDirectorySections
// });

// //directory state into redux
// export default connect(mapStateToProps)(Directory);




