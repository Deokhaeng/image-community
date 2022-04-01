import React from "react";
import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "deokhaeng",
    user_profile:
      "https://boyohaeng-image.s3.ap-northeast-2.amazonaws.com/1301.jpeg",
  },
  image_url:
    "https://boyohaeng-image.s3.ap-northeast-2.amazonaws.com/1301.jpeg",
  contents: "드로잉 애니메이션 입니다!",
  comment_cnt: 10,
  insert_dt: "2021-04-01 10:00:00",
};

export default Post;
