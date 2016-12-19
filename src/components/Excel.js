import React, {Component} from 'react';

class Excel extends Component {


    render() {
        console.log("Excel:"+ this.props);
        return (
            <div>
                <table><thead><tr>{this.props.data.headers.map((item)=><th key={item}>item</th>)}</tr></thead></table>
            </div>
        );
    }
}

export default Excel;