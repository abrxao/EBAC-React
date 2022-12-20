export default function imcClassify(imc){
    var imcRanges = [
        {
            "range": 10,
            "classification": "Desnutrição Grau V"
        },
        {
            "range": 13,
            "classification": "Desnutrição Grau IV"
        },
        {
            "range": 16,
            "classification": "Desnutrição Grau III"
        },
        {
            "range": 17,
            "classification": "Desnutrição Grau II"
        },
        {
            "range": 18.5,
            "classification": "Desnutrição Grau I"
        },
        {
            "range": 25,
            "classification": "Peso Normal"
        },
        {
            "range": 30,
            "classification": "Pré-Obesidade"
        },
        {
            "range": 35,
            "classification": "Obesidade Grau I"
        },
        {
            "range": 40,
            "classification": "Obesidade Grau II"
        }
    ]

    for(var i = 0; i<imcRanges.length; i++){
        if(imc < imcRanges[i].range){
            return imcRanges[i].classification;
        }
    }
    return "Obesidade Grau III";
    
}