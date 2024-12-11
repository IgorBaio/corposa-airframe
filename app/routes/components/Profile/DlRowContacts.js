import React from 'react';
import PropTypes from 'prop-types';

const DlRowContacts = ({celular,fixo,email,...props}) => (
    <React.Fragment>
        <dl className="row">
            <dt className={ `col-sm-4 ${ props.leftSideClassName }` }>Celular</dt>
            <dd className={ `col-sm-8 ${ props.rightSideClassName }` }>{celular}</dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Fixo</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>{fixo}</dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Email</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>
                <a href="#">{email}</a>
            </dd>
        </dl>
    </React.Fragment>
)
DlRowContacts.propTypes = {
    leftSideClassName: PropTypes.node,
    rightSideClassName: PropTypes.node
};
DlRowContacts.defaultProps = {
    leftSideClassName: "text-right",
    rightSideClassName: "text-left"
};

export { DlRowContacts };
