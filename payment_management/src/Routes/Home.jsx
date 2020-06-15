import React from "react";
import { connect } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { users } = this.props;
    const { user } = this.state;
    // console.log(users.userName, "12");
    return (
      <>
        <h1>Select users</h1>
        <div className="input-group mb-3">
          <select
            className="custom-select   text-dark"
            name="user"
            onChange={this.handleChange}
            id=""
            style={{ padding: 1, margin: 30 }}
          >
            <option value="">None</option>
            {users.map(item => (
              <option key={item.userName}>{item.userName}</option>
            ))}
          </select>
          <br />
          <br />

          <Link
            className="input-group-text bg-dark text-light"
            style={{ padding: 10, margin: 25 }}
            to={`/users/${user}`}
          >
            Show
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

// const mapDispatchToProps = dispatch => ({
//   addUser: payload => dispatch(addUser(payload))
// });
export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(Home);
