pragma solidity ^0.4.20;

contract Auction {

  address companyA = "0xed9d02e382b34818e88b88a309c7fe71e65f419d";
  address companyB = "0xca843569e3427144cead5e4d5999a3d0ccf92b8e";
  address companyC = "0x0fbdc686b912d7722dc86510934589e0aaf3b55a";
  uint itemPrice;
  mapping(address=>uint) bids;
  
  
  function setItem( uint _price){
     //require(msg.sender==companyA);
     itemPrice = _price;
  }

  function getItemPrice() public returns (uint){
	    return itemPrice;
  }
   
   function getBid(address _address) returns (uint){
	//    require(msg.sender == companyA);
	    return bids[_address];
  }
  

  function bid(uint _bidAmt) public {
      //require(msg.sender == companyB || msg.sender == companyC);
       bids[msg.sender] = _bidAmt;
    }

}
