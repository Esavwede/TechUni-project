

function test()
{
    try 
    {
        console.log('sample') 
        
        const err = new Error(' forced error ')
    }
    catch(e)
    {
        console.log(e.message) 
    }
}


test() 