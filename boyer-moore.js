let NO_OF_CHARS = 256;

function max (a,b) {
	return (a > b)? a: b;
}

function badCharHeuristic(str,size,badchar) {
	
	for (let i = 0; i < NO_OF_CHARS; i++)
		badchar[i] = -1;
	
	for (i = 0; i < size; i++)
		badchar[ str[i].charCodeAt(0)] = i;
}


function search(txt,pat) {
	let m = pat.length;
	let n = txt.length;

	let badchar = new Array(NO_OF_CHARS);

	badCharHeuristic(pat, m, badchar);

	let s = 0; 
	while(s <= (n - m))
	{
		let j = m-1;

		while(j >= 0 && pat[j] == txt[s+j])
			j--;

		if (j < 0) {
			console.log("Patterns occur at shift = " + s);

			s += (s+m < n)? m-badchar[txt[s+m].charCodeAt(0)] : 1;

		}

		else
			
			s += max(1, j - badchar[txt[s+j].charCodeAt(0)]);
	}
}

/* Driver program to test above function */
let txt="ABAAABCD".split("");
let pat = "ABC".split("");
search(txt, pat);


