import React from "react";
import { Grid, Text } from "../elements";

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid>
          <Text bold size="20px">
            로그인
          </Text>
        </Grid>
        <Grid>아이디 입력</Grid>
        <Grid>비밀번호 입력</Grid>
        <Grid>로그인하기 버튼</Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
