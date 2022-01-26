import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import {typeofChargerStateContext} from '../Store';
import './main.css';


const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

const TypeofInfrastructure = () => {
  const [chargerType, setchargerType] = useContext(typeofChargerStateContext);
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
    // if (event.target.checked === true ) {
    //   setPrioritiesChecked([...prioritiesChecked, event.target.name]);
    // }

  };
  var valueArr = [];
  var keyList = Object.keys(checkedItems); 
  keyList.forEach(key => {
    valueArr.push(checkedItems[key]);
  })
  var count = 0 ;
  var selectedArr = [];
  valueArr.forEach(value => {
    if (value == true){
      selectedArr.push(keyList[count]); 
    }
    count ++;
  })
  function confirm() {
    setchargerType(selectedArr);
  }
  const checkboxes = [
    {
      name: "Extensive Solar Farm",
      key: "Extensive Solar Farm",
      label: "Extensive Solar Farm"
    },
    {
      name: "Wind Turbine",
      key: "Wind Turbine",
      label: "Wind Turbine"
    },
    {
      name: "Other Areas",
      key: "Other Areas",
      label: "Other Areas"
    },
    {
      name: "Other infrastructures",
      key: "Other infrastructures",
      label: "Other infrastructures"
    }
  ];

  return (
    <Layout>
    <section className="content-main">
        <div className="container">
        <div className="title">
            <h1 className="main-title content-main">What?</h1>
            <h3 className="sub-title content-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
        </div>
        </div>
    </section>
    <section>
      <div>
        <h3>Topics/infrastructures</h3>
        {checkboxes.map(item => (
          <label key={item.key}>
            {item.name}
            <Checkbox
              name={item.name}
              checked={checkedItems[item.name]}
              onChange={handleChange}
            />
            <br />
          </label>
        ))}
      </div>
      <Link to='/TempLocation'><h4 onClick={confirm} className="learnmore">Next </h4></Link>

      </section>

    </Layout>
  );
};

export default TypeofInfrastructure;