import propTypes from "prop-types";

function UserGreeting(props) {

    const userGreeting = <h1>Welcome {props.username}</h1>
    const loginMessage = <h1>Please login to continue</h1>

    return (props.isLoggedIn ? userGreeting : loginMessage);
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
};

UserGreeting.propTypes = {
  isLoggedIn: propTypes.bool,
  username: propTypes.string,
};

export default UserGreeting;