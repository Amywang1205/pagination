/* eslint func-names: 0, no-console: 0 */
import React from 'react';
import Select from 'rc-select';
import Pagination from '..';
import '../assets/index.less';
import 'rc-select/assets/index.less';

class App extends React.Component {
  state = {
    pageSize: 10,
  };

  onShowSizeChange = (current, pageSize) => {
    console.log(current);
    this.setState({ pageSize });
  };

  render() {
    return (
      <div style={{ margin: 10 }}>
        <Pagination
          selectComponentClass={Select}
          showSizeChanger
          pageSize={this.state.pageSize}
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={40}
        />
        <Pagination
          selectComponentClass={Select}
          pageSize={this.state.pageSize}
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={50}
        />
        <Pagination
          selectComponentClass={Select}
          pageSize={this.state.pageSize}
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={60}
        />
        <Pagination
          selectComponentClass={Select}
          showSizeChanger={false}
          pageSize={this.state.pageSize}
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={60}
        />
      </div>
    );
  }
}

export default App;
