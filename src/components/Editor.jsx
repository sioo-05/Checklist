import './Editor.css'
import {useState} from 'react';

const Editor = ({onCreate}) => {

    const [data, setData] = useState("");

    const onChange = (e) => {
        setData(e.target.value);
    }
    const onSubmit = () =>{
        if (data ==="") {
            return;
        }
        onCreate(data)
        setData("")
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    }

    return (
        <div className="Editor">
            <input onKeyDown = {handleKeyDown} onChange = {onChange} value={data} type="text" placeholder="새로운 Todo..."/>
            <button onClick={onSubmit}>추가</button>
        </div>
    )
};

export default Editor;