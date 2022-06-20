// JavaScript Document
//**get set localstorage**/
const getDataFromLocal=(Data,key)=>{
	data=JSON.parse(localStorage.getItem(key))
	return Data==null ? 0:data;};
const setDataFromLocal=(Data,key)=>{localStorage.setItem(key,JSON.stringify(data));
	
	
}

