window.onload = function(){

    document.getElementById('boton1').onclick = function(){
        let llista1 = ['Paris', 'Londres', 'Roma', 'Berlin', 'Copenhaguen', 'Viena', 'Lisboa', 'Washington_DC', 'Otawa', `L'Havana`, 'Santiago', 'Lima', 'Montevideo', 'Canberra', 'Wellington', 'Monròvia', 'Abuja', 'Dakar', 'Tunis', 'Tokyo', 'Seül', 'Beijing', 'Tapei'];
        let llista2 = ['França', 'UK', 'Itàlia', 'Alemanya', 'Dinamarca', 'Àustria', 'Portugal', 'USA', 'Canada', 'Cuba', 'Xile', 'Perú', 'Uruguay', 'Austràlia', 'Nova_Zelanda', 'Libèria', 'Nigèria', 'Senegal', 'Tunísia', 'Japó', 'Corea_Sud', 'Xina', 'Taiwan'];
        let llista3 = ['Europa', 'Europa', 'Europa', 'Europa', 'Europa', 'Europa', 'Europa', 'Amèrica', 'Amèrica', 'Amèrica', 'Amèrica', 'Amèrica', 'Amèrica', 'Oceania', 'Oceania', 'Àfrica', 'Àfrica', 'Àfrica', 'Àfrica', 'Àsia', 'Àsia', 'Àsia'];

        
        
        let nFilas = parseInt(prompt("Cuántas filas quieres mostrar?"));
        if (nFilas <= 10){

            for (let i = 0; i < nFilas; i++) {
                let aleatorio = Math.floor(Math.random() * llista1.length);
                    let list1 = llista1[aleatorio];
                    let list2 = llista2[aleatorio];
                    let list3 = llista3[aleatorio];
                    document.getElementById('generarTabla').innerHTML +='<tr><td>'+list1+'</td><td>'+list2+'</td><td>'+list3+'</td></tr>';
            }

        }else{
            alert('Has introduït un nombre incorrecte de files, torna a provar');
        }
    }
        
    document.getElementById('boton2').onclick = function(){
            document.getElementById('generarTabla').innerHTML = '';
        }
}   
          




