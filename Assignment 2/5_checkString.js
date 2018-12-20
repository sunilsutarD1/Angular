var mainStr = "Pune Kothrud Marvellous Infosystems";
var searchStr = "Marvellous";
chkString(mainStr, searchStr);
function chkString(str, searchStr) {
    var pos = str.indexOf(searchStr);
    if (pos >= 0)
        console.log("The word " + searchStr + " is present in string , at position " + pos);
}
