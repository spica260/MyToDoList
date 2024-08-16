import React from 'react'
import Footer from '../components/Footer';
import HeaderNav from '../components/HeaderNav';
import '../App.css'

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        eMail: '',
        comments: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value  
      });
    }
  
    render() {

    return (
      <>
          <HeaderNav />

          <h2 className='tittle'>Contact</h2>

          <form className='form'>
              <div className='form-row'>
                  <input 
                    type='text' 
                    name='firstName' 
                    placeholder='Your First Name' 
                    className='text-input'
                    value={this.state.value} 
                    onChange={this.handleChange}  />
              </div>
              <div className='form-row'>
                  <input 
                    type='text' 
                    name='lastName' 
                    placeholder='Your Last Name' 
                    className='text-input'
                    value={this.state.value} 
                    onChange={this.handleChange} />
              </div>
              <div className='form-row'>
                  <input 
                    type='email' 
                    name='eMail' 
                    placeholder='Your Email' 
                    className='text-input'
                    value={this.state.value} 
                    onChange={this.handleChange} />
              </div>
              <div className='form-row'>
                  <textarea 
                    id="comments" 
                    name="comments" 
                    className='area-input' 
                    rows='6' 
                    placeholder='Your Comments Here'
                    value={this.state.value} 
                    onChange={this.handleChange}>
                  </textarea>
              </div>
              <div className='form-row>'>
                <button type='submit' value='Submit' className='task-button'>Send</button>
              </div>
            </form>

          <Footer />
      </>
    )
  }
}

export default Contact;