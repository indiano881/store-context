const SingleProduct = ({params}:{params:{id:string}}) => {
    const {id} =params;
    return <>
    <h2>SINGLW PRODUCT</h2>
    <h4>{id}</h4>
    </>
}

export default SingleProduct;