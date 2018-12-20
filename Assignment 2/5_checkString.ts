var mainStr:string = "Pune Kothrud Marvellous Infosystems";
var searchStr:string ="Marvellous"

chkString(mainStr,searchStr);

function chkString(str:String,searchStr:string)
{
	var pos = str.indexOf(searchStr);
	if(pos>=0)
	   console.log("The word " + searchStr + " is present in string , at position " + pos);
}
