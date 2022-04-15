

// carga la funcion despues de que se cargue por completo el documento
window.onload = function(){
    addEventListener('change', obtenerTotal);
}
// buscar el <form> y guardarlo en una variable
const form = document.querySelector('form');

// decir que en el evento enviar se sume el total
form.addEventListener('change', obtenerTotal);


function obtenerTotal(event) {

// evitar enviar el formulario que ocasiona que se refresque la pagina
event.preventDefault();

// obtener todos los input radio y checkbox
const planRadio = document.querySelector('input[name=plan]:checked')
const rvo1Check = document.querySelector('input[name=rvo1]:checked')
const rvo2Check = document.querySelector('input[name=rvo2]:checked')
const rvo3Check = document.querySelector('input[name=rvo3]:checked')
const rvo4Check = document.querySelector('input[name=rvo4]:checked')
const rvo5Check = document.querySelector('input[name=rvo5]:checked')
const rvo6Check = document.querySelector('input[name=rvo6]:checked')
const rvo7Check = document.querySelector('input[name=rvo7]:checked')
const rvo8Check = document.querySelector('input[name=rvo8]:checked')
const rvo9Check = document.querySelector('input[name=rvo9]:checked')
const rvo10Check = document.querySelector('input[name=rvo10]:checked')
const rvo11Check = document.querySelector('input[name=rvo11]:checked')
const rvo12Check = document.querySelector('input[name=rvo12]:checked')
const deco3Check = document.querySelector('input[name=equipo3]:checked')
const deco4Check = document.querySelector('input[name=equipo4]:checked')
const deco5Check = document.querySelector('input[name=equipo5]:checked')
const deco6Check = document.querySelector('input[name=equipo6]:checked')
const deco7Check = document.querySelector('input[name=equipo7]:checked')
const deco8Check = document.querySelector('input[name=equipo8]:checked')
const premium1Check = document.querySelector('input[name=premium1]:checked')
const premium2Check = document.querySelector('input[name=premium2]:checked')
const premium3Check = document.querySelector('input[name=premium3]:checked')
const premium4Check = document.querySelector('input[name=premium4]:checked')
const premium5Check = document.querySelector('input[name=premium5]:checked')
const premium6Check = document.querySelector('input[name=premium6]:checked')
const premium7Check = document.querySelector('input[name=premium7]:checked')
const premium8Check = document.querySelector('input[name=premium8]:checked')
const premium9Check = document.querySelector('input[name=premium9]:checked')
const premium10Check = document.querySelector('input[name=premium10]:checked')
const premium11Check = document.querySelector('input[name=premium11]:checked')
const premium12Check = document.querySelector('input[name=premium12]:checked')
const premium13Check = document.querySelector('input[name=premium13]:checked')
const premium14Check = document.querySelector('input[name=premium14]:checked')
const premium15Check = document.querySelector('input[name=premium15]:checked')
const recargoCheck = document.querySelector('input[name=recargo]:checked')
const tntCheck = document.querySelector('input[name=tntflex]:checked')
const decoCheck = document.querySelector('input[name=deco]:checked')
const rvp1Check = document.querySelector('input[name=rvp1]:checked')
const rvp2Check = document.querySelector('input[name=rvp2]:checked')
const rvp3Check = document.querySelector('input[name=rvp3]:checked')
const rvp4Check = document.querySelector('input[name=rvp4]:checked')
const rvp5Check = document.querySelector('input[name=rvp5]:checked')
const rvp6Check = document.querySelector('input[name=rvp6]:checked')
const rvp7Check = document.querySelector('input[name=rvp7]:checked')
const rvp8Check = document.querySelector('input[name=rvp8]:checked')
const rvp9Check = document.querySelector('input[name=rvp9]:checked')
const rvoCheck = document.querySelector('input[name=rvoEquipo]:checked')          

// convertir los valores a String, o colocar un 0 si no elegieron algo
const plan = planRadio ?  Number(planRadio.value): 0
const rvo1 = rvo1Check ?  Number(rvo1Check.value): 0
const rvo2 = rvo2Check ?  Number(rvo2Check.value): 0
const rvo3 = rvo3Check ?  Number(rvo3Check.value): 0
const rvo4 = rvo4Check ?  Number(rvo4Check.value): 0
const rvo5 = rvo5Check ?  Number(rvo5Check.value): 0
const rvo6 = rvo6Check ?  Number(rvo6Check.value): 0
const rvo7 = rvo7Check ?  Number(rvo7Check.value): 0
const rvo8 = rvo8Check ?  Number(rvo8Check.value): 0
const rvo9 = rvo9Check ?  Number(rvo9Check.value): 0
const rvo10 = rvo10Check ?  Number(rvo10Check.value): 0
const rvo11 = rvo11Check ?  Number(rvo11Check.value): 0
const rvo12 = rvo12Check ?  Number(rvo12Check.value): 0
const deco3 = deco3Check ?  Number(deco3Check.value): 0
const deco4 = deco4Check ?  Number(deco4Check.value): 0
const deco5 = deco5Check ?  Number(deco5Check.value): 0
const deco6 = deco6Check ?  Number(deco6Check.value): 0
const deco7 = deco7Check ?  Number(deco7Check.value): 0
const deco8 = deco8Check ?  Number(deco8Check.value): 0
const premium1 = premium1Check ?  Number(premium1Check.value): 0
const premium2 = premium2Check ?  Number(premium2Check.value): 0
const premium3 = premium3Check ?  Number(premium3Check.value): 0
const premium4 = premium4Check ?  Number(premium4Check.value): 0
const premium5 = premium5Check ?  Number(premium5Check.value): 0
const premium6 = premium6Check ?  Number(premium6Check.value): 0
const premium7 = premium7Check ?  Number(premium7Check.value): 0
const premium8 = premium8Check ?  Number(premium8Check.value): 0
const premium9 = premium9Check ?  Number(premium9Check.value): 0
const premium10 = premium10Check ?  Number(premium10Check.value): 0
const premium11 = premium11Check ?  Number(premium11Check.value): 0
const premium12 = premium12Check ?  Number(premium12Check.value): 0
const premium13 = premium13Check ?  Number(premium13Check.value): 0
const premium14 = premium14Check ?  Number(premium14Check.value): 0
const premium15 = premium15Check ?  Number(premium15Check.value): 0
const recargo = recargoCheck ?  Number(recargoCheck.value): 0
const tntflex = tntCheck ?  Number(tntCheck.value): 0
const deco = decoCheck ?  Number(decoCheck.value): 0 
const rvp1 = rvp1Check ?  Number(rvp1Check.value): 0
const rvp2 = rvp2Check ?  Number(rvp2Check.value): 0
const rvp3 = rvp3Check ?  Number(rvp3Check.value): 0
const rvp4 = rvp4Check ?  Number(rvp4Check.value): 0
const rvp5 = rvp5Check ?  Number(rvp5Check.value): 0
const rvp6 = rvp6Check ?  Number(rvp6Check.value): 0
const rvp7 = rvp7Check ?  Number(rvp7Check.value): 0
const rvp8 = rvp8Check ?  Number(rvp8Check.value): 0
const rvp9 = rvp9Check ?  Number(rvp9Check.value): 0
const rvoEquipo = rvoCheck ?  Number(rvoCheck.value): 0

//suma total se le asigna a variable result
const result = plan + rvo1 + rvo2 + rvo3 + rvo4 + rvo5 + rvo6 + rvo7 + rvo8 + rvo9 + rvo10 + rvo11 + rvo12 +
 deco3 + deco4 + deco5 + deco6 + deco7 + deco8 + premium1 + premium2 + premium3 + premium4 + 
premium5 + premium6 + premium7 + premium8 + premium9 + premium10 + premium11 +
premium12 + premium13 + premium14 + premium15 + rvp1 + rvp2 + rvp3 + rvp4 + rvp5 +
 rvp6 + rvp7 + rvp8 + rvp9 + rvoEquipo + recargo + tntflex + deco;

//se asigna valor de variable result a resultado para poder ser mostrado en pantalla
document.getElementById('resultado').innerHTML = result;

}
