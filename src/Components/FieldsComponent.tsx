import React, { useState, Component, FormEvent, ChangeEvent, useEffect } from 'react';

const FieldsComponent = () => {

    const [cvv, setCVV] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [expirationDateMM, setExpirationDateMM] = useState('');
    const [expirationDateYY, setExpirationDateYY] = useState('');


    const handleCardholderNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('qq');
        setCardholderName(e.target.value);
    };

    const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCardNumber(e.target.value);
    };

    const handleExpirationDateMMChange = (e: ChangeEvent<HTMLInputElement>) => {
        setExpirationDateMM(e.target.value);
    };

    const handleExpirationDateYYChange = (e: ChangeEvent<HTMLInputElement>) => {
        setExpirationDateYY(e.target.value);
    };

    const handleCVVChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCVV(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    const [isFormNotEmpty, setisFormNotEmpty] = useState(false);


useEffect(() => {

    if(cvv.trim() !== '' &&
    cardNumber.trim() !== '' &&
    cardholderName.trim() !== '' &&
    expirationDateMM.trim() !== '' &&
    expirationDateYY.trim() !== '')
    setisFormNotEmpty(true);
    else
    setisFormNotEmpty(false);


    
    }, [cvv, cardNumber, cardholderName, expirationDateMM, expirationDateYY]);


    return (
        <>

            <div className="preview">
                <div className="cvv">{cvv}</div>
                <div className="cardNumber">{cardNumber}</div>
                <div className="CardholderName">{cardholderName}</div>
                <div className="expirationDate">
                    {expirationDateMM}/{expirationDateYY}
                </div>
            </div>



            <form onSubmit={handleSubmit}>
                <label>
                    Cardholder Name:
                    <input
                        value={cardholderName}
                        onChange={handleCardholderNameChange}
                        type="text"
                        placeholder="e.g. Jane Appleseed"
                    />
                    <p className="errorValidation"> </p>
                </label>

                <label>
                    Card Number:
                    <input
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        type="text"
                        placeholder="e.g. 1234 5678 9123 0000"
                    />
                    <p className="errorValidation"> </p>
                </label>

                <label>
                    Exp. Date (MM/YY):
                    <input
                        className="expirationDate"
                        value={expirationDateMM}
                        onChange={handleExpirationDateMMChange}
                        type="text"
                        placeholder="MM"
                    />
                    <input
                        className="expirationDate"
                        value={expirationDateYY}
                        onChange={handleExpirationDateYYChange}
                        type="text"
                        placeholder="YY"
                    />
                    <p className="errorValidation"> </p>
                </label>

                <label>
                    CVV:
                    <input
                        value={cvv}
                        onChange={handleCVVChange}
                        type="text"
                        placeholder="e.g. 123"
                    />
                    <p className="errorValidation"> </p>
                </label>

                <button disabled={!isFormNotEmpty} type="submit">Confirm</button>
            </form>

        </>
    );
};

export default FieldsComponent;
