const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3001
let selectedCompany

app.use(express.static(path.join(__dirname, '../public')))
app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'hbs')
app.get('/',(req,res)=>{
    res.redirect('/login')
})

app.get('/question', (req, res) => {
    res.render('question')
    
})
app.get('/companies', (req, res) => {
    
    res.render('companies')
})
app.get('/mergerinit', (req, res) => {
    
    res.render('mergerinit')
})

app.get('/merger', (req, res) => {
    
    res.render('merger')
})
app.get('/quiz',(req,res)=>{
	res.render('quiz')
})


// samsung routes
app.get('/samsungsal',(req,res)=>{
	res.render('samsungSales')
})
app.get('/samsungfin',(req,res)=>{
    res.render('samsungFin')
})
app.get('/samsungpro',(req,res)=>{
    res.render('samsungPro')
})
app.get('/samsungrnd',(req,res)=>{
    res.render('samsungRnd')
})

// DLF routes
app.get('/dlfsal',(req,res)=>{
    res.render('dlfSales')
})
app.get('/dlffin',(req,res)=>{
    res.render('dlfFin')
})
app.get('/dlfpro',(req,res)=>{
    res.render('dlfPro')
})
app.get('/dlfrnd',(req,res)=>{
    res.render('dlfRnd')
})

// ola routes
app.get('/olasal',(req,res)=>{
    res.render('olaSales')
})
app.get('/olafin',(req,res)=>{
    res.render('olaFin')
})
app.get('/olapro',(req,res)=>{
    res.render('olaPro')
})
app.get('/olarnd',(req,res)=>{
    res.render('olaRnd')
})
// Indianoil routes
app.get('/indianoilsal',(req,res)=>{
    res.render('iocSales')
})
app.get('/indianoilfin',(req,res)=>{
    res.render('iocFin')
})
app.get('/indianoilpro',(req,res)=>{
    res.render('iocPro')
})
app.get('/indianoilrnd',(req,res)=>{
    res.render('iocRnd')
})

// Mahindra Route
app.get('/mahindrasal',(req,res)=>{
	res.render('mahindraSales')
})
app.get('/mahindrafin',(req,res)=>{
    res.render('mahindraFin')
})
app.get('/mahindrapro',(req,res)=>{
    res.render('mahindraPro')
})
app.get('/mahindrarnd',(req,res)=>{
    res.render('mahindraRnd')
})

app.get('/scoreboardr1',(req,res)=>{
    res.render('scoreboardr1')    
})
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
app.get('/login', (req, res) => {
    res.render('login')
    
})
app.get('/info', (req, res) => {
    res.render('description')
    
})