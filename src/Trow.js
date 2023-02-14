function Trow(stdprop){
    let std=stdprop.data
    return (
        <tr>
            <td>{std.name}</td>
            <td>{std.age}</td>
            <td>{std.marks}</td>
        </tr>
    )
}
export default Trow;