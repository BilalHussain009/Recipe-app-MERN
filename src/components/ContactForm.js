import React from 'react';



class ContactForm extends React.Component {
    state = {
        name: '',
        email: '',
        message: '',
        num1: Math.round(Math.random() * 5),
        num2: Math.round(Math.random() * 5),
        ans: 0,
        placeholder: '',
        user:-1
    }
    componentDidMount = () => {


        this.setState({
            placeholder: `Security Check what is ${this.state.num1} + ${this.state.num2}`,
            ans: this.state.num1 + this.state.num2
        });

    }

    contactHandler = (e) => {
        e.preventDefault();
        var re = /\S+@\S+\.\S+/;

        if (re.test(this.state.email)) {
            if(parseInt(this.state.user)!==this.state.ans){
                alert('Security Check Failed!')
            }
        }
        else {
            alert('Email Badly Formatted ');
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    }


    render() {
        return (

            <section className="contact">
                <h1 id="contact" >Contact Me</h1>

                <div id="form-main">
                    <div id="form-div">
                        <form className="form" id="form1" onSubmit={this.contactHandler}>

                            <p className="name">
                                <input required onChange={this.changeHandler} name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
                            </p>

                            <p className="email">
                                <input required onChange={this.changeHandler} name="email" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
                            </p>

                            <p className="text">
                                <textarea required onChange={this.changeHandler} name="message" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Message"></textarea>
                            </p>
                            <p className="name">
                                <input required onChange={this.changeHandler} name="user" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder={this.state.placeholder} id="name" />
                            </p>

                            <div className="submit">
                                <input type="submit" value="SEND" id="button-blue" />
                                <div className="ease"></div>
                            </div>


                        </form>
                    </div>
                </div>

            </section>
        )
    }
}
export default ContactForm;