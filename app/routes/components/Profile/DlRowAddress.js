import React from 'react';
import PropTypes from 'prop-types';

const DlRowAddress = ({logradouro, cidade,estado,cep  , ...props}) => (
    <React.Fragment>
        <dl className="row">
            <dt className={ `col-sm-5 ${ props.leftSideClassName }` }>Logradouro</dt>
            <dd className={ `col-sm-7 ${ props.rightSideClassName }` }>{logradouro}</dd>
            <dt className={ `col-sm-5 ${ props.leftSideClassName }` }>Cidade</dt>
            <dd className={ `col-sm-7 ${ props.rightSideClassName }` }>{cidade}</dd>
            <dt className={ `col-sm-5 ${ props.leftSideClassName }` }>Estado</dt>
            <dd className={ `col-sm-7 ${ props.rightSideClassName }` }><a href="#">{estado}</a></dd>
            <dt className={ `col-sm-5 ${ props.leftSideClassName }` }>CEP</dt>
            <dd className={ `col-sm-7 ${ props.rightSideClassName }` }>{cep}</dd>
        </dl>
    </React.Fragment>
)
DlRowAddress.propTypes = {
    leftSideClassName: PropTypes.node,
    rightSideClassName: PropTypes.node
};
DlRowAddress.defaultProps = {
    leftSideClassName: "",
    rightSideClassName: ""
};

export { DlRowAddress };
