import ElectricityBill from "../model/ElectricityBill.js"


export const getAllBills = async(req,res) =>{
    const {page} = req.query
    try {
        const LIMIT = 9
        const startIndex = (Number(page)-1)*LIMIT
        const total = await ElectricityBill.countDocuments({})

        const bills = await ElectricityBill.find().sort({amount: -1}).limit(LIMIT).skip(startIndex)

        res.status(200).json({bills,noOfPages:Math.ceil(total/LIMIT),currentPage:Number(page)})
    } catch (error) {
        res.status(404).json(error)
    }
}

export const getOneBill = async(req,res) =>{
    const {id} = req.params
    try {
        const bill = await ElectricityBill.findById(id)

        res.status(200).json(bill)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const postBill = async(req,res) =>{
    const bill = new ElectricityBill(req.body)
    try {
        await bill.save()

        res.status(200).json(bill)
    } catch (error) {
        res.status(409).json(error)
    }
}

export const putEditBill = async(req,res) =>{
    const {id} = req.params
    const bill = req.body 
    try {
        const updatedBill = await ElectricityBill.findByIdAndUpdate(id,bill,{new:true})

        res.status(200).json(updatedBill)
    } catch (error) {
        res.status(409).json(error)
    }
}

export const deleteBill = async(req,res) =>{
    const {id} = req.params
    try {
        await ElectricityBill.findByIdAndRemove(id)

        res.status(200).json({message:"Successfully bill record deleted",id: id})
    } catch (error) {
        res.status(404).json(error)
    }
}