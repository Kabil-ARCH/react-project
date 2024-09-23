import React, { useContext, useState } from "react";
import { TableContext } from "../context/OrderContext";
import { Idprovider } from "./wrapper";
import "../../styles/Foodmenu.css";
import { MenuWrap } from "../context/MenuContext";
function FoodMeenu() {
	const { Id,Opener } = useContext(Idprovider);
	const {menuImage} = useContext(MenuWrap);
	const [bg,bgChanger] = useState("variant");
	const [qty,qtyChange] = useState(1);
	const {identifier,incrementer,purchaseCart, cartChanger} = useContext(TableContext);
	const [radioBtn,ChgBtn] = useState(0);
	const [selected,selectedList] = useState([]);
	const FoodDetail = menuImage[Id-1];
	const Purchaselog = FoodDetail.details;

	const changeAmt = (id,nameMain,amtMain)=>{
	const exist = selected.filter(item=>item.name===nameMain)
    
	  if(exist.length === 0){
	       selectedList(prevItem=>[...prevItem,{id:identifier,name:nameMain,amount:amtMain}])
	       incrementer(prevState=>prevState+1)
	       ChgBtn(prevState=>prevState+amtMain)}
		}
  
  const addQty = ()=>{
    qtyChange(prevState=> prevState>=1?prevState+1:prevState)
  }
  const delQty = ()=>{
    qtyChange(prevState=> prevState>1?prevState-1:prevState)
  }
  const update = () =>{
    const ToAddItems = selected.map(item=>({
	id:item.id,
      name:item.name,
      amount:item.amount,
      qty:qty
      }))
      cartChanger(prevCart=>[...prevCart,...ToAddItems])
    selectedList([]);
  }
  const Closer = () =>{
Opener(false)
  }
  const total = qty * radioBtn;
	return (
		<div className="FoodMenu">
		  <div className="Header">
		  <h5>Variants & Add-ons</h5>
		    <button className="Close" onClick={()=>Closer()}><span className="material-symbols-outlined">
arrow_forward_ios
</span></button>
		  </div>
		  <div className="ImgShow">
		    <div style={{backgroundImage:`url(${FoodDetail.url}`}} className="imgPrv"></div>

		    <h4>{FoodDetail.name}</h4></div>
		<div className="BtnHolder">
		    <button className={`FoodBtn variant1 ${bg === "variant"?"variant":""}`}onClick={()=>{bgChanger("variant")}}>Variants</button>
		  <button className={`FoodBtn addOn1 ${bg === "addOn"?"addOn":""}`}onClick={()=>{bgChanger("addOn")}}>Add-ons</button>
		  </div>
		  <div className="Tag">
		    <div className="Topic"><h4>Quantity</h4></div>
		    <div className="PriceList">
		    {
		      Purchaselog.map(item=>{
			return(
			  <div key={item.log} className="items">
			    <div className="FoodDet">
			      <input type="radio" value={item.log}onClick={()=>changeAmt(item.log,item.name,item.amount)}/>
			      <h5>{item.name}</h5></div>
			    <p>SAR {item.amount}</p>
			  </div>	
		      )
		    })
		    }  
		      </div>
		  </div>
		  <div className="priceTag">
	      	    <div className="money">
		      <p>Item Total</p>
		      <h5>SAR {total}</h5>
		    </div>
		    <div className="BtnHold">
<div className="Quantit">
  <button onClick={()=>{delQty()}}>-</button>
  {qty}	
  <button onClick={()=>{addQty()}} >+</button>
			</div>
		      <div className="Sub" onClick={()=>update()}><span>Add To Order</span></div>
		    </div>
		  </div>
		</div>
	);
}

export default FoodMeenu;
