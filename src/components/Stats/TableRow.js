import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({
  label, link, value,
}) => (
  <tr>
    <td width="70%">{label}</td>
    <td>{link ? <a href={link} target="noopener">{value}</a> : value}</td>
  </tr>
);

TableRow.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
  ]),
};

TableRow.defaultProps = {
  link: null,
  value: null,
};

export default TableRow;
