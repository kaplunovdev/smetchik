import React from "react";
import {Payment} from "./Payment";
import {addWork} from "../../redux/paymentReducer";
import {connect} from "react-redux";

 const PaymentContainer = (props) => {

    return (
        <div>
            <Payment typeWorkList={props.typeWorkList}/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    typeWorkList: state.paymentPage.typeWork
})

const mapDispatchToProps = (dispatch) => {
    return {
        addWork: (title) => dispatch(addWork(title))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PaymentContainer);