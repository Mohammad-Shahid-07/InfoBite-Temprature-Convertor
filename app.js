const calcTemp = () => {
    const userTemp = document.getElementById("temp").value;
    const InputDegreeType = document.querySelector("#InputDegreeType");
    const InputDegree =  InputDegreeType.options[InputDegreeType.selectedIndex].value;

    const celToFer = (userTemp) =>{
        let fer = (userTemp*9/5) + 32;
        let f = fer.toFixed(2)
        return f;
    }
    const FerToCel = (userTemp) =>{
        let cel = ((userTemp-32) * 5/9)
        let c = cel.toFixed(2)
        return c;
    }

    let results;
    if (InputDegree === 'C')  {
        results = celToFer(userTemp);
        document.getElementById('result').innerHTML = ` ${results} °Ferhanite`;
    }else {
        results = FerToCel(userTemp);
        document.getElementById('result').innerHTML = ` ${results} °Celcius`;
    }
}