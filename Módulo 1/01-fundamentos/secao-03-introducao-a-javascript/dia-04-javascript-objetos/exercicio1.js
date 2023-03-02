let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
 // console.log(info.personagem);

info['recorrente'] = 'Sim';
//console.log(info);

for (let key in info) {
    console.log(info[key]);
}

let info2 = {
    personagem:'Margarida e Tio Patinhas',
    origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics",
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
    recorrente: 'Ambos recorrentes',
};

for (let key2 in info2){
    console.log(info2[key2]);
}