import React from "react";
import { connect } from "react-redux";
import { addIncome } from "../redux/action";
import { v4 as uuidv4 } from "uuid";

export class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      amount: 0,
      id: uuidv4(),
      categories: "",
      date: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { text, amount, date } = this.state;
    const { category, addIncome, budget } = this.props;
    // console.log(budget);
    // console.log(text);
    const amounts = budget.map(item => item.amount);
    const amos = budget.map(item =>
      item.text === "Expense" ? "text-danger" : "text-success"
    );
    console.log(amos);
    //amounts = Number(amounts);
    const total = amounts.reduce((acc, item) => (acc += Number(item)), 0);
    console.log(total, "total");
    return (
      <div className="row d-flex bg-dark justify-content-center mt-3">
        <div
          className="col-sm-6"
          style={{
            boxShadow:
              "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
            borderTop: "5px solid #568265"
          }}
        >
          <h3 className="row d-flex text-light justify-content-center mt-3">
            Total Amount {total}$
          </h3>
          <div className="form-group text-light">
            <label htmlFor="">Select category</label>
            <select
              name="categories"
              onChange={this.handleChange}
              id=""
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Text"
              // style={{ padding: 10, margin: 30 }}
            >
              <option value="">None</option>
              {category.map(item => (
                <option key={item.userName}>{item.categoryName}</option>
              ))}
            </select>
          </div>
          <div className="form-group text-light">
            <label htmlFor="" />
            {/* <input
              type="text"
              value={text}
              // onChange={e => setText(e.target.value)}
              onChange={e => this.setState({ text: e.target.value })}
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Text"
            /> */}
            <select
              type="text"
              value={text}
              // onChange={e => setText(e.target.value)}
              onChange={e => this.setState({ text: e.target.value })}
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Text"
            >
              <option>Income</option>
              <option>Expense</option>
            </select>
            <small className="form-text text-muted text-light">
              Provide Your area of Income or Expense
            </small>
          </div>
          <div className="form-group text-light">
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
            <small className="form-text text-muted">
              (-) is for Expense & (+) is for Income
            </small>
          </div>

          <div className="form-group text-light">
            <label htmlFor="">Date</label>
            <input
              type="date"
              value={date}
              // onChange={e => setAmount(e.target.value)}
              onChange={e => this.setState({ date: e.target.value })}
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Amount"
            />
            <small className="form-text text-muted">choose date</small>
          </div>
          <button
            className="btn btn-dark"
            style={{ padding: 10 }}
            onClick={() => addIncome(this.state)}
          >
            Add
          </button>
          <div
            className="row d-flex justify-content-center"
            style={{ padding: 20 }}
          >
            <table className="table table-striped table-dark mt-3">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Categories</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Type</th>
                  <th scope="col">Day</th>
                  {/* <th scope="col">Category</th> */}
                </tr>
              </thead>
              <tbody>
                {budget &&
                  budget.map((item, index) => {
                    return (
                      <tr key={uuidv4()}>
                        <th scope={index + 1}>1</th>
                        <td>{item.categories}</td>
                        <td>{item.amount}</td>
                        <td
                          className={
                            item.text === "Expense"
                              ? "text-danger"
                              : "text-success"
                          }
                        >
                          {item.text}
                        </td>
                        <td>{item.date}</td>
                        {/* <td>{item.Category}</td> */}
                      </tr>
                    );
                  })}
              </tbody>
            </table>

            {/* <div className="col-sm-8 d-flex justify-content-around">
              <p className="display-5 text-muted" />
              spends
              <span className="text-info">
                {budget?.map(item => (
                  <>
                    <div>
                      <p className="text-success">{item.text}</p>
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
                        <p className="text-success">{item.text}</p>
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
                        <p className="text-success">{item.text}</p>
                        <p className="text-primary"> {item.amount}$</p>
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
                        <p className="text-success">{item.text}</p>
                        <p className="text-primary"> {item.date}</p>
                      </div>
                    </>
                  ))}
                </span>
              </p>
            </div> */}
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
