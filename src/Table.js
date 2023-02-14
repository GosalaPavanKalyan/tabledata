import Trow from "./Trow";
function Table()
{
    let std=[{name:"sunil",age:21,marks:100},
    {name:"Pavan",age:22,marks:90},
    {name:"prateek",age:23,marks:98},
    {name:"chandu",age:21,marks:97}]
    return(
        <table border="1">
            <tr>
                <th> name</th>
                <th> age</th>
                <th> marks</th>
            </tr>
            {std.map((item)=><Trow data={item}/>)}
        </table>
    )
}
export default Table;