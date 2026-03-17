interface CountList
{
    count:number;
    todos:Array;
}


 const SetCounter: React.FunctionComponent<CountList>=({count,todos})=>
{
return(<>
<p className="text-muted fw-bold">
    There are {count}{count>1? ' Posts':' Post'} in the list
    and {todos.filter((t:any)=>t.todos=='true')}
</p>
</>)


}

export default SetCounter