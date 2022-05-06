let btnSend = document.getElementById("send");

btnSend.addEventListener("click", () => {
  let precioUnitario: number = Number(data1.value);
  let cantidad: number = Number(data2.value);
  let mes: string = data3.value;

  if (mes.toUpperCase() === "OCTUBRE") {
    console.log("Precio con Descuento", precioUnitario * cantidad * 0.85);
  } else {
    console.log("Precio sin Descuento", precioUnitario * cantidad);
  }
});
