import React from 'react';
import EmailList from './EmailList'; 
import EmailItem from './EmailItem';

class EmailList extends React.Component {
    render() {
        const tocho = 'Node news';
        return (
            <table className="table">
                <tbody>
                    <EmailItem from="From fest" time="15:27" subject="Entradas ya a la venta"></EmailItem>
                    <EmailItem from="Github" time="16:58" subject="Adalab/project-promo-i"></EmailItem>
                    <EmailItem from="Node weekly" time="21:45" subject={tocho}></EmailItem>
                </tbody>
            </table>
        )
    }
}