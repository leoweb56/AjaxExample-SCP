var xhr;
var dates = ['20140908', '20140909','20140910', '20140911', '20140912']; //dias a cargar

for(var i=0; i<dates.length; i++)
{
            xhr = new XMLHttpRequest();
            xhr.open("GET", "/SCP/cargaHoras/blanco.asp?dia="+dates[i]+"&usuario=T32534&proyecto=1-100686&tarea=3&empresa=1037&horas=8&descrip=&per=201409&accion=addtarea&Ttarea=3&PrjEmpresa=&PrjPais=&pIdCQ=SCP", true);
            xhr.timeout = 10000;
            xhr.send();
}
