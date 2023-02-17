import React from "react";
import { Grid } from "@/components/atoms";
import { DetailBox } from "@/components/molecules";

const TempDetail = () => {
  return (
    <Grid gridClasses="grid-cols-2 gap-4" className="w-full">
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
    </Grid>
  );
};

export default TempDetail;
