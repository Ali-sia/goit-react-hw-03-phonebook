import PropTypes from 'prop-types';
import { EnterLabel, EnterInput } from '../App.styled';

const Filter = ({ filtrValue, onChangeFilter }) => {
  return (
    <>
      <EnterLabel>
        Filter:
        <EnterInput type="text" value={filtrValue} onChange={onChangeFilter} />
      </EnterLabel>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filtrValueid: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
