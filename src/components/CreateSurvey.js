import { useState } from 'react';
import { Link } from 'react-router-dom';
import Options from './Options';
import Question from './Question';
import TypeSelector from './TypeSelector';

const CreateSurvey = ({squestions, setSquestions}) => {

    const getRandom = () => {
        return Math.floor(Math.random()*1000)+1;
    }

    const [qtext, setQtext] = useState("");
    const [qtype, setQtype] = useState(0);
    const [options, setOptions] = useState([{uid : getRandom(), value:""}, {uid : getRandom(), value:""}]);

    const addOptions = () => {
        let newOption = {
            uid: getRandom(),
            value: ""
        }
        let updatedOptions = [...options];
        updatedOptions.push(newOption);
        setOptions(updatedOptions);
    }

    const deleteOptions = () => {
        if(options.length>2){
            let updatedOptions = [...options];
            updatedOptions.pop();
            setOptions(updatedOptions);
        }    
    }

    const updatedOptionText = (id, text) => {
        let updatedOptions = [...options];
        let changeIndex = updatedOptions.findIndex(x => x.uid === id);
        updatedOptions[changeIndex].value = text;
        setOptions(updatedOptions);
    }

    const updatequestionText = (text) => {
        let updatedQuestion = text;
        setQtext(updatedQuestion);
    }

    const submit = () => {
        let survey = {
            question : qtext,
            options : options.map((val, index) => {
                return val.value;
            })
        }
        let temp = [...squestions];
        temp.push(survey);
        setSquestions(temp);
    }

    return(
        <> 
            <TypeSelector  qtype={qtype} setQtype={setQtype}/>

            {qtype !== 0? 
            <>
                <Question updatequestionText={updatequestionText}/>
                {options.map((opt, key) =>
                        <Options 
                        key={key}
                        uid={opt.uid}
                        addOptions={addOptions}
                        deleteOptions={deleteOptions}
                        updatedOptionText={updatedOptionText}
                        />
                )}
            </> 
            :
            null
            }
            {options[0].value!=="" && options[1].value!==""?
            <>
                <div className="subBtn m-4">
                    <Link to="./"><button type="submit" className="btn btn-warning m-1" onClick={submit}>Post</button></Link>
                    <Link to="./create"><button type="" className="btn btn-warning m-1"onClick={submit}>Add Question</button></Link>
                </div>
            </>
            :
            null
            }
        </>
    )
}

export default CreateSurvey;