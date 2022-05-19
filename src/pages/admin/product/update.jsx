import React, { useEffect, useState } from "react";
import { Form, LoginWrapper } from "../../signup/style";
import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";
import { Link, useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constant";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

export const UpdateBook = () => {
    const [firstName, setFirstName] = useState("");
    const [price, setPrice] = useState("");
    const [sale, setSale] = useState("");
    const [image, setImage] = useState("");
    const [author, setAuthor] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("")
    const [data, setData] = useState();
    
  const [category, setCategory] = useState("");
  const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.account.token);
    const getBookById = () => {
        axios.get(`${API_URL}/Book/getListBook?_id=${id}`)
          .then(function (response) {
            console.log(response);
            setData(response.data.data.result[0]);
            setAuthor(response.data.data.result[0].author);
            setPrice(response.data.data.result[0].price);
            setCategory(response.data.data.result[0].category[0]);
            setPrice(response.data.data.result[0].price);
            setQuantity(response.data.data.result[0].quantity);
            setName(response.data.data.result[0].name);
            setDescription(response.data.data.result[0].description);
            setSale(response.data.data.result[0].sale);
            setImage(response.data.data.result[0].image);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    const updateBook = async (body) => {
        try {
            const res = await axios.put(`${API_URL}/Book/update`, body, {
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
        // if(validate()){
        const res = await updateBook({
            _id:id,
            name: name,
            author: author,
            category: [category],
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
    useEffect(()=>{getBookById()},[]);

    return (
        <div className="container">
            <LoginWrapper flexDirection={"column"} alignItems={"center"}>
                <h1>Sửa sách</h1>
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

                    <Button onClick={addBooks}>Cập nhật sách</Button>
                </Form>
            </LoginWrapper>
        </div>
    );
};
