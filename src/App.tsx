import Editor from "./AceEditor";
import React, { Component, useCallback, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    // constructor(props: any) {
    //     super(props)

    //     this.state = {
    //         code: ''
    //     }

    //     this.compile = this.compile.bind(this);
    //     this.saveChanges = this.saveChanges.bind(this);
    // }
    const [state, setState] = useState('');

    const compile = () => {
        let code = state;
        console.log("Code: ", code);
    }

    const onSaveChanges = useCallback((value: string, event: any) => {
        console.log("onSaveChanges: ", value);
        setState(value);
    }, []);

    return(
            <div className = "App" >
                <Editor
                    saveFunction={onSaveChanges}
                />
                <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Online Judge</a>
                    <ul className="navbar-nav px-3">

                        <li className="nav-item text-nowrap">
                            <a className="nav-link" /*onClick="profile()"*/ id="userprofile">My Profile</a>
                        </li>
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" /*nclick="logout();" href="#"*/ id="singout">Sign out</a>
                        </li>
                    </ul>
                </nav>

                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="sidebar-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">
                                            <span data-feather="task1" /*onClick="task1()"*/></span> Task 1
                            </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="task2"></span> Task 2
                            </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="task3"></span> Task 3
                            </a>
                                    </li>

                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                        <h1 className="h2">Task 1</h1>
                    </div>
                    <div className="description">
                        <h6>This is the description of the task</h6>
                    </div>

                </main>


                <button id="submit" style={{ position: "fixed", right: "50px", top: "20.5cm" }} onClick={compile}>Submit</button>
            </div >
        );
    
}

export default App;
