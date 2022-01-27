const db=require('./../models');
const todoObj = db.Todo;

const Op = db.sequelize.Op;
exports.createTodo =(req,res)=>{
  
    const {text}=req.body;
    console.log(req.body)
    if(text===undefined || text===null || text===""){
        return res.status(400).json({
            success:false,
            message:'Please Enter Todo Title'
        });
    }
    const todo={
        text:text,
        createdAt:Date.now(),
    }
    todoObj.create(todo).then(result=>{
        console.log({result})
        return res.status(200).json({
            success:true,
            message:'New Todo Created'
        })
    }).catch(error=>{
        console.log({error})
        res.status(500).json({
            success:false,
            message:'Error While Inserting Data'
        })
    })
}
exports.getAllTodos = (req,res)=>{
    todoObj.findAll().then(data=>{
        console.log({data})
        return res.status(200).json({
            data
        })
    }).catch(error=>{
        console.log({error})
    })
}
exports.updateTodo=(req,res)=>{
    const {id,text}=req.body;
     todoObj.update({
         text:text
     },{
         where:{id:id}
     }).then(result=>{
         console.log({result})
         return res.status(200).json({
             success:true,
             message:'Todo Updated'
         })
     }).catch(error=>{
         console.log({error})
     })
 }
 exports.deleteTodo=(req,res)=>{
    const {id,text}=req.params;
     todoObj.destroy({
         where:{id:id}
     }).then(result=>{
         console.log({result})
         return res.status(200).json({
             success:true,
             message:'Todo Deleted'
         })
     }).catch(error=>{
         console.log({error})
     })
 }
