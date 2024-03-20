import axios from "axios";
import { useEffect, useState } from "react";

import { BarChart, Bar,  XAxis, YAxis, Tooltip } from 'recharts';


const Phones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(res=>res.json())
        // .then(data=>setPhones(data.data))

        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: phone.slug.split('-')[1]
                    }
                    return obj;
                })
                console.log(phoneWithFakeData);
                setPhones(phoneWithFakeData);
            })
    }, [])
    console.log(phones);
    return (
        <div>
            <h3 className="text-5xl">Phones: {phones.length}</h3>
            <BarChart width={1200} height={400} data={phones}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Phones;