import React from "react";
import { NativeBaseProvider, ScrollView } from "native-base";
import Coupon from "../components/Coupon";

const CouponJour = ({ params }) => (
  <NativeBaseProvider>
    <ScrollView>
      <Coupon />
      <Coupon />
      <Coupon />
      <Coupon />
      <Coupon />
      <Coupon />
    </ScrollView>
  </NativeBaseProvider>
);

export default CouponJour;
