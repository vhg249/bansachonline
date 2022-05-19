import React, { useState } from "react";
import { Form, LoginWrapper } from "../../signup/style";
import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constant";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

export const AddBook = () => {
    const [firstName, setFirstName] = useState("Nguyen");
    const [price, setPrice] = useState("12000");
    const [sale, setSale] = useState("vhg");
    const [image, setImage] = useState("https://cf.shopee.vn/file/4cc9fc9b2129728b8b1129ed79a309af");
    const [author, setAuthor] = useState("An Cơ");
    const [name, setName] = useState("Truyện doremon");
    const [quantity, setQuantity] = useState("0123456789");
    const [description, setDescription] = useState("Một chú mèo máy sinh ngày 3 tháng 9 năm 2112. Doraemon đã cưỡi cỗ máy thời gian đi ngược từ thế kỷ 22 về thế kỷ 20 để làm bạn với Nobita. Chiếc túi 4 chiều trước bụng Doraemon chứa đủ loại bảo bối thần kỳ, có thể cứu nguy cho Nobita mỗi khi cậu bạn hậu đậu này gặp rắc rối.")

  const [category, setCategory] = useState("Truyện tranh");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.account.token);

    const postBook = async (body) => {
        try {
            const res = await axios.post(`${API_URL}/Book/insert`, body, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            return res.data.data;
        }
        catch (err) {
            console.log(err);
            toast.error(err.response.data.message)
            return null;
        }
    };



    //   const validate = () => {
    //     if(email === "" ||category==="" || password === "" || confirmPassword === "" || phoneNumber === "" || address === "" || username === "" || firstName === "" || lastName === ""){
    //       toast.error("Vui lòng điền đầy đủ thông tin");
    //       return false;
    //   }
    //   else return true;
    // }

    const addBooks = async () => {
        console.log("add book");
        // if(validate()){
        const res = await postBook({
            name: name,
            author: author,
            category: category,
            description: description,
            image: image,
            price: price,
            quantity: quantity,
            sale: sale
        })
        if (res) {
            toast.success("Success");
            navigate("/manager/product");
        }
        // }
    }

    return (
        <div className="container">
            <LoginWrapper flexDirection={"column"} alignItems={"center"}>
                <h1>thêm sách</h1>
                <Form>
                    <Input
                        label="Name"
                        type="text"
                        placeholder="Nhập tên"
                        required={true}
                        value={name}
                        setValue={setName}
                    />
                    <Input
                        label="Author"
                        type="text"
                        placeholder="Nhập tác giả"
                        required={true}
                        value={author}
                        setValue={setAuthor}
                    />
                    <Input
                        label="Category"
                        type="text"
                        placeholder="Nhập category"
                        required={true}
                        value={category}
                        setValue={setCategory}
                    />
                    <Input
                        label="Description"
                        type="text"
                        placeholder="Nhập miêu ta"
                        required={true}
                        value={description}
                        setValue={setDescription}
                    />
                    <Input
                        label="Image"
                        type="string"
                        placeholder="Nhập url"
                        required={true}
                        value={image}
                        setValue={setImage}
                    />

                    <Input
                        label="Price"
                        type="number"
                        placeholder="Nhập giá"
                        required={true}
                        value={price}
                        setValue={setPrice}
                    />
                    <Input
                        label="Quantity"
                        type="number"
                        placeholder="Nhập số lượng"
                        required={true}
                        value={quantity}
                        setValue={setQuantity}
                    />

                    <Input
                        label="Sale"
                        type="String"
                        placeholder="Nhập sale"
                        required={false}
                        value={sale}
                        setValue={setSale}
                    />

                    <Button onClick={addBooks}>Thêm sách</Button>
                </Form>
            </LoginWrapper>
        </div>
    );
};
