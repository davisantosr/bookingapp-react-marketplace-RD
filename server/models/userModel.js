import mongoose from 'mongoose';
import bcrypt from "bcryptjs";

const {Schema} = mongoose;


const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  email: {
    type: String,
    trim: true,
    required: 'Email is required',
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 64
  },
  stripe_account_id: '',
  stripe_seller: {},
  stipeSession: {},
},
  {
    timestamps: true
  }
)
// 2th parameter need to be a conventional func not arrow
userSchema.pre('save', async function(next) {
  let user = this;
  // hash the password only if user change or registering for the first time
  // otherwise each time user.save() will update the password
  
  if(user.isModified('password')) {
    const salt = await bcrypt.genSalt(12)
    return bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) {
        console.log('BCYPT HASH ERROR', err)
        return next(err)
      }
      user.password = hash;
      return next();
    })
  } else {
    return next();
  }
  
})

export default mongoose.model('User', userSchema);