import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({ field, value, label, error, type, onChange, checkUserExists }) => {

  return (
    <div className={classnames("ui form",
                    { 'has-error': error })}>
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
        onBlur={checkUserExists}
        type={type}
        name={field}
        />
        {error && <span className="help-block">{error}</span>}
    </div>
  );
}
TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
