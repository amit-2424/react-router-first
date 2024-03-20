import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99",
            "features": [
                "Access to gym facilities during regular hours",
                "Use of basic gym equipment",
                "Limited group fitness classes",
                "Access to locker rooms and showers",
                "Discounts on select gym merchandise"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": "$49.99",
            "features": [
                "24/7 access to gym facilities",
                "Use of advanced gym equipment",
                "Unlimited group fitness classes",
                "Access to sauna and steam room",
                "Access to locker rooms and showers",
                "Discounts on select gym merchandise",
                "Complimentary towel service"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": "$79.99",
            "features": [
                "24/7 access to gym facilities",
                "Use of advanced gym equipment",
                "Unlimited group fitness classes",
                "Access to sauna and steam room",
                "Access to locker rooms and showers",
                "Discounts on select gym merchandise",
                "Complimentary towel service",
                "Personal training sessions (2 sessions/month)",
                "Nutritional counseling sessions (1 session/month)"
            ]
        }
    ]


    return (
        <div className="m-12">
            <h2 className="text-5xl">best price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;