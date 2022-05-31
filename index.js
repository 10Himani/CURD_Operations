const axios=require('axios');

const getBooks=async()=>{
    const resp=await axios.get('  http://localhost:3000/Phases');
    console.log(`Request status: ${resp.status} ${resp.statusText}`);
    console.log(resp.data)
}
const addBook=async (bookInfo)=>{
    const resp=await axios.post(' http://localhost:3000/Phases',bookInfo);
    console.log(`Request status: ${resp.status} ${resp.statusText}`);
    console.log(resp.data);
}

const deleteBook=async(id)=>{
    try {
        const resp=await axios.delete(' http://localhost:3000/Phases/'+id);
        console.log(`Request status: ${resp.status} ${resp.statusText}`);
        console.log(resp);
        console.log("Successfully deleted #" +id +"book");
    }
    catch(err){
        if (err.resp.status==404){
            console.log(`Book number #${id} does not exist`)
        }
        else{
            console.log(`Something happended with book #${id}`);
        }
        }
    }
const updateBook = async (id,bookInfo)=>{
    try{
        const resp = await axios.put(` http://localhost:3000/Phases/${id}`,bookInfo);
        console.log(`Request status : ${resp.status} ${resp.statusText}`);
        console.log(resp.data);
        console.log("Successfully updated book with id :"+id);

    }
    catch(err){
        if (err.resp.status==404){
            console.log("Book with id: " +id + "not found");

        }
        else{
            console.log("Something went wrong with the request");
        }
    }
}

const patchBook = async (id,bookInfo)=>{
    try{
        const resp = await axios.patch(` http://localhost:3000/Phases/${id}`,bookInfo);
        console.log(`Request status : ${resp.status} ${resp.statusText}`);
        console.log(resp.data);
        console.log("Successfully patchBook book with id :" +  id);

    }
    catch(err){
        if (err.resp.status==404){
            console.log("Book with id: " +id + "not found");

        }
        else{
            console.log("Something went wrong with the request");
        }
    }
}
// addBook({id:9,name:"Girls's Story"});
const main =async () => {
    // await deleteBook(9);
    // await updateBook(10 ,{id:10,name :"Why? I like this."});
    // await patchBook(10,{author:"......."});
    await getBooks();
}
main()
// getBooks();