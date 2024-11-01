
import { useState } from "react"




const MedalForm = (props) =>{
    const {countries, setCountries} = props;
    const [country, setCountry] = useState("");
    console.log(country);
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const [gold, setGold] = useState(0);
    console.log(gold);
    const handleGoldMedalChange = (event) => {
        setGold(event.target.value);
    };

    const [silver, setSilver] = useState(0);
    console.log(silver);
    const handleSilverMedalChange = (event) => {
        setSilver(event.target.value);
    };

    const [bronze, setBronze] = useState(0);
    console.log(bronze);
    const handleBronzeMedalChange = (event) => {
        setBronze(event.target.value);
    };
    

    const addCountry = (event) => {
        event.preventDefault();
        const newCountry = {
        id: new Date().getTime(),
        country: country,
        gold: gold,
        silver: silver,
        bronze: bronze,
        };

        {if (!country) {
                alert("국가명을 입력해주세요");
                return;
            }
        }
        setCountries([...countries,newCountry]);
    };




    const updateCountry = (event) => {
        event.preventDefault();
        const newCountries = countries.map((item) => {
            if(item.country === country) {
                return {country, gold, silver, bronze};
                }
                else {
                    return item;
                }
        })

        setCountries(newCountries);
    };



    return(

<div id="root">
    <div className='contaniner'>
        <h1>2024 파리 올림픽</h1>

        <form className='inputGroup'>
            <div className='inputField'>
            <label>국가명</label>
            <input type="text"
                    onChange={handleCountryChange}
                    value={country}
                    placeholder='국가 입력'></input>
            </div>
            <div className='inputField'>
            <label>금메달</label>
            <input type="number" 
                    onChange={handleGoldMedalChange}
                    value={gold}
            placeholder='0'></input>
            </div>
            <div className='inputField'>
            <label>은메달</label>
            <input type="number" 
                    onChange={handleSilverMedalChange}
                    value={silver}
                    placeholder='0'></input>
            </div>
            <div className='inputField'>
            <label>동메달</label>
            <input type="number" 
                    onChange={handleBronzeMedalChange}
                    value={bronze}
                    placeholder='0'></input>
            </div>
            <div className='buttonGroup'>
                <button className="button" 
                        onClick={addCountry}>국가 추가</button>
                <button className="button"
                        onClick={updateCountry}>업데이트</button>
            </div>
        </form>
    </div>
    </div>
    )
}

export default MedalForm

