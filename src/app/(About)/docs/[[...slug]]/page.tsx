//tutorial-9 catch all segments//
export default async function docs({params,}:{params:Promise<{slug:string[]}>}){
    const {slug}=await params;
    if(slug?.length===1){
        return <h1>my name is {slug[0]}</h1>
    }else if(slug?.length===2){
        return <h1>my name is {slug[1]} and my age is {slug[0]}</h1>
    }
    return <h1>hey there how are u</h1>;
} 