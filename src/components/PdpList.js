import React, {PropTypes} from 'react';

const PdpList = (props) => {
//   const handleChange = (e) => {
//     props.onChange(props.name, e.target.value);
//   };

  const pdps = props.pdps;
//   const listItems = Object.values(pdps).map(function(item){return <li>{item.id}</li>;});
  const listItems = Object.values(pdps).map((item)=><li key={item.id}>{item.id}</li>);
//   const listItems = Object.values(pdps).map((item) =>
//     <li>{item.id}</li>
//   );

  return (
     <ul>{listItems}</ul>

    // <input
    //   className="small"
    //   type="text"
    //   placeholder={props.placeholder}
    //   value={props.value}
    //   onChange={handleChange}/>
  );
};

PdpList.propTypes = {
  pdps: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
//   value: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ])
};

export default PdpList;
