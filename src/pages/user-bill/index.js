import React, { useEffect, useState } from "react";
import { BillItem, BillList, BillWrapper, Item, Total } from "./style";
import axios from "axios";
import { API_URL } from "../constant";
import { useSelector } from "react-redux";
import Flex from "../../shared/components/Flex";
import {Link} from "react-router-dom";

export const UserBill = () => {
  const token = useSelector((state) => state.account.token);
  const [bills, setBills] = useState([]);

  useEffect(() => {
    getBills();
  }, []);

  const getBills = async () => {
    try {
      const res = await axios.get(`${API_URL}/Bill/getListBill`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setBills(res.data.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  const handlePrice = (price, quantity) => {
    let p = price * quantity;
    return p.toLocaleString();
  };

  return (
    <>
      <BillWrapper>
        <div className="container">
          <h1>Danh sách hoá đơn</h1>
          <BillList>
            {bills &&
              bills.map((item, index) => (
                  <Link to={item._id} key={index}>
                    <BillItem>
                      <Item>
                        <div className="image">
                          <img
                              src={item.checkout_result[0].book.image}
                              alt="book"
                          />
                          <Flex
                              flexDirection="column"
                              justifyContent="space-between"
                          >
                            <p className="name">
                              {item.checkout_result[0].book.name}{" "}
                            </p>
                            <p className="price">
                              {item.checkout_result[0].book.price.toLocaleString()}đ
                            </p>
                          </Flex>
                        </div>
                        <div>{item.checkout_result[0].quantity}</div>
                        <div>
                          {handlePrice(
                              item.checkout_result[0].book.price,
                              item.checkout_result[0].quantity
                          )}
                          BNB
                        </div>
                      </Item>
                      <Total>
                        <p>Tổng:</p>
                        <Flex alignItems="center">
                          {/*<p>{checkout ? checkout.price.toLocaleString() : 0}đ</p>*/}
                          <p>{item.price}BNB</p>
                        </Flex>
                      </Total>
                    </BillItem>
                  </Link>
              ))}
          </BillList>
        </div>
      </BillWrapper>
    </>
  );
};
