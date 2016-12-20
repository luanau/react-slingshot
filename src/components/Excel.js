import React, {Component, PropTypes} from 'react';

class Excel extends Component {
      constructor(props) {
        super(props);
        this.state = { 
            data: this.props.initialData,
            sortby: null,
            descending: false
        }; // initial state 

        //Bind the event handlers to this Component object
        this._sort = this._sort.bind(this);
    }

    _sort(e) {
        const col = e.target.cellIndex;
        const descending = this.state.sortby === col && !this.state.descending;

        //Copy the data. Remember immutable?
        let data = Array.from(this.state.data);

        data.sort((a,b)=>{
            return descending 
                ?(a[col]<b[col]?1:-1)
                :(a[col]>b[col]?1:-1)
        });
        this.setState({
            data: data,
            sortby: col,
            descending: descending
        });
    }

    render() {
        return (
                <table>
                    <thead onClick={this._sort}>
                        <tr>{this.props.headers.map((item, idx)=>{
                            if (this.state.sortby===idx) {
                                item += this.state.descending ? '\u2191' : '\u2193';
                            }
                            return <th key={idx}>{item}</th>;
                        })
                        }</tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((row, idx)=><tr key={idx}>{row.map((col, idx)=><td key={idx}>{col}</td>)}
                        </tr>)}
                    </tbody>
                </table>
        );
    }
}

Excel.propTypes = {
    headers: PropTypes.arrayOf(React.PropTypes.string),
    initialData: PropTypes.arrayOf(PropTypes.arrayOf(React.PropTypes.string)),
};

export default Excel;

