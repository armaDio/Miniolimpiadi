const mongoose = require("mongoose")

var CounterSchema = mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});
var counter = mongoose.model('counter', CounterSchema);


const atletaSchema = new mongoose.Schema({
    id: Number,
    pettorale: Number,
    name: String,
    surname: String,
    sex: String,
    team: String,
    nascita: String
 },{ collection : 'atleti' });

atletaSchema.pre('save', function(next) {
    var doc = this;
    if(!doc.id)
    {
        counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, function(error, counter)   {
            if(error)
                console.log(error);
            console.log(doc);
            doc.id = counter.seq;
            console.log(doc);
            next();
        });
    }
});

 module.exports = mongoose.model("atleti", atletaSchema)