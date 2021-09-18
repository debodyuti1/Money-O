const router = require("express").Router();

// router.get("/" ,async (req,res)=>{
//     try {
//         const data = await req.body;
//         console.log("this is the data from endpoint", data);
//     } catch (err) {
//         console.log(err);
//     }

//     res.send("welcome to this endpoint");

// });

router.post('/', async(req,res) => {
    try{
        const response = await req.body;
        console.log("THis is the response from post", response);
    } catch(err) {
        console.log(err);
    }
});



module.exports = router;