import React, { useState, useContext } from "react";
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import {priorityStateContext} from '../Store';


const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

const Priorities = () => {
  const [priorities, setPriorities] = useContext(priorityStateContext);
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
    setPriorities(selectedArr);
  }
  const checkboxes = [
    {
      name: "Stops",
      key: "Stops",
      label: "Stops"
    },
    {
      name: "TCP",
      key: "TCP",
      label: "TCP"
    },
    {
      name: "durhamCarParks",
      key: "durhamCarParks",
      label: "durhamCarParks"
    },
    {
      name: "BlueBadge",
      key: "BlueBadge",
      label: "BlueBadge"
    },
    {
      name: "cityPopExports",
      key: "cityPopExports",
      label: "cityPopExports"
    },
    {
      name: "HouseholdActivity",
      key: "HouseholdActivity",
      label: "HouseholdActivity"
    },
    {
      name: "vehicleTypeJSON",
      key: "vehicleTypeJSON",
      label: "vehicleTypeJSON"
    },
    {
      name: "walkingCyclingData",
      key: "walkingCyclingData",
      label: "walkingCyclingData"
    }
  ];

  return (
    <Layout>
    <section className="content-main">
        <div className="container">
        <div className="title">
            <h1 className="main-title content-main">Why?</h1>
            <h3 className="sub-title content-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
        </div>
        </div>
    </section>
    <section>
      <div>
        <h3>select Your priorities</h3>
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
      <Link to='/location'><h4 onClick={confirm} className="learnmore">Next </h4></Link>

      </section>

    </Layout>
  );
};

export default Priorities;