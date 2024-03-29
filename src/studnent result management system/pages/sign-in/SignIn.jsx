import React from "react";
import Sign from "../../components/sign/Sign";
const SignIn = () => {
  return (
    <div>
      <Sign
        redirectedTo="/sign-up"
        redirectionText="If you aren't signed-up"
        submitText="sign-in"
        type={"SIGN-IN"}
      />
    </div>
  );
};

export default SignIn;
