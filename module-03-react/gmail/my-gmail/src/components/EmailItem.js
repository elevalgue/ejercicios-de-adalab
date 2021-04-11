import React from 'react';

class EmailItem extends React.Component {
    render() {
        return (
            <tr className = "cursor-pointer" >
                <td>
                    <a href="/" className="text--decoration--none">
                        {this.props.from}
                    </a>
                </td>
                <td>
                    <a href="/" className="text--decoration--none">
                        {this.props.subject}
                    </a>
                </td>
                
                <td>
                    <a href="/" className="text--decoration--none">
                        {this.props.time}
                    </a>
                </td>
                
                <td className="text-align-right">
                    <button className="form_btn fas fa-trash"></button>
                </td>
            </tr >
        );
        
    }
}

export default EmailItem; 