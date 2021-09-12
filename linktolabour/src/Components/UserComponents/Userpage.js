//import React from 'react'

import { useEffect, React, useState } from "react";
import {
    BrowserRouter as Router,
    useHistory,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";
import { Button } from "reactstrap";
import Swal from "sweetalert2";
import ShowCReview from "../UniversalComponents";
import Reviwe from "./AddReview";
import Addwork from "./Addwork";
import AssignedWork from "./AssignedWork";
import Logout from "./Logout";
import ShowBidding from "./ShowBidding";
import ShowContractors from "./ShowContractors";
import ShowLabours from "./ShowLabours";
import UpdateUser from "./UpdateUser";
import UserINfo from "./UserINfo";
import UserNavbar from "./UserNavbar";
import WorkList from "./WorkLIst";

function Userpage() {
    const history1 = useHistory();
    let [userdata, setuserdata] = useState();
    useEffect(() => {
        if (localStorage.getItem("udata") == null) {

            history1.replace("/")

        } else {

            let user = JSON.parse(localStorage.getItem("udata"));
            //console.log(user.role);
            if (user === null) {
                history1.replace("/");
            } else if (user.role != "USER") {
                history1.replace("/");
            }
        }
        return () => {

        };
    }, []);

    let Logout = () => {
        localStorage.clear();
        history1.replace("/");
        Swal.fire({ title: "Successfully logged Out", icon: 'success' });


    }
    let name;
    let role;
    if (localStorage.getItem("udata") !== null) {
        let l = JSON.parse(localStorage.getItem("udata"));
        name = l.userName;
        role = l.role;
    }
    // USER HOMEPAGE
    //ShowBidding
    return (
        <div>
            <div className="UpperBar " >
                <div className="col-3" >
                    <h4>LINK TO LABOUR</h4>
                </div>
                <div className="col-3"  >Role: {role}</div>
                <div className="col-3 username" ><h5>Hello {name}</h5></div>
                <div className="col-3" >
                    <Button color="danger" inverse onClick={Logout} style={{ float: "right" }}>Logout</Button>
                </div>
            </div>
            <div>
                <div>
                </div>
                <div className="row col-12">

                    <BrowserRouter>

                        <div className="col-3">
                            <UserNavbar />
                        </div>
                        <div className="col-9" style={{ height: "100 %", marginTop: "3.4%" }}>

                            <Route exact={true} path="/user/addwork" component={Addwork} />
                            <Route exact={true} path="/user/getcontractor" component={ShowContractors} />
                            <Route exact={true} path="/user/getlabour" component={ShowLabours} />
                            <Route exact={true} path="/user/getallassigned" component={AssignedWork} />
                            <Route exact={true} path="/user/getaddedworks" component={WorkList} />
                            <Route exact={true} path="/user/showbidding" component={ShowBidding} />
                            <Route exact={true} path="/user/addReview" component={Reviwe} />
                            <Route exact={true} path="/user/upadateuser" component={UpdateUser} />
                            <Route exact={true} path="/user/ShowReview" component={ShowCReview} />
                        </div>

                    </BrowserRouter>
                </div>
            </div>
        </div >
    );
}

export default Userpage;
