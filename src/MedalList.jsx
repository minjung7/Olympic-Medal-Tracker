
const MedalList = (props) =>{
    const {countries, setCountries} = props;

    const deleteCountryhander = (id) => {
        const deleteCountry = countries.filter((country) => {
            return country.id !==id;
        });
        setCountries(deleteCountry);
    }

    return (
        <div>
            {countries.length>0 &&
            <div className="medalResult">
                    <p>국가명</p>
                    <p>금메달</p>
                    <p>은메달</p>
                    <p>동메달</p>
                    <p>삭제하기</p>

            </div>
}   
        
            {countries.sort((a,b) => b.gold - a.gold ).map(function (country) {
                return <div>
                    <div className="medalResult">
                    <p>{country.country}</p>
                    <p>{country.gold}</p>
                    <p>{country.silver}</p>
                    <p>{country.bronze}</p>

                    
                    <button type="button"
                            onClick={() => deleteCountryhander(country.id)}
                            className="addButton"
                    >삭제</button>
                    </div>
                </div>
            })}

        </div>
    )}
    
    export default MedalList



