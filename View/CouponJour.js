import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NativeBaseProvider, ScrollView } from "native-base";
import Coupon from "../components/Coupon";
import Loader from "../components/Loader";
import Constants from "expo-constants";
import { RefreshControl } from "react-native";

const { manifest } = Constants;

const api = `http://${manifest.debuggerHost.split(":")[0]}:3000/api/coupons`;

const CouponJour = ({ params }) => {
  const [coupons, setCoupons] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(api)
      .then((res) => {
        setLoading(false);
        setCoupons(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
    console.log(coupons);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }, [refreshing]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NativeBaseProvider>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
