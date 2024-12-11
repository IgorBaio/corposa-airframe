import React from "react"
import { faker } from "@faker-js/faker";

import { AvatarImage } from "../../components/Avatar/AvatarImage";
import { randomAvatar } from "../../utilities";


export const ProfileClient = ({
  avatar, 
  firstName,
  lastName,
  jobTitle,
  city
}) => {
 
  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <AvatarImage
          size="lg"
          src={randomAvatar()}
          
        />
      </div>
      <div className="mb-4 text-center">
        <a className="h6 text-decoration-none" href="#">
          {firstName || faker.person.firstName()} {lastName || faker.person.lastName()}
        </a>
        <div className="text-center mt-2">{jobTitle || faker.person.jobTitle()}</div>
        <div className="text-center">
          <i className="fa fa-map-marker mr-1"></i>
          {city || faker.location.city()}
        </div>
      </div>
    </>
  );
};

// ProfileClient.propTypes = {
//   avatar: PropTypes.string,
//   firstName: PropTypes.string,
//   lastName: PropTypes.string,
//   jobTitle: PropTypes.string,
//   city: PropTypes.string,
// }