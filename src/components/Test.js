import React, { Component } from "react";
import { Field, reduxForm, getFormValues, formValueSelector } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { regionActions } from "./ducks/index";
import { Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputField } from "./../../components/controls/Fields";
import "./regionManagement.scss";

const validate = values => {
    const errors = {};
    const fieldVal = ["regionName", "code", "description"];

    fieldVal.forEach(fieldVal => {
        if (!values[fieldVal]) {
            errors[fieldVal] = "Required";
        }
    });
    return errors;
};

class RegionForm extends Component {
    constructor(props) {
        super(props);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.selectedRegion &&
            this.props.selectedRegion != prevProps.selectedRegion
        ) {
            this.props.initialize({
                selectedRegion: this.props.selectedRegion && this.props.selectedRegion,
                regionName: this.props.selectedRegion && this.props.selectedRegion.name,
                code: this.props.selectedRegion && this.props.selectedRegion.code,
                description:
                    this.props.selectedRegion && this.props.selectedRegion.description
            });
            this.setState({ selectedRegion: this.props.selectedRegion });
        }
    }

    render() {
        const { handleSubmit, onSubmit, invalid, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <h5>{this.props.title}</h5>
                </div>
                <div className="form-group">
                    <label>Name</label>
                </div>
                <div>
                    <Field
                        type="text"
                        className="form-control mb-2"
                        name="regionName"
                        component={InputField}
                        disabled={this.props.fieldDisabled}
                    />
                </div>
                {/* {this.props.mode == "add" ? ( */}
                <>
                    <div className="form-group">
                        <label>Code</label>
                    </div>
                    <div>
                        <Field
                            type="text"
                            className="form-control mb-2"
                            name="code"
                            component={InputField}
                            disabled={this.props.fieldDisabled}
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                    </div>
                    <div>
                        <Field
                            type="text"
                            className="form-control mb-2"
                            name="description"
                            component={InputField}
                            disabled={this.props.fieldDisabled}
                        />
                    </div>
                </>

                <ButtonToolbar>
                    <Button
                        as="input"
                        type="submit"
                        value={this.props.button}
                        className="button"
                        debugger
                        onClick={this.forceUpdateHandler}
                    />
                </ButtonToolbar>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        region: state.Regions,
        fieldValues: getFormValues("region_form")(state)
    };
}

export default withRouter(
    reduxForm({
        form: "region_form",
        validate
    })(connect(mapStateToProps, regionActions)(RegionForm))
);