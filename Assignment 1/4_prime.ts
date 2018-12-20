var flag=0;

function IsPrime(no1:number)
{
	for(var i=2;i<no1;i++)
	{
		if((no1 % i)==0)	
		{
			flag=1;
			break;
		}
	}
	if(flag==1)
		return false;

	return true;
		
}

console.log("The number 11 is prime (true/false) ? " + IsPrime(11) )

