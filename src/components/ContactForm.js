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
        user: -1
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
            if (parseInt(this.state.user) !== this.state.ans) {
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

                <section id="contact">

                    <h1 class="section-header">CONTACT</h1>

                    <div class="contact-wrapper">



                        <div class="direct-contact-container">

                            <ul class="contact-list">
                                <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">bhussain.bese7seecs@seecs.edu.pk</span></i></li>

                                <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:+923155035173" title="Give me a call">(+92) 3155035173</a></span></i></li>

                                <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">Islamabad</a></span></i></li>

                            </ul>

                           
                            <hr></hr>

                            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

                        </div>

                    </div>

                </section>



        )
    }
}
export default ContactForm;