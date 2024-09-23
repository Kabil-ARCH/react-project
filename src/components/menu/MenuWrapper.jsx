import React, { useContext } from "react";
import "../../styles/MenuWrapper.css";
import { MenuWrap } from "../context/MenuContext";
import { Idprovider } from "./wrapper";
function MenuWrapper() {
	const { menuImage } = useContext(MenuWrap);
	const { SetId, Opener } = useContext(Idprovider);

	const chosen = (id) => {
		Opener(() => true);
		SetId(id);
	};
	return (
		<div className="MenuWrap">
			{menuImage.map((image) => {
				return (
					<div key={image.id} className="card" onClick={() => chosen(image.id)}>
						<div
							style={{ backgroundImage: `url(${image.url})` }}
							className="imager"
						></div>
						<div className="cardBg">
							<h6>{image.name}</h6>
						  <p className="variantDes">{image.details.length>1?`${image.details.length} variants`:"1 variant"}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default MenuWrapper;
