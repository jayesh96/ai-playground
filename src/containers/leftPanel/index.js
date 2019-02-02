import React, { Component, Fragment } from "react";
import CodeEditor from "../../components/codeEditor";
import { Flex } from "reflexbox";
import { connect } from "react-redux";
import { saveCode } from "./actions";
import Tabs from "../../components/tabs";
import Image from "../../components/image";
import Button from "../../components/button";

import "./styles.css";

class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCodeUpdated: false,
      code: "",
      tabsCount: ["Tab1"],
      activeTab: 0
    };
    this.onCodeChange = this.onCodeChange.bind(this);
    this.changeActiveTab = this.changeActiveTab.bind(this);
    this.applyChangeButtonClick = this.applyChangeButtonClick.bind(this);
  }

  onCodeChange(code, activeTab) {
    this.setState({ isCodeUpdated: true });
    this.props.onApplyChangesClicked(`Tab${activeTab}`, code, activeTab, false);
  }

  changeActiveTab(tabIndex) {
    this.setState({ activeTab: tabIndex,isCodeUpdated:false });
  }

  applyChangeButtonClick() {
    let { code } = this.props.saveCode.get(`Tab${this.state.activeTab}`) || {
      code: "",
      tab: "0"
    };
    this.setState({ isCodeUpdated: false });
    this.props.onApplyChangesClicked(
      "active",
      code,
      this.state.activeTab,
      true
    );
  }

  tabsContainer() {
    const { tabsCount, activeTab } = this.state;
    return (
      <Fragment>
        <Tabs
          tabsCount={tabsCount}
          activeTab={activeTab}
          changeActiveTab={this.changeActiveTab}
        />
        <span
          className={"addTab"}
          onClick={() => {
            this.setState({
              tabsCount: [...this.state.tabsCount, `Tab${tabsCount.length + 1}`]
            });
          }}
        >
          <Image classname={"addTabIcon"} src="./icons/shape@3x.png" />
        </span>
      </Fragment>
    );
  }

  render() {
    const { isCodeUpdated, activeTab } = this.state;
    let { code } = this.props.saveCode.get(`Tab${activeTab}`) || {
      code: "",
      tab: "0"
    };
    return (
      <Flex column>
        <div className={"tabs"}>
          {this.tabsContainer()}
          <span style={{ float: "right" }}>
            <Button
              classname={
                isCodeUpdated ? "applyChangeActive" : "applyChangeDisabled"
              }
              disabled={isCodeUpdated ? false : true}
              applyChangeButtonClick={this.applyChangeButtonClick}
            >
              <Image
                src={"./icons/refresh@3x.png"}
                classname={"applyChangeButtonIcon"}
              />
              Apply Changes
            </Button>
          </span>
        </div>
        <div className={"editorContainer"}>
          <CodeEditor
            onCodeChange={this.onCodeChange}
            activeTab={activeTab}
            code={code}
          />
        </div>
      </Flex>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onApplyChangesClicked: (key, code, activeTab, active) => {
      dispatch(saveCode(key, code, activeTab, active));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftPanel);
