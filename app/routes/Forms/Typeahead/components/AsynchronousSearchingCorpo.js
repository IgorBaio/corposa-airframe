import React from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

import { CustomInput, FormGroup } from "../../../../components";
import { GithubMenuItem } from "./GithubMenuItem";
import { makeAndHandleRequest } from "./utils";

export class AsyncSearch extends React.Component {
  state = {
    allowNew: false,
    isLoading: false,
    multiple: false,
    options: [],
  };

  render() {
    console.log("this.props", this.props);
    return (
      <React.Fragment>
        <AsyncTypeahead
          {...this.state}
          className="w-100"
          labelKey="login"
          minLength={3}
          options={this.props.options}
          onSearch={this._handleSearch}
          // onSearch={this.props.onSearch}
          placeholder="Search for a Github user..."
          renderMenuItemChildren={(option) => (
            <GithubMenuItem key={option.id} user={option} />
          )}
        />
        {/* <FormGroup className="mt-2">
                    {this._renderCheckboxes()}
                </FormGroup> */}
      </React.Fragment>
    );
  }

  _renderCheckboxes() {
    const checkboxes = [
      { label: "Multi-Select", name: "multiple" },
      { label: "Allow custom selections", name: "allowNew" },
    ];

    return checkboxes.map(({ label, name }) => (
      <CustomInput
        checked={this.state[name]}
        key={name}
        name={name}
        onChange={this._handleChange}
        type="checkbox"
        id={`control-${name}`}
        label={label}
      />
    ));
  }

  _handleChange = (e) => {
    const { checked, name } = e.target;
    this.setState({ [name]: checked });
  };

  _handleSearch = (query) => {
    console.log('query', query)
    this.setState({ isLoading: true });

    // this.props.onSearch(query)
    let clientsAux = [];
    this.props.clients.filter((client) => {
      // console.log('client?.nome?.includes(text)', client?.nome?.includes(text))
      // console.log('client?.sobrenome?.includes(text)', client?.sobrenome?.includes(text))
      // console.log('client?.celular?.includes(text)', client?.celular?.includes(text))||
      // console.log('client?.celular?.includes(text)', client?.email?.includes(text))
      if (
        client?.nome?.includes(query) ||
        client?.sobrenome?.includes(query) ||
        client?.celular?.includes(query) ||
        client?.email?.includes(query)
      ) {
        clientsAux.push(client);
        console.log("clientsAux", clientsAux);
      }
      this.props.setClientsFilter(clientsAux);
      this.setState({
        isLoading: false,
        options: clientsAux,
      });
    });
    // makeAndHandleRequest(query)
    //     .then(({options}) => {
    //         this.setState({
    //             isLoading: false,
    //             options,
    //         });
    //     });
  };
}
