// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">FAQ’s</h1>
          <ul className="faqs-list">
            {faqsList.map(eachFaq => (
              <FaqItem key={eachFaq.id} faqsList={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
