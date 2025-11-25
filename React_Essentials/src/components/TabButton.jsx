import '../index.css';

export default function TabButton(props) {

    console.log("TabButton function is calling");
    return (   
        <li> 
            <button className={props.isSeleted ? 'active' : undefined } onClick={props.onSelect}>{props.children}</button> 
        </li> );
}