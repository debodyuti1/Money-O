const router = require("express").Router();
const Calculated = require("../models/algo");


router.post("/", async (req, res) => {
  const result = [];
  try {
    const response = await req.body;
    var n = response.length;

    var mp = {};

    response.forEach((element) => {
      mp[element.Ower] = 0;
      mp[element.Owner] = 0;
    });

    response.forEach((element) => {
      mp[element.Ower] -= parseInt(element.Amount);
      mp[element.Owner] += parseInt(element.Amount);
    });

    while (Object.keys(mp).length != 0) {
      var p1, p2;
      var mn = Number.MAX_SAFE_INTEGER;
      var mx = Number.MIN_SAFE_INTEGER;

      for (var key in mp) {
        if (mp[key] < mn) {
          mn = mp[key];
          p1 = key;
        }
        if (mp[key] > mx) {
          mx = mp[key];
          p2 = key;
        }
      }
      var amt = Math.min(-mp[p1], mp[p2]);
      if (amt) {
        result.push({
          Ower: p1,
          Owner: p2,
          Amount: amt,
        });
      }

      if (-mp[p1] < mp[p2]) {
        mp[p2] += mp[p1];
        if (mp[p2] == 0) {
          delete mp[p2];
        }
        delete mp[p1];
      } else if (-mp[p1] > mp[p2]) {
        mp[p1] += mp[p2];
        if (mp[p1] == 0) {
          delete mp[p1];
        }
        delete mp[p2];
      } else {
        delete mp[p1];
        delete mp[p2];
      }
    }
  } catch (err) {
    console.log(err);
  }


const newCalculated = new Calculated({
    // ...result,
    resultValues: result,
    // createdAt: createdAt || new Date().toISOString(),

});
console.log("this is the newCalculated", newCalculated);
console.log("this is the result ====>", result);
try{
    await newCalculated.save();
    res.send(result);
    res.status(201).json(newCalculated);
}catch(err) {
    res.status(409).json({ message: error.message});
}
  
});

router.get('/', async(req,res) => {
    const calculated = await Calculated.find().sort({ _id: -1 });
  try {
    res.status(201).json(calculated);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
})

module.exports = router;
