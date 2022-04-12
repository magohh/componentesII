import ItemCount from '../components/ItemCount'
const Producto = (props) => {
    return (
        <>
        <div className="col-md-3 text-center">
            <img className="product_img" src={props.srcImage}/>
            <h5 className='mt-3'>{props.name}</h5>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </div>
        </>
    )
}

export default Producto