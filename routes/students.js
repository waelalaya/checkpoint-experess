const express =require('express')
const router = express.Router ()
const students = require ('../students')


router.get('/students',(req,res)=>{
    res.json(students)
    })
    
    router.get('/students/:id',(req,res)=>{
        let student=students.filter(student=>student.id === parseInt(req.params.id))
        if (student.length === 0){
            res.json({msg:"there's not user with this ID:" + req.params.id})
        }else{
            res.json(student)
        }

        router.delete('/students/:id', (req,res)=>{
            let student = students.filter(student=>student.id !== parseInt(req.params.id))
            res.json(student)
        })

        router.post('/students', (req,res)=>{
            res.send(req.body)
        })
        
    })
    module.exports = router