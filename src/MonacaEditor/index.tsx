import React, { FC, useCallback } from "react";
import MonacoEditor from 'react-monaco-editor';

interface EditorProps {
    value: string;
    onChange: (val: string) => void;
}

const Editor: FC<EditorProps> = props => {

    const { value, onChange } = props;

    const options = {
        selectOnLineNumbers: true
    };

    const editorDidMount = useCallback((editor, monaco) => {
        console.log('editorDidMount', editor);
        editor.focus();
    }, []);


    return (
        <div style={{
            position: "absolute",
            top: "165px",
            right: "50px",
            bottom: "0",
            left: "595px",
            height: "589px",
            width: "790px"
        }}>

            <MonacoEditor
                width="800"
                height="600"
                language="c"
                theme="vs-dark"
                value={value}
                options={options}
                onChange={onChange}
                editorDidMount={editorDidMount}
            />
        </div>

    );

}

export default Editor;
