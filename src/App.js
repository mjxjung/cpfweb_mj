import React, { useState } from "react";
import "./App.css";
import logo from "./images/logo.svg";
import polygon from "./images/polygon.svg";
import biglogo from "./images/biglogo.svg";

function App() {
  const [address, setAddress] = useState(""); // State 변수와 변경 함수

  const handleAddressChange = (e) => {
    setAddress(e.target.value); // 주소 입력값을 State 변수에 저장
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    console.log("주소 변경:", address); // 주소 변경 로직을 추가해주세요.
  };

  const handleFindButtonClick = () => {
    // 버튼 클릭 시 동작할 로직을 추가해주세요.
    console.log("Find 버튼이 클릭되었습니다.");
  };

  return (
    <div className="App">
      <img className="Logo" src={logo} alt="logo" />
      <div className="Hello">
        안녕하세요,
        <br />
        XXX 님
      </div>
      <div className="Check">배송받을 주소가 맞는지 확인해 주세요.</div>
      <div className="Grey">
        <form onSubmit={handleAddressSubmit}>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="새로운 주소를 입력하세요"
          />
        </form>
      </div>
      <button className="Polygon" onClick={handleFindButtonClick}>
        <img src={polygon} alt="polygon" />
      </button>
      {/* <button className="Change" onClick={handleFindButtonClick}>
        주소 변경하기
      </button> */}
      {/* <img className="Polygon" src={polygon} alt="polygon" />*/}
      <div className="Change">주소 변경하기</div>
      <div className="See">전국의 KINI 매장을 한눈에 !</div>
      <img className="Biglogo" src={biglogo} alt="biglogo" />
      <button className="Find" onClick={handleFindButtonClick}>
        KINI
        <br />
        매장 찾기
      </button>
    </div>
  );
}

export default App;
