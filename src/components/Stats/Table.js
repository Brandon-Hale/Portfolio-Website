import React from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';

const Table = ({ data }) => (
  <table>
    <tbody>
      {data.map((pair) => (
        <TableRow
          key={pair.label}
          label={pair.label}
          link={pair.link}
          value={pair.value}
        />
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.number,
        PropTypes.string,
      ]),
    }),
  ).isRequired,
};

export default Table;
