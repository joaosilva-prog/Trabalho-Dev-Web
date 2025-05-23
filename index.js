//incorporando o pacote 
const express = require('express')
//criar umatralho para desenvolvimento
const app = express()
// configurar porta 
const porta = 5656

//informar onde esta os arquivos staticos 
app.use(express.static('public'))

//informar onde os ervidor ira buscar as paginas web
app.set('view engine', 'ejs')

//rotas get(inicial) e post 
app.get('/',(req,res)=>{
    res.render('home')
})


//iniciar o siste (serviço) 
app.listen(porta,()=>{
   console.log('server iniciado')

})