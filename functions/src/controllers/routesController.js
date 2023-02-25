const DbModel = require("../model/dbModel.js")

class RoutesController { 

    static async getAllData(req, res) {
        try {
            const data = await DbModel.readAllDoc()
         
            return res.status(200).json(data)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    static async getOneData(req, res) {
        try {
            const id = String(req.params.id)
            const data = await DbModel.readOneDoc(id)

            return res.status(200).json(data)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    static async createData(req, res) {
        try {
            const data = req.body
    
            await DbModel.addDoc(data)

            return res.status(200).json({message: "adicionado com sucesso"})
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    static async updateData(req, res) {
        try {
            const id = req.params.id
            const data = req.body

            await DbModel.updateDoc(id, data)

            return res.status(200).json({message: "atualizado com sucesso"})
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    static async deleteData(req, res) {
        try {
            const id = req.params.id
            await DbModel.deleteDoc(id)
            return res.status(200).json({message: "deletado com sucesso"})
        } catch (error) {
            return res.status(400).json(error)
        }

    }
}

module.exports = RoutesController