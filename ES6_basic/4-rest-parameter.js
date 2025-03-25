export default function returnHowManyArguments(...args) {
  let n = 0;
  for (const args of args)
	{
		n = n + 1;
	}
	return n;
}
