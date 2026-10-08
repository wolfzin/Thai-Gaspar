// Status aberto/fechado no fuso de Gaspar (America/Sao_Paulo).
(function(){
  var H={0:[[480,720]],1:[],2:[[300,1380]],3:[[300,1380]],4:[[300,1380]],5:[[300,1380]],6:[[540,900]]};
  var W={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6};
  var p={};
  new Intl.DateTimeFormat('en-US',{timeZone:'America/Sao_Paulo',weekday:'short',hour:'numeric',minute:'numeric',hourCycle:'h23'}).formatToParts(new Date()).forEach(function(x){p[x.type]=x.value;});
  var d=W[p.weekday], m=(+p.hour)*60+(+p.minute);
  var aberto=H[d].some(function(f){return m>=f[0]&&m<f[1];});
  var el=document.getElementById('status'), t=document.getElementById('status-txt');
  if(el&&t){el.classList.add(aberto?'aberto':'fechado');t.textContent=aberto?'Aberto agora':(d===1?'Segunda: fechado':'Fechado agora');}
  var tr=document.querySelector('.tab-horas tr[data-d="'+d+'"]');
  if(tr){tr.classList.add('hoje');tr.querySelector('th').insertAdjacentHTML('beforeend',' <span class="hoje-tag">hoje</span>');}
})();
