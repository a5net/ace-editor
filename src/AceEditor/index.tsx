import React, { FC } from "react";
import AceEditor from "react-ace-builds";
import 'bootstrap/dist/css/bootstrap.min.css';
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

interface EditorProps {
    value: string;
    onChange: (val: string) => void;
}

const Editor:FC<EditorProps> = props => {

    const { value, onChange } = props;

    return (
        <AceEditor
            mode="c_cpp"
            theme="monokai"
            enableBasicAutocompletion={true}
            onChange={onChange}
            value={value}
            name="ace-editor-element"
            style={{
                position: "absolute",
                top: "165px",
                right: "50px",
                bottom: "0",
                left: "595px",
                height: "589px",
                width: "790px"
            }}
        />
    );

}

export default Editor;
