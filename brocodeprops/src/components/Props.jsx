import propTypes from 'prop-types';

export default function Props(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  );
}
Props.defaultProps = {
  name: 'Anonymous',
  age: 0,
  isStudent: false
};

Props.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool
};