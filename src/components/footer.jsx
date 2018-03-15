import React from 'react';
import { Row, Col } from 'react-bootstrap';
const Footer = () => 
<footer className="app-footer text-center">
<Row className="show-grid">
    <Col xs={12} md={6}>
    <address>
        <strong>Example Inc.</strong><br />
        1234 Example Street<br />
        Antartica, Example 0987<br />
        <abbr title="Phone">P:</abbr> (123) 456-7890
    </address>
    </Col> 
<Col xs={12} md={6}>
    Social Links
</Col>
</Row>
</footer>

export default Footer;