const valorTicket=200
function calculoVenta(){
    let cant=document.getElementById("cantidad").value
    let categoria= document.getElementById("categoria").value
    let descuento
    if (categoria==1)
        {descuento=80}
    else if (categoria==2)
        {descuento=50}
    else 
        {descuento=15}
    let total=valorTicket*cant
    total -= total*descuento/100
    document.getElementById("total").innerHTML=total
