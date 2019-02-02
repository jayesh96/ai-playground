import React, { Component, Fragment } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { addMessage } from "./actions";
import ChatBox from "../chatBox";
import "../../scripts/main";
const regex = /^[0-9]+$/;


class RightPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      message: "",
      messageCount: 0,
      loading: false
    };
    this.messageSubmit = this.messageSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ code: nextProps.code });
  }

  async messageSubmit(e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      if (this.state.code.length === 0) {
        alert("Please Pass a function");
        this.setState({ message: "" });
      } else {
        this.setState({
          messageCount: this.state.messageCount + 1,
          message: "",
          loading: true
        });
        this.props.addMessage(e.target.value);
        await this.evaluateCode(this.state.code, e.target.value);
        let scrollHeight = document.getElementById("chat-box");
        scrollHeight.scrollTop = scrollHeight.scrollHeight;
      }
    }
  }

  async evaluateCode(code, message) {
    try {
      if (message.match(regex)) {
        // eslint-disable-next-line
        let value = await eval(`(${code})(${message})`);
        this.props.addMessage(value);
        this.setState({ loading: false });
        return value;
      } else {
        const _message = message.replace(/"/g, "'");
        // eslint-disable-next-line
        let value = await eval(`(${code})("${_message}")`);
        this.props.addMessage(value);
        this.setState({ loading: false });
        return value;
      }
    } catch (err) {
      this.props.addMessage("Oops! " + err.toString());
      this.setState({ loading: false });
      return "NIL";
    }
  }

  render() {
    const { messageCount, message, loading } = this.state;
    const { messages } = this.props;
    return (
      <Fragment>
        <ChatBox
          code={this.props.code}
          messageCount={messageCount}
          messages={messages}
          loading={loading}
        />
        <div className={"messageBox"}>
          <div className={"Rectangle-3"}>
            <div style={{ width: "100%" }}>
              <input
                type="text"
                disabled={loading ? true : false}
                value={message}
                onChange={e => {
                  this.setState({ message: e.target.value });
                }}
                placeholder="Your Message Here"
                className={"Type-message-here"}
                onKeyPress={this.messageSubmit}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    code: state.saveCode.get("active")["code"],
    messages: state.addMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: payload => {
      dispatch(addMessage(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightPanel);
