pragma solidity ^0.4.20;

contract Auction {

  address companyA;
  address companyB;
  address companyC;
  uint itemPrice;
  mapping(address=>uint) bids;
  
  function Auction(address _companyA, address _companyB, address _companyC){
    companyA = _companyA;
    companyB = _companyB;
    companyC = _companyC;
  }

  function setItem( uint _price){
     require(msg.sender==companyA);
     itemPrice = _price;
  }

  function getItemPrice() public returns (uint){
	    return itemPrice;
  }
   
   function getBid(address _address) returns (uint){
	    require(msg.sender == companyA);
	    return bids[_address];
  }
  

  function bid(uint _bidAmt) public {
      require(msg.sender == companyB || msg.sender == companyC);
       bids[msg.sender] = _bidAmt;
    }

}
