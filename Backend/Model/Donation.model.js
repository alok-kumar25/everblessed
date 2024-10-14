import mongoose from "mongoose";
const donationSchema = new mongoose.Schema({
    donationName: {
        type: String,
        required: true,
    },
    ngo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NGO',
        required: true,  
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    donationType: {
        type: [String],
        enum: ['book', 'blankets', 'toys', 'stationary', 'anything'],
        required: true,  
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',  
    },
    pickupLocation: {
        type: String,
        default: '', 
    },
}, { timestamps: true });

const  Donation = mongoose.model('Donation', donationSchema);
export default Donation;