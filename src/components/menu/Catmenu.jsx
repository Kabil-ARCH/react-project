import { useContext } from "react";
import "../../styles/Catmenu.css";
import { TableContext } from "../context/OrderContext";
function Catmenu() {
	const { BtnActive,Activator } = useContext(TableContext);
  const changer = ()=>{
    	Activator(() => (BtnActive === "cart" ? "menu" : "cart"));

  }
	return (
		<div className="menuWrapper">
			<h4>Catalog</h4>
			<div className="BtnWrapper">
				<button>
					<span className="material-symbols-outlined">more_vert</span>
				</button>
			  <button onClick={()=>{changer()}}>
					<span className="material-symbols-outlined">close</span>
				</button>
			</div>
		</div>
	);
}

export default Catmenu;
