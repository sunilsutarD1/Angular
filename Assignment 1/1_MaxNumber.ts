var max=Maximum(23,89,6)
console.log("Maximum number is : " + max)

var max=MaximumSmall(56,18,80)
console.log("Maximum number is : " + max)

function Maximum(no1:number,no2:number,no3:number):number
{
	if(no1>no2)
	{
		if(no1>no3)
		{
			return no1;
		}
		else
		{
			return no3;
		}
	}
	else
	{
		if(no2>no3)
			return no2
		else
			return no3;
	}
}

function MaximumSmall(no1:number,no2:number,no3:number):number
{
	var maxNum:number=0;
	maxNum = ((no1 > no2) ? ((no1 > no3) ? no1 : no3) : ((no2 > no3) ? no2 : no3))
return maxNum;
}
