
import React from 'react';
import {Link} from 'react-router-dom';


/**
 * Main Tile Component to display the website Structure (Content / Infos).
 * Used to render a hierarchical structures of such tiles wich are uses to navigate over content sites.
 *
 *
 * @param title
 * @param subtitle
 * @param cornerImageUrl
 * @param linkTo
 * @returns {Element}
 * @constructor
 */
const Tile = ({title, subtitle, cornerImageUrl, linkTo}) => {
    return (
        <Link to={linkTo} className={""}>
            <div className={"bg-cover bg-center w-1/1 h-1/1 rounded-2xl opacity-80 hover:opacity-60"}>

                <img className={"rounded-2xl shadow-2xl"} src={cornerImageUrl}/>
                <div className={"shadow-2xl text-center rounded-2xl bg-gradient-to-tr from-cyan-600 to-cyan-800"}>
                    <strong>{title}</strong>
                    <h4>{subtitle}</h4>
                </div>
            </div>
        </Link>
    );
};
export default Tile;
