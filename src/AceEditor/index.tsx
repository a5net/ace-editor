import React, { FC, useCallback, Component } from "react";
import AceEditor from "react-ace-builds";
import 'bootstrap/dist/css/bootstrap.min.css';
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

interface EditorProps {
    saveFunction: any
}

type SaveFunction = (value: string, event: any) => void;


const Editor = (saveFunction: any) => {
    // constructor(props : any) {
    //     super(props)

    //     this.state = {
    //         callback_function: this.props.saveFunction,
    //     }

    //     this.saveCode = this.saveCode.bind(this);
    // }

    const saveCode = useCallback((value: string, event: any) => {
        saveFunction(value, event);
    }, []);

    const empty = (value: string) => {}

    return (
        <AceEditor
            mode="c_cpp"
            theme="monokai"
            enableBasicAutocompletion={true}
            onChange={empty}
            name="ace-editor-element"
            ref="aceEditor"
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
