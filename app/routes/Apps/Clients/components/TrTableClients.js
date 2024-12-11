import React from "react";
import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";

import {
  Badge,
  Avatar,
  CustomInput,
  UncontrolledTooltip,
  AvatarAddOn,
  Media,
} from "./../../../../components";

import { randomArray, tag } from "./../../../../utilities";
import { rowActivated } from "../styles";

const status = ["secondary", "success", "warning", "danger"];

const TrTableClients = ({
  id,
  setSelected,
  name,
  email,
  celular,
  labels,
  selected,
  client,
  ...props
}) => {

  console.log('selected?.id', selected?.id)
return (
  <React.Fragment>
    <tr style={id === selected?.id ? rowActivated: {}} onClick={()=>setSelected(client)}>
     
      {/* <td className="align-middle">
        <a href="#" id={`trTableClientsTooltip-${props.id}`}>
          <i className="fa fa-fw fa-star-o"></i>
        </a>
        <UncontrolledTooltip
          placement="top"
          target={`trTableClientsTooltip-${props.id}`}
        >
          Add To Favorites
        </UncontrolledTooltip>
      </td> */}
      <td className="align-middle">
        <Media>
          <Media left className="align-self-center mr-3">
            <Avatar.Image
              size="md"
              src="http://bs4.webkom.co/img/avatars/2.jpg"
              addOns={[
                <AvatarAddOn.Icon
                  className="fa fa-circle"
                  color="white"
                  key="avatar-icon-bg"
                />,
                // <AvatarAddOn.Icon
                //   className="fa fa-circle"
                //   color={randomArray(status)}
                //   key="avatar-icon-fg"
                // />,
              ]}
            />
          </Media>
          <Media body>
            <a className="mt-0 d-flex text-decoration-none" href="#">
              {name} 
            </a>
            {/* <span>{faker.person.jobTitle()}</span> */}
          </Media>
        </Media>
      </td>
      <td className="align-middle">{email}</td>
      <td className="align-middle">{celular}</td>
      <td className="align-middle text-right">
        {labels?.split(",").map(label=>
        <Badge pill color={randomArray(tag)}>
          {label}
        </Badge>
          )}
      </td>
    </tr>
  </React.Fragment>
);}
TrTableClients.propTypes = {
  id: PropTypes.node,
};
TrTableClients.defaultProps = {
  id: "1",
};

export { TrTableClients };
