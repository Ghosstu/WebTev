import React, { Component } from 'react'
import './sass/ContactInfo.sass'

export default class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info">
                <p>ē-pasts: webtev@inbox.lv</p>
                <p>Tālrunis: 12345678</p>
                <p>Facebook: WebTev</p>
                <p>Twitter: @webtev</p>
                <p>Instagram: @webtev</p>
            </div>
        )
    }
}
