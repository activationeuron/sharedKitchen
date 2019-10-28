import React, { Component } from "react";
import DateRangePicker from "react-daterange-picker";
// import moment from "moment-range";
import Moment from "moment";
import { connect } from "react-redux";
import { extendMoment } from "moment-range";
import { BookKitchen, fetchBookingInfo } from "../../actions/index";
import "react-daterange-picker/dist/css/react-calendar.css"; // For some basic styling. (OPTIONAL)
const moment = extendMoment(Moment);

class Book extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchBookingInfo(this.props.id);
  }

  constructor(props) {
    super(props);
    this.state = { value: null };
  }

  // moment("20 9 2019","D M YYYY").format()
  handleSelecMy = data => {
    const { start, end } = data;
    // console.log(start.format("YYYY M D"));
    // console.log(end.format("YYYY M D"));
    this.setState({
      value: data
    });

    // range is a moment-range objectasd
  };

  bookKitchensHandler = () => {
    if (!this.state.value) {
      alert("Select Range For booking");
      return;
    }
    const { value } = this.state;
    let start = value.start.format("YYYY M D");
    let end = value.end.format("YYYY M D");
    this.props.BookKitchen(
      { start, end },
      this.props.id,
      this.props.userId[0].id
    );
  };

  render() {
    console.log(this.props);
    const { bookingRecords } = this.props;

    const stateDefinitions = {
      available: {
        color: null,
        label: "Available"
      },
      enquire: {
        color: "#ffd200",
        label: "Enquire"
      },
      unavailable: {
        selectable: false,
        color: "#78818b",
        label: "Unavailable"
      }
    };
    if (!this.props.bookingRecords) {
      return (
        <div>
          <div ClassName="spinner-border" role="status">
            <div>Ami</div>
          </div>
        </div>
      );
    }
    const result = bookingRecords.map(records => {
      return {
        state: "unavailable",
        range: moment.range(moment(records.start), moment(records.end))
      };
    });

    if (this.props.datas === undefined || this.props.dates === null) {
      return (
        <div style={{ margin: "30px 60px" }}>
          <div style={{ margin: "0 10%" }}>
            <DateRangePicker
              firstOfWeek={1}
              numberOfCalendars={3}
              selectionType="range"
              minimumDate={new Date()}
              stateDefinitions={stateDefinitions}
              dateStates={result}
              defaultState="available"
              showLegend={true}
              value={this.state.value}
              onSelect={this.handleSelecMy}
            />
          </div>
          <div
            onClick={this.bookKitchensHandler}
            className="btn primary button"
          >
            Book
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    bookingRecords: state.product.currentBooking,
    userId: state.auth.userData
  };
};

export default connect(
  mapStateToProps,
  { BookKitchen, fetchBookingInfo }
)(Book);
