import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NativeBaseProvider, ScrollView } from "native-base";
import Coupon from "../components/Coupon";
import Loader from "../components/Loader";
import Constants from "expo-constants";

const { manifest } = Constants;

const api = `http://${manifest.debuggerHost.split(":")[0]}:3000/api/coupons`;

const CouponJour = ({ params }) => {
  const [coupons, setCoupons] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setCoupons(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(coupons);
  }, []);

  return (
    <NativeBaseProvider>
      <ScrollView>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {coupons.map((coupon) => (
              <Coupon
                key={coupon.id}
                code={coupon.code}
                cote={coupon.cote}
                matchs={coupon.nb_match}
                date={coupon.date_expiration}
              />
            ))}
          </>
        )}
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default CouponJour;
