const fullname=(full_name)=>{
    const full_namepattern=new RegExp("^[A-Za-z\\s]+$");
    console.log(full_name);
    return full_namepattern.test(full_name)
}
const age=(age)=>{
    if((age>0&&age<=100)){
        return true;
    }
    else{
        return false;
    }
}
const validation = {
    fullname,age
}
export default validation;