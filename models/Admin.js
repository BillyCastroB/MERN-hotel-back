import mongoose from "mongoose";

export const AdminSchema = mongoose.Schema({
    usuario: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    },
    token: {
        type: String
    }
})

const Admin = mongoose.model('Admin', AdminSchema);
export default Admin;