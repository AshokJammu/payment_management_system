import React from "react";
import { connect } from "react-redux";
import { addIncome } from "../redux/action";
import { v4 as uuidv4 } from "uuid";
// import { useDispatch } from "react-redux";
// import { useState } from "react";

export class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      amount: 0,
      id: uuidv4(),
      categories: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // onSubmit = e => {
  //   console.log(this.state.amount);
  //   e.preventDefault();
  //   this.setState = {
  //     id: Math.floor(Math.random() * 100000000),
  //     text: this.state.text,
  //     amount: this.state.amount
  //   };
  // };

  render() {
    const { text, amount, categories } = this.state;
    const { category, addIncome, budget } = this.props;
    // console.log(budget);
    // console.log(text);
    const amounts = budget.map(item => item.amount);
    //amounts = Number(amounts);
    const total = amounts.reduce((acc, item) => (acc += Number(item)), 0);
    console.log(total, "total");
    return (
      <div className="row d-flex justify-content-center mt-3">
        <div
          className="col-sm-6"
          style={{
            boxShadow:
              "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
            borderTop: "5px solid #568265"
          }}
        >
          <h3 className="text-center text-success">Total Amount {total}$</h3>
          <div className="form-group">
            <label htmlFor="">Text</label>
            <input
              type="text"
              value={text}
              // onChange={e => setText(e.target.value)}
              onChange={e => this.setState({ text: e.target.value })}
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Text"
            />
            <small className="form-text text-muted">
              Provide Your area of Income or Expense
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              value={amount}
              // onChange={e => setAmount(e.target.value)}
              onChange={e => this.setState({ amount: e.target.value })}
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Amount"
            />
            <select
              name="categories"
              onChange={this.handleChange}
              id=""
              style={{ padding: 10, margin: 30 }}
            >
              <option value="">None</option>
              {category.map(item => (
                <option key={item.userName}>{item.categoryName}</option>
              ))}
              {/* {category?.map(item => (
            <ul className="list-group list-group-flush">
              <li className="list-group-item font-weight-bold" key={uuidv4()}>
                {item.categoryName}
              </li>
            </ul>
          ))} */}
            </select>
            <small className="form-text text-muted">
              (-) is for Expense & (+) is for Income
            </small>
          </div>
          <button
            className="btn btn-dark"
            style={{ padding: 10 }}
            onClick={() => addIncome(this.state)}
          >
            Add
          </button>

          {/* <button
            className="btn btn-dark"
            style={{ padding: 10, margin:25 }}
            onClick={() => addIncome(this.state)}
          >
            Reduce
          </button> */}
          <div
            className="row d-flex justify-content-center"
            style={{ padding: 20 }}
          >
            <div className="col-sm-8 d-flex justify-content-around">
              <p className="display-5 text-muted" />
              spends
              <span className="text-info">
                {budget?.map(item => (
                  <>
                    <div>
                      {/* <p className="text-success">{item.text}</p> */}
                      <p className="text-primary"> {item.text}</p>
                    </div>
                  </>
                ))}
              </span>
              <p className="display-5">
                <span className="text-info">
                  {budget?.map(item => (
                    <>
                      <div>
                        {/* <p className="text-success">{item.text}</p> */}
                        <p className="text-primary"> {item.categories}</p>
                      </div>
                    </>
                  ))}
                </span>
              </p>
              <p className="display-5">
                <span className="text-info">
                  {budget?.map(item => (
                    <>
                      <div>
                        {/* <p className="text-success">{item.text}</p> */}
                        <p className="text-primary"> {item.amount}$</p>
                      </div>
                    </>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budget: state.budget,
  category: state.category
});
const mapDispatchToProps = dispatch => ({
  addIncome: payload => dispatch(addIncome(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTransaction);
